import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth, UserRole } from "../context/AuthContext";
import { Logo } from "./Logo";
import { ShieldAlert, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface ProtectedRouteProps {
  children: React.ReactElement;
  requiredRole?: UserRole;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { currentUser, userProfile, loading } = useAuth();
  const location = useLocation();

  // 1. Loading State
  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-resq-sand">
        <div className="flex flex-col items-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/60">
          <Logo className="text-3xl mb-6 animate-pulse" />
          <div className="flex items-center gap-3 text-resq-dark font-medium">
            <Loader2 className="w-5 h-5 animate-spin text-resq-orange" />
            <span>Authenticating session...</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated check
  if (!currentUser) {
    const targetRole = requiredRole || "donor";
    return (
      <Navigate
        to={`/auth?role=${targetRole}`}
        state={{ from: location }}
        replace
      />
    );
  }

  // 3. Role-Based Access Control (RBAC) check
  if (requiredRole && userProfile?.role && userProfile.role !== requiredRole) {
    const isDonor = userProfile.role === "donor";
    toast.error(
      `Access restricted: You are signed in as a ${userProfile.role.toUpperCase()}. Please switch to an ${requiredRole.toUpperCase()} account.`,
      { id: "rbac-denied" }
    );

    return (
      <Navigate
        to={isDonor ? "/donor/dashboard" : "/ngo/dashboard"}
        replace
      />
    );
  }

  return children;
};
