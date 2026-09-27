import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Environment variables configured via .env.local (locally) or Vercel Environment Variables (production)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

if (!isFirebaseConfigured && typeof window !== "undefined") {
  console.warn(
    "⚠️ Firebase configuration is missing or incomplete. Please set VITE_FIREBASE_* environment variables in your .env.local file or deployment settings."
  );
}

// Fallback configuration allows the UI to render smoothly when cloned without initial credentials
const app = initializeApp(
  isFirebaseConfigured
    ? firebaseConfig
    : {
        apiKey: "demo-api-key",
        authDomain: "demo.firebaseapp.com",
        projectId: "demo-resqmeal",
        storageBucket: "demo-resqmeal.firebasestorage.app",
        messagingSenderId: "000000000000",
        appId: "1:000000000000:web:0000000000000000000000"
      }
);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
