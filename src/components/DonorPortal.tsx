import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  LeavesDecoration,
  GoogleIcon,
  AuthBoxIllustration,
  ShopDoorSVGIcon,
} from "./Assets";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Users,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function DonorPortal() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/donor/dashboard");
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden bg-resq-sand pt-4 sm:pt-6 md:pt-12 pb-12">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-48 md:w-80 text-resq-dark/80 -translate-x-12 -translate-y-12 pointer-events-none z-0">
        <LeavesDecoration className="w-full h-full drop-shadow-sm opacity-90" />
      </div>

      {/* Little floating leaves */}
      <div className="absolute top-[30%] left-[45%] text-[#598064] opacity-80 w-6 h-6 rotate-45 z-0 hidden lg:block">
        <Leaf className="w-full h-full fill-current" />
      </div>
      <div className="absolute top-[40%] left-[48%] text-[#598064] opacity-60 w-4 h-4 -rotate-12 z-0 hidden lg:block">
        <Leaf className="w-full h-full fill-current" />
      </div>
      <div className="absolute top-[35%] left-[42%] text-[#598064] opacity-70 w-5 h-5 border-2 z-0 hidden lg:block">
        <Leaf className="w-full h-full fill-current" />
      </div>

      {/* Landscape illustration container */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full h-[45%] pointer-events-none z-0 opacity-40">
        {/* Foreground dark curve */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] text-resq-dark fill-current">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full absolute bottom-[-1px]"
          >
            <path d="M0,128L80,149.3C160,171,320,213,480,229.3C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-20 pb-8">
        {/* Left Side: Branding & Illustration */}
        <div className="flex-1 flex flex-col items-center lg:items-start pt-2 md:pt-12 w-full lg:w-auto text-center lg:text-left">
          <div className="relative z-20">
            {/* Logo */}
            <Link to="/">
              <Logo className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8" />
            </Link>

            {/* Divider */}
            <div className="flex flex-col items-center lg:items-start w-full max-w-[280px] mb-6 md:mb-8 relative mx-auto lg:mx-0">
              <div className="w-full h-px bg-resq-dark flex items-center justify-center lg:justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-resq-dark"></div>
              </div>
              <p className="text-resq-dark font-serif tracking-[0.2em] text-[11px] md:text-xs uppercase w-full mt-3">
                Food should reach people,
                <br />
                <span className="text-resq-orange">Not Landfills</span>
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-resq-dark leading-tight mb-4 md:mb-5">
              Good Food
              <br />
              Can Change
              <br />
              <span className="text-resq-orange">Many Lives</span>
            </h1>

            <p className="text-resq-dark/80 max-w-sm text-xs sm:text-sm md:text-base mb-6 lg:mb-12">
              Join ResQMeal and be a part of the movement to reduce food waste
              and end hunger.
            </p>
          </div>
        </div>

        {/* Right Side: Auth Form Container */}
        <div className="w-full max-w-[500px] bg-white rounded-3xl sm:rounded-[2rem] shadow-xl p-5 sm:p-8 lg:p-10 relative z-20 mt-2 lg:mt-0 border border-gray-100">
          {/* Tabs */}
          <div className="flex items-center w-full border-b border-gray-100 mb-6">
            <button className="flex-1 pb-3 sm:pb-4 text-center font-semibold text-base sm:text-lg text-resq-dark border-b-2 border-resq-dark">
              Login
            </button>
            <button className="flex-1 pb-3 sm:pb-4 text-center font-semibold text-base sm:text-lg text-gray-400 hover:text-resq-dark transition-colors">
              Sign Up
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3">
            Signing in as
          </p>

          {/* Role Selector Box */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-3 md:p-4 mb-5 sm:mb-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark p-2 md:p-2.5">
                <ShopDoorSVGIcon className="w-full h-full" />
              </div>
              <div>
                <h4 className="font-semibold text-resq-dark text-sm md:text-base">
                  Donor
                </h4>
                <p className="text-xs text-gray-500">I want to donate food</p>
              </div>
            </div>
            <Link
              to="/role"
              className="text-xs font-semibold text-[#1b432a] hover:text-resq-orange transition-colors pr-1 md:pr-2 min-h-[44px] flex items-center"
            >
              Change
            </Link>
          </div>

          {/* Inputs */}
          <div className="space-y-4 mb-1">
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-resq-dark/50" />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400 min-h-[48px]"
              />
            </div>

            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-resq-dark/50" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-sm font-medium focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400 min-h-[48px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-resq-dark/50 hover:text-resq-dark transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-4 sm:mb-6">
            <a
              href="#"
              className="text-xs font-bold text-[#1b432a] hover:text-resq-orange transition-colors pt-2 min-h-[40px] flex items-center"
            >
              Forgot Password?
            </a>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <label className="flex items-center gap-2 cursor-pointer group min-h-[40px]">
              <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center bg-[#1b432a] border-[#1b432a] text-white shadow-sm">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-600 group-hover:text-resq-dark transition-colors">
                Remember me
              </span>
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full min-h-[48px] bg-[#1b432a] text-white rounded-xl py-3.5 md:py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#153421] transition-all shadow-lg shadow-resq-dark/20 mb-6 active:scale-[0.98]"
          >
            Login
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute w-full border-t border-gray-100"></div>
            <span className="relative bg-white px-4 text-xs text-gray-400 font-medium">
              or continue with
            </span>
          </div>

          {/* Google Sign In */}
          <button className="w-full min-h-[48px] bg-white border border-gray-200 shadow-sm rounded-xl py-3.5 font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all mb-6 text-sm active:scale-[0.98]">
            <GoogleIcon className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Bottom Link */}
          <p className="text-center text-xs sm:text-sm font-medium text-gray-500">
            New to ResQMeal?{" "}
            <a
              href="#"
              className="text-resq-orange font-semibold hover:text-orange-600 transition-colors inline-flex items-center min-h-[40px]"
            >
              Sign Up <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Display Rules in regular document flow */}
      <div className="relative w-full z-20 px-4 mt-6 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl w-full flex flex-col md:flex-row items-center justify-between overflow-hidden border border-white">
          <div className="flex items-center gap-4 flex-1 p-4 md:p-6 w-full hover:bg-gray-50/50 transition-colors cursor-default">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark relative">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
              <div className="absolute inset-0 border border-resq-dark/20 rounded-full scale-[1.1]"></div>
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Safe & Secure
              </h4>
              <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 leading-snug">
                Your data is protected with top security.
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-100"></div>

          <div className="flex items-center gap-4 flex-1 p-4 md:p-6 w-full hover:bg-gray-50/50 transition-colors cursor-default">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark relative">
              <Users className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Trusted by Many
              </h4>
              <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 leading-snug">
                Partnering with NGOs and donors nationwide.
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-100"></div>

          <div className="flex items-center gap-4 flex-1 p-4 md:p-6 w-full hover:bg-gray-50/50 transition-colors cursor-default">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark relative">
              <Leaf className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Make Impact
              </h4>
              <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 leading-snug">
                Every meal you share makes a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-xs md:text-sm font-medium text-resq-dark/80 pb-6 opacity-90 text-center">
          <Lock className="w-4 h-4 shrink-0" />
          <p>
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-resq-dark font-bold hover:text-resq-orange transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-resq-dark font-bold hover:text-resq-orange transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
