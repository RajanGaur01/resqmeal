import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "../lib/firebase";
import toast from "react-hot-toast";

export type UserRole = "donor" | "ngo";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: UserRole;
  orgName?: string;
  phone?: string;
  address?: string;
  city?: string;
  regNumber?: string;
  verified?: boolean;
  createdAt?: any;
}

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isFirebaseActive: boolean;
  login: (email: string, password: string, intendedRole?: UserRole) => Promise<boolean>;
  signup: (
    email: string,
    password: string,
    role: UserRole,
    profileData?: Partial<UserProfile>
  ) => Promise<boolean>;
  loginWithGoogle: (role: UserRole) => Promise<boolean>;
  loginAsDemo: (role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USERS: Record<UserRole, UserProfile> = {
  donor: {
    uid: "demo-donor-101",
    email: "donor@resqmeal.org",
    displayName: "Green Bites Bistro",
    role: "donor",
    orgName: "Green Bites Bistro",
    phone: "+91 98765 43210",
    address: "Connaught Place, Central Delhi",
    city: "New Delhi",
    verified: true,
  },
  ngo: {
    uid: "demo-ngo-202",
    email: "hope@resqmeal.org",
    displayName: "Hope Feed Foundation",
    role: "ngo",
    orgName: "Hope Feed Foundation",
    phone: "+91 98112 34567",
    address: "Lajpat Nagar IV",
    city: "New Delhi",
    regNumber: "DL/2023/008492",
    verified: true,
  },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync auth state
  useEffect(() => {
    // Check if session was preserved in localStorage for demo login
    const savedDemoRole = localStorage.getItem("resqmeal_demo_role") as UserRole | null;
    if (savedDemoRole && DEMO_USERS[savedDemoRole]) {
      setUserProfile(DEMO_USERS[savedDemoRole]);
      setCurrentUser({
        uid: DEMO_USERS[savedDemoRole].uid,
        email: DEMO_USERS[savedDemoRole].email,
        displayName: DEMO_USERS[savedDemoRole].displayName,
      } as unknown as User);
      setLoading(false);
      return;
    }

    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setCurrentUser(firebaseUser);
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserProfile(userDoc.data() as UserProfile);
          } else {
            // Default profile if not found in Firestore
            const fallbackRole = (localStorage.getItem("resqmeal_last_role") as UserRole) || "donor";
            const fallbackProfile: UserProfile = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User",
              role: fallbackRole,
              verified: true,
            };
            await setDoc(userDocRef, {
              ...fallbackProfile,
              createdAt: serverTimestamp(),
            });
            setUserProfile(fallbackProfile);
          }
        } catch (error) {
          console.error("Error loading user profile:", error);
          // Fallback profile from auth object
          const role = (localStorage.getItem("resqmeal_last_role") as UserRole) || "donor";
          setUserProfile({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || "User",
            role,
            verified: true,
          });
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string, intendedRole?: UserRole): Promise<boolean> => {
    localStorage.removeItem("resqmeal_demo_role");
    if (!isFirebaseConfigured) {
      toast.error("Firebase is not fully configured with environment variables.");
      return false;
    }

    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      // Fetch user profile
      const userDocRef = doc(db, "users", cred.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data() as UserProfile;
        setUserProfile(data);
        if (intendedRole && data.role !== intendedRole) {
          toast(`Welcome back! Note: Your account is registered as a ${data.role.toUpperCase()}.`, {
            icon: "ℹ️",
          });
        } else {
          toast.success(`Welcome back, ${data.displayName || data.orgName || "User"}!`);
        }
      } else {
        const role = intendedRole || "donor";
        const profile: UserProfile = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName || email.split("@")[0],
          role,
          verified: true,
        };
        await setDoc(userDocRef, { ...profile, createdAt: serverTimestamp() });
        setUserProfile(profile);
        toast.success("Welcome back!");
      }
      return true;
    } catch (error: any) {
      console.error("Login failed:", error);
      let message = "Invalid email or password.";
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
        message = "Incorrect email or password. Please try again.";
      } else if (error.code === "auth/too-many-requests") {
        message = "Too many failed attempts. Please reset password or try again later.";
      } else if (error.code === "auth/network-request-failed") {
        message = "Network error. Please check your internet connection.";
      }
      toast.error(message);
      return false;
    }
  };

  const signup = async (
    email: string,
    password: string,
    role: UserRole,
    profileData?: Partial<UserProfile>
  ): Promise<boolean> => {
    localStorage.removeItem("resqmeal_demo_role");
    if (!isFirebaseConfigured) {
      toast.error("Firebase is not fully configured with environment variables.");
      return false;
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const displayName = profileData?.displayName || profileData?.orgName || email.split("@")[0];

      await updateProfile(cred.user, { displayName });

      const newProfile: UserProfile = {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName,
        role,
        verified: true,
        createdAt: serverTimestamp(),
        ...profileData,
      };

      await setDoc(doc(db, "users", cred.user.uid), newProfile);
      setUserProfile(newProfile);
      localStorage.setItem("resqmeal_last_role", role);
      toast.success(`Account created successfully! Welcome to ResQMeal.`);
      return true;
    } catch (error: any) {
      console.error("Signup failed:", error);
      let message = "Failed to create account.";
      if (error.code === "auth/email-already-in-use") {
        message = "An account already exists with this email address. Please sign in.";
      } else if (error.code === "auth/weak-password") {
        message = "Password should be at least 6 characters.";
      } else if (error.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      }
      toast.error(message);
      return false;
    }
  };

  const loginWithGoogle = async (role: UserRole): Promise<boolean> => {
    localStorage.removeItem("resqmeal_demo_role");
    if (!isFirebaseConfigured) {
      toast.error("Firebase credentials missing. Using Demo Login instead.");
      await loginAsDemo(role);
      return true;
    }

    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);

      const userDocRef = doc(db, "users", cred.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const existingProfile = userDoc.data() as UserProfile;
        setUserProfile(existingProfile);
        toast.success(`Welcome back, ${existingProfile.displayName || "User"}!`);
      } else {
        const newProfile: UserProfile = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName || "Google User",
          role,
          verified: true,
          createdAt: serverTimestamp(),
        };
        await setDoc(userDocRef, newProfile);
        setUserProfile(newProfile);
        toast.success(`Signed in successfully as ${role.toUpperCase()}!`);
      }
      return true;
    } catch (error: any) {
      console.error("Google Auth error:", error);
      if (error.code !== "auth/popup-closed-by-user") {
        toast.error("Google sign-in failed. Please try email login or demo mode.");
      }
      return false;
    }
  };

  const loginAsDemo = async (role: UserRole) => {
    const demoProfile = DEMO_USERS[role];
    localStorage.setItem("resqmeal_demo_role", role);
    setUserProfile(demoProfile);
    setCurrentUser({
      uid: demoProfile.uid,
      email: demoProfile.email,
      displayName: demoProfile.displayName,
    } as unknown as User);
    toast.success(`Logged in as Demo ${role === "donor" ? "Donor (Green Bites Bistro)" : "NGO (Hope Feed Foundation)"}!`);
  };

  const logout = async () => {
    localStorage.removeItem("resqmeal_demo_role");
    if (isFirebaseConfigured && auth.currentUser) {
      try {
        await firebaseSignOut(auth);
      } catch (err) {
        console.error("Logout error:", err);
      }
    }
    setCurrentUser(null);
    setUserProfile(null);
    toast.success("Signed out successfully.");
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!isFirebaseConfigured) {
      toast.success("Demo password reset link sent!");
      return true;
    }
    try {
      await sendPasswordResetEmail(auth, email.trim());
      toast.success("Password reset link sent to your email!");
      return true;
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error(error.message || "Failed to send password reset email.");
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        isFirebaseActive: isFirebaseConfigured,
        login,
        signup,
        loginWithGoogle,
        loginAsDemo,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
