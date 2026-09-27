import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  LeavesDecoration,
  GoogleIcon,
  AuthBoxIllustration,
  ShopDoorSVGIcon,
  NgoPeopleSVGIcon,
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
  Landmark,
} from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

export function Auth() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "donor"; // 'donor' or 'ngo'
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    if (role === "ngo") {
      navigate("/ngo/dashboard");
    } else {
      navigate("/donor-portal");
    }
  };

  return (
    <div
      className={`relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-resq-sand pt-6 md:pt-12 ${role === "ngo" ? "pb-24" : "pb-64"}`}
    >
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
      <div className="absolute bottom-0 left-0 w-full h-[55%] lg:h-[60%] pointer-events-none z-0">
        {/* City Skyline Silhouette */}
        <div
          className="absolute bottom-[40%] left-0 w-full h-48 opacity-10"
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 200' preserveAspectRatio='none'%3E%3Cpath d='M0,200 L0,150 L50,150 L50,100 L70,100 L70,140 L100,140 L100,60 L140,60 L140,160 L160,160 L160,80 L200,80 L200,120 L230,120 L230,40 L280,40 L280,180 L300,180 L300,100 L340,100 L340,150 L380,150 L380,50 L420,50 L420,130 L450,130 L450,70 L500,70 L500,160 L520,160 L520,90 L560,90 L560,120 L600,120 L600,20 L650,20 L650,140 L680,140 L680,80 L720,80 L720,160 L750,160 L750,50 L800,50 L800,120 L830,120 L830,90 L880,90 L880,140 L910,140 L910,60 L950,60 L950,150 L1000,150 L1000,200 Z' fill='%230f3d2b'/%3E%3C/svg%3E\") repeat-x bottom",
            backgroundSize: "1000px 100%",
          }}
        ></div>

        {/* Far light hills */}
        <div className="absolute bottom-[20%] left-0 w-full h-[60%]">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full text-resq-light/60 fill-current"
          >
            <path d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Middle green hills */}
        <div className="absolute bottom-[10%] left-0 w-full h-[60%]">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full text-resq-green/80 fill-current"
          >
            <path d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          {/* Pathway through hills */}
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full fill-[#f0e7d5] opacity-50"
          >
            <path d="M400,320 Q500,200 450,150 T600,60 L580,50 Q430,130 480,180 T350,320 Z"></path>
          </svg>
        </div>

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

        {/* Large leaves bottom left overlay */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 z-10 text-white/20 transform rotate-12 scale-150 blur-[2px]">
          <LeavesDecoration className="w-full h-full" />
        </div>
        {/* Smaller focused leaves overlay */}
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 z-20 text-resq-green drop-shadow-2xl opacity-90 transform -rotate-12 translate-y-8 -translate-x-8">
          <LeavesDecoration className="w-full h-full" />
        </div>

        {/* Box Illustration on the left */}
        <div className="absolute bottom-[15%] left-[5%] md:left-[8%] lg:left-[12%] w-64 sm:w-80 md:w-[380px] lg:w-[460px] z-10 translate-y-10 lg:translate-y-16">
          <AuthBoxIllustration className="w-full h-auto drop-shadow-xl" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 pb-48">
        {/* Left Side: Branding & Illustration */}
        <div className="flex-1 flex flex-col items-center lg:items-start pt-4 md:pt-12 w-full lg:w-auto text-center lg:text-left">
          {role === "donor" ? (
            <div className="relative z-20">
              {/* Logo */}
              <Link to="/">
                <Logo className="text-4xl md:text-5xl lg:text-6xl mb-8" />
              </Link>

              {/* Divider */}
              <div className="flex flex-col items-center lg:items-start w-full max-w-[280px] mb-8 relative">
                <div className="w-full h-px bg-resq-dark flex items-center justify-center lg:justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-resq-dark"></div>
                </div>
                <p className="text-resq-dark font-serif tracking-[0.2em] text-[11px] md:text-xs uppercase w-full mt-3">
                  Food should reach people,
                  <br />
                  <span className="text-resq-orange">Not Landfills</span>
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-resq-dark leading-tight mb-5">
                Good Food
                <br />
                Can Change
                <br />
                <span className="text-resq-orange">Many Lives</span>
              </h1>

              <p className="text-resq-dark/80 max-w-sm text-sm md:text-base mb-12">
                Join ResQMeal and be a part of the movement to reduce food waste
                and end hunger.
              </p>
            </div>
          ) : (
            <div className="mt-8 md:mt-16 relative z-20 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] font-serif text-resq-dark leading-[1.15] mb-8">
                Together, We Can
                <br />
                <span className="text-resq-orange">End Food Waste</span>
                <br />
                and Feed More Lives.
              </h1>

              <div className="flex items-center w-24 mb-10">
                <div className="h-[2px] bg-resq-orange w-1/3"></div>
                <div className="h-[2px] bg-gray-300 w-2/3"></div>
              </div>

              <p className="text-resq-dark max-w-[340px] text-[15px] md:text-[17px] mb-12 font-medium leading-[1.7]">
                ResQMeal works with NGOs, donors and communities to rescue
                surplus food and reach those who need it most.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Auth Form Container */}
        <div
          className={`w-full max-w-[500px] bg-white rounded-[2rem] ${role === "ngo" ? "shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-12" : "shadow-2xl p-6 md:p-8 lg:p-10"} relative z-20 mt-4 lg:mt-0 border border-gray-100`}
        >
          {role === "donor" ? (
            <>
              {/* Tabs */}
              <div className="flex items-center w-full border-b border-gray-100 mb-6">
                <button className="flex-1 pb-4 text-center font-semibold text-lg text-resq-dark border-b-2 border-resq-dark">
                  Login
                </button>
                <button className="flex-1 pb-4 text-center font-semibold text-lg text-gray-400 hover:text-resq-dark transition-colors">
                  Sign Up
                </button>
              </div>

              <p className="text-sm text-gray-500 font-medium mb-3">
                Signing in as
              </p>

              {/* Role Selector Box */}
              <div className="flex items-center justify-between border border-gray-200 rounded-xl p-3 md:p-4 mb-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark p-2 md:p-2.5">
                    <ShopDoorSVGIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-resq-dark text-sm md:text-base">
                      Donor
                    </h4>
                    <p className="text-xs text-gray-500">
                      I want to donate food
                    </p>
                  </div>
                </div>
                <Link
                  to="/role"
                  className="text-xs font-semibold text-resq-dark hover:text-resq-orange transition-colors pr-1 md:pr-2"
                >
                  Change
                </Link>
              </div>

              {/* Inputs */}
              <div className="space-y-4 mb-4">
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-5 h-5 text-resq-dark/50" />
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-5 h-5 text-resq-dark/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-resq-dark/50 hover:text-resq-dark transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password & Remember Me */}
              <div className="flex items-center justify-between mb-8">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center bg-resq-dark border-resq-dark text-white shadow-sm">
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
                <a
                  href="#"
                  className="text-xs font-semibold text-resq-dark hover:text-resq-orange transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full bg-resq-dark text-white rounded-xl py-3.5 md:py-4 font-semibold flex items-center justify-center gap-2 hover:bg-resq-dark/90 transition-all shadow-lg shadow-resq-dark/20 mb-8 active:scale-[0.98]"
              >
                Login
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute w-full border-t border-gray-100"></div>
                <span className="relative bg-white px-4 text-xs text-gray-400 font-medium">
                  or continue with
                </span>
              </div>

              {/* Google Sign In */}
              <button className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-3.5 font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all mb-6 text-sm active:scale-[0.98]">
                <GoogleIcon className="w-5 h-5" />
                Continue with Google
              </button>

              {/* Bottom Link */}
              <p className="text-center text-sm font-medium text-gray-500">
                New to ResQMeal?{" "}
                <a
                  href="#"
                  className="text-resq-orange font-semibold hover:text-orange-600 transition-colors inline-flex items-center"
                >
                  Sign Up <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center px-1 text-center">
              {/* NGO Header */}
              <div className="w-[88px] h-[88px] bg-[#e3ecda] rounded-full flex items-center justify-center text-resq-dark mb-6 relative">
                <Landmark
                  className="w-11 h-11 text-[#1b432a]"
                  strokeWidth={2}
                />
                <div className="absolute -bottom-1 -right-1 bg-[#1b432a] text-white p-1.5 rounded-full border-[3px] border-white">
                  <ShieldCheck className="w-4 h-4" strokeWidth={3} />
                </div>
              </div>

              <h2 className="text-[28px] font-serif text-[#1b432a] mb-5">
                NGO Access Portal
              </h2>

              {/* Divider */}
              <div className="flex items-center justify-center w-full max-w-[140px] mb-6">
                <div className="w-full h-[1.5px] bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-[#f1784b] mx-4 shrink-0"></div>
                <div className="w-full h-[1.5px] bg-gray-300"></div>
              </div>

              <p className="text-[14px] text-[#4a5568] font-medium text-center mb-6 leading-relaxed">
                Welcome back! Please login to access
                <br />
                your organization dashboard.
              </p>

              {/* Verified NGO Divider */}
              <div className="w-full relative mt-3 mb-3 flex justify-center items-center">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>
                <div className="relative z-10 bg-white px-3 flex items-center justify-center text-[#214e34]">
                  <div className="bg-white rounded-full">
                    <ShieldCheck className="w-[22px] h-[22px] stroke-[1.5]" />
                  </div>
                </div>
              </div>

              <p className="text-[12px] text-gray-500 font-medium mb-8">
                Only verified NGOs can access this portal.
              </p>

              {/* NGO Inputs */}
              <div className="space-y-4 w-full mb-5 relative z-10 text-left">
                <div className="relative border border-gray-200 rounded-xl p-3 md:p-3.5 flex items-start gap-4 bg-white focus-within:border-[#214e34] hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-center pt-2 shrink-0">
                    <Landmark
                      className="w-5 h-5 text-gray-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-col flex-1 pb-1">
                    <label className="text-[12px] text-[#4a5568] font-medium mb-0.5">
                      NGO Registration ID / Registration Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your NGO Registration ID or Registration Number"
                      className="w-full text-[13px] placeholder:text-gray-400 focus:outline-none bg-transparent text-[#214e34]"
                    />
                  </div>
                </div>

                <div className="relative border border-gray-200 rounded-xl p-4 flex items-center gap-4 bg-white focus-within:border-[#214e34] hover:border-gray-300 transition-colors">
                  <Lock
                    className="w-5 h-5 text-gray-400 shrink-0"
                    strokeWidth={1.5}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full text-sm placeholder:text-gray-400 focus:outline-none bg-transparent text-[#214e34]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-[#214e34] transition-colors shrink-0"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full flex justify-end mb-6 relative z-10">
                <a
                  href="#"
                  className="text-xs font-bold text-[#1b432a] hover:text-resq-orange transition-colors tracking-wide"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="relative z-10 w-full bg-[#153e26] text-white rounded-[14px] py-4 text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-[#11311b] transition-all mb-6"
              >
                Login to Dashboard
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </button>

              {/* Security Callout */}
              <div className="relative z-10 w-full bg-[#f6f8f4] rounded-xl p-4 md:p-5 flex items-start gap-4 text-left border border-gray-100">
                <div className="w-[30px] h-[30px] rounded-full border border-[#1b432a] flex items-center justify-center text-[#1b432a] bg-white shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#1b432a] mb-1">
                    Security & Trust
                  </h5>
                  <p className="text-xs text-[#718096] leading-[1.6]">
                    We ensure the security and confidentiality of your
                    organization's
                    <br className="hidden md:block" /> information and
                    activities on ResQMeal.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Display Rules */}
      {role === "donor" ? (
        <div className="absolute bottom-16 left-0 right-0 w-full z-20 px-4">
          <div className="max-w-6xl mx-auto">
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
                    Your data is protected
                    <br />
                    with top security.
                  </p>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-gray-100"></div>

              <div className="flex items-center gap-4 flex-1 p-4 md:p-6 w-full hover:bg-gray-50/50 transition-colors cursor-default">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark relative">
                  <Users
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                    Trusted by Many
                  </h4>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 leading-snug">
                    Partnering with NGOs
                    <br />
                    and donors nationwide.
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
                    Every meal you share
                    <br />
                    makes a difference.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-xs md:text-sm font-medium text-resq-dark/80 pb-6 opacity-90">
              <Lock className="w-4 h-4" />
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
      ) : (
        <div className="absolute bottom-4 left-0 w-full text-center z-20">
          <p className="text-sm font-medium text-resq-dark/70">
            © 2025 ResQMeal. All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
}
