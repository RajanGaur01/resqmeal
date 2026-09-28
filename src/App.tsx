/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { RoleSelection } from "./components/RoleSelection";
import { Auth } from "./components/Auth";
import { NgoRegistration } from "./components/NgoRegistration";
import { NgoLayout } from "./components/ngo/NgoLayout";
import { NgoDashboard } from "./components/ngo/NgoDashboard";
import { NgoRequests } from "./components/ngo/NgoRequests";
import { NgoPickups } from "./components/ngo/NgoPickups";
import { NgoNearbyFood } from "./components/ngo/NgoNearbyFood";
import { NgoLiveMap } from "./components/ngo/NgoLiveMap";
import { NgoImpact } from "./components/ngo/NgoImpact";
import { NgoProfile } from "./components/ngo/NgoProfile";
import { NgoSuccess } from "./components/NgoSuccess";
import { DonorLayout } from "./components/donor/DonorLayout";
import { DonorDashboard } from "./components/donor/DonorDashboard";
import { DonorDonate } from "./components/donor/DonorDonate";
import { DonorRequests } from "./components/donor/DonorRequests";
import { DonorHistory } from "./components/donor/DonorHistory";
import { DonorAnalytics } from "./components/donor/DonorAnalytics";
import { DonorRegistration } from "./components/DonorRegistration";
import { DonorSuccess } from "./components/DonorSuccess";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-resq-sand text-resq-dark">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />
          <Route
            path="/role"
            element={
              <>
                <Navbar />
                <RoleSelection />
              </>
            }
          />
          <Route
            path="/auth"
            element={
              <>
                <Navbar />
                <Auth />
              </>
            }
          />
          <Route
            path="/donor-portal"
            element={<Navigate to="/auth?role=donor" replace />}
          />
          <Route path="/ngo-register" element={<NgoRegistration />} />
          <Route path="/ngo-success" element={<NgoSuccess />} />
          <Route path="/donor-register" element={<DonorRegistration />} />
          <Route path="/donor-success" element={<DonorSuccess />} />

          {/* Protected NGO Routes (Only verified NGOs can access) */}
          <Route
            path="/ngo"
            element={
              <ProtectedRoute requiredRole="ngo">
                <NgoLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/ngo/dashboard" replace />} />
            <Route path="dashboard" element={<NgoDashboard />} />
            <Route path="requests" element={<NgoRequests />} />
            <Route path="pickups" element={<NgoPickups />} />
            <Route path="nearby" element={<NgoNearbyFood />} />
            <Route path="map" element={<NgoLiveMap />} />
            <Route path="impact" element={<NgoImpact />} />
            <Route path="profile" element={<NgoProfile />} />
          </Route>

          {/* Protected Donor Routes (Only authenticated Donors can access) */}
          <Route
            path="/donor"
            element={
              <ProtectedRoute requiredRole="donor">
                <DonorLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/donor/dashboard" replace />} />
            <Route path="dashboard" element={<DonorDashboard />} />
            <Route path="donate" element={<DonorDonate />} />
            <Route path="requests" element={<DonorRequests />} />
            <Route path="history" element={<DonorHistory />} />
            <Route path="analytics" element={<DonorAnalytics />} />
            <Route
              path="more"
              element={
                <div className="p-8 text-center text-gray-500 font-medium">
                  Additional analytics and export tools coming soon.
                </div>
              }
            />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1b432a",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: 500,
            },
          }}
        />
      </div>
    </AuthProvider>
  );
}
