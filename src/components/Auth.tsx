import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  LeavesDecoration,
  GoogleIcon,
  ShopDoorSVGIcon,
} from "./Assets";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Leaf,
  ArrowRight,
  Landmark,
  User,
  Sparkles,
  Loader2,
  Building,
} from "lucide-react";
import { Link, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth, UserRole } from "../context/AuthContext";
import toast from "react-hot-toast";

export function Auth() {
  const [searchParams] = useSearchParams();
  const rawRole = searchParams.get("role");
  const role: UserRole = rawRole === "ngo" ? "ngo" : "donor";

  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [phone, setPhone] = useState("");

  const { login, signup, loginWithGoogle, loginAsDemo, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath =
    (location.state as any)?.from?.pathname ||
    (role === "ngo" ? "/ngo/dashboard" : "/donor/dashboard");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (activeTab === "login") {
        const success = await login(email, password, role);
        if (success) {
          navigate(redirectPath, { replace: true });
        }
      } else {
        // Signup
        if (password.length < 6) {
          toast.error("Password must be at least 6 characters long.");
          setIsSubmitting(false);
          return;
        }

        const success = await signup(email, password, role, {
          displayName: name || (role === "ngo" ? orgName : name),
          orgName: role === "ngo" ? orgName : orgName || name,
          regNumber: role === "ngo" ? regNumber : undefined,
          phone: phone || undefined,
        });

        if (success) {
          navigate(redirectPath, { replace: true });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      const success = await loginWithGoogle(role);
      if (success) {
        navigate(redirectPath, { replace: true });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoSignIn = async () => {
    setIsSubmitting(true);
    try {
      await loginAsDemo(role);
      navigate(redirectPath, { replace: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast("Please enter your email in the field above to reset your password.", {
        icon: "ℹ️",
      });
      return;
    }
    await resetPassword(email);
  };

  return (
    <div
      className={`relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-resq-sand pt-6 md:pt-12 ${
        role === "ngo" ? "pb-24" : "pb-32"
      }`}
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

      {/* Landscape illustration container */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] lg:h-[60%] pointer-events-none z-0 opacity-40">
        <div className="absolute bottom-[20%] left-0 w-full h-[60%]">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full text-resq-light/60 fill-current"
          >
            <path d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-0 w-full h-[60%]">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full text-resq-green/80 fill-current"
          >
            <path d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Side: Branding & Story */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          {role === "donor" ? (
            <div className="relative z-20">
              <Link to="/">
                <Logo className="text-4xl md:text-5xl lg:text-6xl mb-8" />
              </Link>
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
              <p className="text-resq-dark/80 max-w-sm text-sm md:text-base mb-8">
                Join ResQMeal and be part of the movement to reduce food waste and feed hungry communities.
              </p>
            </div>
          ) : (
            <div className="mt-4 md:mt-8 relative z-20 lg:pr-12">
              <Link to="/">
                <Logo className="text-4xl md:text-5xl mb-6" />
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif text-resq-dark leading-[1.15] mb-6">
                Together, We Can
                <br />
                <span className="text-resq-orange">End Food Waste</span>
                <br />
                and Feed More Lives.
              </h1>
              <div className="flex items-center w-24 mb-6">
                <div className="h-[2px] bg-resq-orange w-1/3"></div>
                <div className="h-[2px] bg-gray-300 w-2/3"></div>
              </div>
              <p className="text-resq-dark max-w-[340px] text-sm md:text-base mb-8 font-medium leading-[1.7]">
                ResQMeal works with verified NGOs and shelters to rescue surplus food and distribute it in real-time.
              </p>
            </div>
          )}

          {/* Quick 1-Click Showcase Demo Login */}
          <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-resq-dark/10 shadow-sm max-w-md w-full text-left">
            <div className="flex items-center gap-2 mb-2 text-resq-dark font-bold text-sm">
              <Sparkles className="w-4 h-4 text-resq-orange" />
              <span>Instant Showcase Demo Mode</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Exploring this project? Click below to immediately sign in with our verified demo{" "}
              {role === "ngo" ? "NGO (Hope Feed Foundation)" : "Donor (Green Bites Bistro)"} account:
            </p>
            <button
              type="button"
              onClick={handleDemoSignIn}
              disabled={isSubmitting}
              className="w-full bg-[#eef3ea] hover:bg-[#e1ebd9] text-[#1b432a] font-semibold text-xs py-2.5 px-4 rounded-xl transition-all border border-[#cbe0c1] flex items-center justify-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-resq-orange" />
              <span>Explore as Demo {role === "ngo" ? "NGO" : "Donor"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Auth Form Container */}
        <div
          className={`w-full max-w-[500px] bg-white rounded-[2rem] ${
            role === "ngo"
              ? "shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-10"
              : "shadow-2xl p-6 md:p-8 lg:p-10"
          } relative z-20 mt-4 lg:mt-0 border border-gray-100`}
        >
          {/* Tabs: Login / Sign Up */}
          <div className="flex items-center w-full border-b border-gray-100 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`flex-1 pb-4 text-center font-semibold text-lg transition-colors border-b-2 ${
                activeTab === "login"
                  ? role === "ngo"
                    ? "border-[#1b432a] text-[#1b432a]"
                    : "border-resq-dark text-resq-dark"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`flex-1 pb-4 text-center font-semibold text-lg transition-colors border-b-2 ${
                activeTab === "signup"
                  ? role === "ngo"
                    ? "border-[#1b432a] text-[#1b432a]"
                    : "border-resq-dark text-resq-dark"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Register
            </button>
          </div>

          {/* Role Status Header */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-3 md:p-3.5 mb-6 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  role === "ngo" ? "bg-[#e3ecda] text-[#1b432a]" : "bg-[#feddc4] text-resq-orange"
                }`}
              >
                {role === "ngo" ? (
                  <Landmark className="w-5 h-5" />
                ) : (
                  <ShopDoorSVGIcon className="w-5 h-5" />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-resq-dark text-sm">
                  {role === "ngo" ? "NGO / Charity Portal" : "Food Donor Portal"}
                </h4>
                <p className="text-[11px] text-gray-500">
                  {role === "ngo" ? "Verified distribution partner" : "Surplus meal provider"}
                </p>
              </div>
            </div>
            <Link
              to="/role"
              className="text-xs font-semibold text-resq-orange hover:underline pr-1"
            >
              Change Role
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sign Up extra fields */}
            {activeTab === "signup" && (
              <>
                <div className="relative flex items-center">
                  <User className="absolute left-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="relative flex items-center">
                  <Building className="absolute left-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder={
                      role === "ngo"
                        ? "NGO / Organization Name"
                        : "Business Name (Restaurant / Catering)"
                    }
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
                  />
                </div>

                {role === "ngo" && (
                  <div className="relative flex items-center">
                    <ShieldCheck className="absolute left-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="NGO Registration ID / 12A / 80G No."
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
                    />
                  </div>
                )}
              </>
            )}

            {/* Email Field */}
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Password Field */}
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-resq-dark focus:ring-1 focus:ring-resq-dark transition-all placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Forgot Password link for Login */}
            {activeTab === "login" && (
              <div className="flex items-center justify-between text-xs font-medium text-gray-500 pt-1">
                <span>Enter registered credentials</span>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="font-semibold text-resq-dark hover:text-resq-orange transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 transition-all shadow-md mt-4 active:scale-[0.98] ${
                role === "ngo"
                  ? "bg-[#153e26] hover:bg-[#11311b]"
                  : "bg-resq-dark hover:bg-resq-dark/90"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : activeTab === "login" ? (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute w-full border-t border-gray-100"></div>
            <span className="relative bg-white px-3 text-xs text-gray-400 font-medium">
              or continue with
            </span>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
            className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-3 font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all text-sm active:scale-[0.98]"
          >
            <GoogleIcon className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          {/* Trust Footnote */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400 text-center">
            <ShieldCheck className="w-4 h-4 text-resq-green shrink-0" />
            <span>Secure Firebase End-to-End Authentication</span>
          </div>
        </div>
      </div>
    </div>
  );
}
