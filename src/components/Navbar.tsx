import React, { useState } from "react";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Heart, Store } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "donor";

  if (location.pathname === "/auth" && role === "donor") {
    return null;
  }

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
          <div className="hidden md:flex flex-1 items-center justify-center space-x-10 text-[15px] font-medium text-[#044B34]">
            <Link to="/" className="relative pb-1 font-semibold">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6221]"></span>
            </Link>
            <Link to="/role" className="hover:text-[#FF6221] transition-colors pb-1">
              Choose Role
            </Link>
            <Link to="/donor/dashboard" className="hover:text-[#FF6221] transition-colors pb-1">
              Donor Portal
            </Link>
            <Link to="/ngo/dashboard" className="hover:text-[#FF6221] transition-colors pb-1">
              NGO Portal
            </Link>
            <Link to="/donor-register" className="hover:text-[#FF6221] transition-colors pb-1">
              Partner With Us
            </Link>
          </div>

          {/* Right: Button */}
          <div className="flex items-center gap-3">
            <Link
              to="/role"
              className="hidden md:inline-flex bg-[#044B34] text-white px-7 py-2.5 rounded-lg hover:bg-[#044B34]/90 transition-colors font-medium text-[15px]"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#044B34] rounded-lg hover:bg-black/5 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-down Panel */}
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
                className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-base font-semibold text-resq-dark hover:bg-gray-50 active:bg-gray-100"
              >
                <span>Home</span>
              </Link>
              <Link
                to="/role"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-base font-semibold text-resq-dark hover:bg-gray-50 active:bg-gray-100"
              >
                <span>Choose Your Role</span>
                <ArrowRight className="w-4 h-4 text-resq-orange" />
              </Link>
              <Link
                to="/donor/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                <Store className="w-5 h-5 text-resq-green" />
                <span>Donor Dashboard</span>
              </Link>
              <Link
                to="/ngo/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                <Heart className="w-5 h-5 text-resq-orange" />
                <span>NGO Dashboard</span>
              </Link>
              <Link
                to="/donor-register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

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
          </div>
        </div>
      )}
    </>
  );
}
