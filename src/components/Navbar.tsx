import React, { useState } from "react";
import { Logo } from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight, Heart, Store, LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, userProfile, logout } = useAuth();

  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "donor";

  if (location.pathname === "/auth" && role === "donor") {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    setMobileMenuOpen(false);
    navigate("/");
  };

  const isDonor = userProfile?.role === "donor";
  const userDashboardPath = isDonor ? "/donor/dashboard" : "/ngo/dashboard";
  const userPortalTitle = isDonor ? "Donor Portal" : "NGO Portal";

  return (
    <>
      <nav className="w-full bg-transparent py-4 px-4 sm:px-6 md:px-12 relative z-50">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem]"
              withTaglines={location.pathname === "/auth"}
            />
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8 text-[15px] font-medium text-[#044B34]">
            <Link to="/" className="relative pb-1 font-semibold">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6221]"></span>
            </Link>

            {currentUser ? (
              <>
                <Link to={userDashboardPath} className="hover:text-[#FF6221] transition-colors pb-1 flex items-center gap-1.5">
                  {isDonor ? <Store className="w-4 h-4 text-resq-green" /> : <Heart className="w-4 h-4 text-resq-orange" />}
                  <span>{userPortalTitle}</span>
                </Link>
                {isDonor ? (
                  <Link to="/donor/donate" className="hover:text-[#FF6221] transition-colors pb-1">
                    Donate Food
                  </Link>
                ) : (
                  <Link to="/ngo/nearby" className="hover:text-[#FF6221] transition-colors pb-1">
                    Nearby Food
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to="/role" className="hover:text-[#FF6221] transition-colors pb-1">
                  Choose Role
                </Link>
                <Link to="/auth?role=donor" className="hover:text-[#FF6221] transition-colors pb-1">
                  Donor Login
                </Link>
                <Link to="/auth?role=ngo" className="hover:text-[#FF6221] transition-colors pb-1">
                  NGO Access
                </Link>
                <Link to="/donor-register" className="hover:text-[#FF6221] transition-colors pb-1">
                  Partner With Us
                </Link>
              </>
            )}
          </div>

          {/* Right: Auth Profile / Call To Action */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to={userDashboardPath}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-resq-dark/15 px-3 py-1.5 rounded-full hover:bg-white transition-all shadow-sm"
                >
                  <div className="w-7 h-7 bg-resq-dark text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {(userProfile?.displayName || userProfile?.orgName || "U").substring(0, 1).toUpperCase()}
                  </div>
                  <span className="text-xs font-semibold text-resq-dark max-w-[120px] truncate">
                    {userProfile?.displayName || userProfile?.orgName || "My Account"}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#eef3ea] text-resq-dark">
                    {userProfile?.role || "user"}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/auth?role=donor"
                  className="text-resq-dark hover:text-resq-orange font-semibold text-[15px] px-4 py-2 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/role"
                  className="bg-[#044B34] text-white px-6 py-2.5 rounded-lg hover:bg-[#044B34]/90 transition-colors font-medium text-[15px] shadow-sm active:scale-95"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#044B34] rounded-lg hover:bg-black/5 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative bg-white border-b border-gray-200 shadow-2xl p-6 rounded-b-3xl z-50 flex flex-col max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <Logo className="text-2xl" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-gray-500 hover:text-resq-dark rounded-full"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-4 space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-base font-semibold text-resq-dark hover:bg-gray-50"
              >
                <span>Home</span>
              </Link>

              {currentUser ? (
                <>
                  <Link
                    to={userDashboardPath}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {isDonor ? <Store className="w-5 h-5 text-resq-green" /> : <Heart className="w-5 h-5 text-resq-orange" />}
                    <span>{userPortalTitle}</span>
                  </Link>

                  <div className="p-3 my-2 bg-gray-50 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-resq-dark truncate">{userProfile?.displayName || userProfile?.orgName}</p>
                      <p className="text-[10px] text-gray-500 capitalize">{userProfile?.role} Account</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-xs text-red-600 font-bold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-lg flex items-center gap-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/role"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-base font-semibold text-resq-dark hover:bg-gray-50"
                  >
                    <span>Choose Your Role</span>
                    <ArrowRight className="w-4 h-4 text-resq-orange" />
                  </Link>
                  <Link
                    to="/auth?role=donor"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Store className="w-5 h-5 text-resq-green" />
                    <span>Donor Sign In</span>
                  </Link>
                  <Link
                    to="/auth?role=ngo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Heart className="w-5 h-5 text-resq-orange" />
                    <span>NGO Access Portal</span>
                  </Link>
                  <Link
                    to="/donor-register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <span>Partner With Us</span>
                  </Link>

                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <Link
                      to="/role"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full min-h-[48px] bg-resq-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-resq-dark/90 active:scale-[0.99] transition-all"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
