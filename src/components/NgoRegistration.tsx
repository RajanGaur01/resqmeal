import React, { useState } from "react";
import { Logo } from "./Logo";
import { LeavesDecoration, AuthBoxIllustration } from "./Assets";
import {
  ShieldCheck,
  Users,
  Globe,
  Building,
  User,
  MapPin,
  FileText,
  IdCard,
  UploadCloud,
  ArrowRight,
  Mail,
  Lock,
  Phone,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export function NgoRegistration() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("New Delhi");
  const [docType, setDocType] = useState("12A/80G Certificate");
  const [docNumber, setDocNumber] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !orgName || !firstName) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const fullName = `${firstName} ${lastName}`.trim();
      const success = await signup(email, password, "ngo", {
        displayName: fullName,
        orgName,
        phone,
        address,
        city,
        regNumber: uniqueId || docNumber || "NGO-PENDING",
      });

      if (success) {
        navigate("/ngo-success");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-resq-sand pt-6 md:pt-8 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-48 md:w-80 text-resq-dark/80 -translate-x-12 -translate-y-12 pointer-events-none z-0">
        <LeavesDecoration className="w-full h-full drop-shadow-sm opacity-90" />
      </div>

      {/* Landscape illustration container */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] pointer-events-none z-0 opacity-40">
        <div className="absolute bottom-[25%] left-0 w-full h-[60%]">
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

      {/* Top Navbar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between z-20 mb-8 md:mb-12">
        <div className="flex flex-col items-start w-full max-w-[280px] relative">
          <Link to="/">
            <Logo className="text-3xl md:text-4xl" />
          </Link>
          <div className="w-full border-b border-resq-stone mt-2 pb-2">
            <div className="flex items-center w-full max-w-[150px]">
              <div className="flex-grow h-px bg-resq-dark"></div>
              <div className="w-1 h-1 rounded-full bg-resq-dark mx-1"></div>
              <div className="flex-grow h-px bg-resq-orange"></div>
            </div>
            <p className="text-resq-dark font-serif tracking-[0.1em] text-[8px] md:text-[9px] uppercase w-full mt-2">
              Food should reach people,
              <br />
              <span className="text-resq-orange">Not Landfills</span>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/auth?role=ngo"
            className="flex items-center gap-2 text-sm font-semibold text-resq-dark hover:text-resq-orange transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-resq-dark/10"
          >
            Already Registered?
          </Link>
          <Link
            to="/auth?role=ngo"
            className="bg-resq-dark text-white px-6 py-2.5 rounded-md hover:bg-resq-dark/90 transition-colors font-medium text-sm"
          >
            Sign In
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 pb-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start lg:pt-8 w-full lg:w-auto relative lg:max-w-md xl:max-w-lg">
          <h1 className="text-4xl md:text-[44px] lg:text-[50px] font-serif text-resq-dark leading-[1.15] mb-4">
            Register Your NGO
          </h1>

          <div className="flex items-center w-full max-w-[120px] mb-8">
            <div className="w-2 h-2 rounded-full bg-resq-dark mr-2"></div>
            <div className="flex-grow h-0.5 bg-resq-orange"></div>
          </div>

          <p className="text-resq-dark text-sm md:text-base leading-relaxed mb-10 font-bold bg-white/40 backdrop-blur-md p-5 border border-white/60 rounded-2xl shadow-sm">
            Join ResQMeal and be part of the movement to rescue surplus food and distribute it to communities in need.
          </p>

          <div className="flex flex-col space-y-6 w-full mb-12">
            <div className="flex items-start gap-4 p-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 border-l-4 border-l-resq-dark">
              <div className="w-10 h-10 border border-resq-dark/40 rounded-full flex justify-center items-center flex-shrink-0 bg-white shadow-sm">
                <ShieldCheck className="w-5 h-5 text-resq-dark" />
              </div>
              <div>
                <h4 className="font-bold text-resq-dark text-sm mb-1">
                  Verified NGOs Only
                </h4>
                <p className="text-resq-dark/80 text-xs">
                  We ensure transparency and trust in food distribution.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 border-l-4 border-l-resq-dark">
              <div className="w-10 h-10 border border-resq-dark/40 rounded-full flex justify-center items-center flex-shrink-0 bg-white shadow-sm">
                <Users className="w-5 h-5 text-resq-dark" />
              </div>
              <div>
                <h4 className="font-bold text-resq-dark text-sm mb-1">
                  Real-time Matching
                </h4>
                <p className="text-resq-dark/80 text-xs">
                  Connect immediately with donors in your local area.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-sm h-48 md:h-64 mt-auto z-10 hidden md:block">
            <AuthBoxIllustration className="w-full h-full drop-shadow-2xl" />
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full flex-grow bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 md:p-10 lg:p-12 relative z-20 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 border-b border-gray-100 pb-8 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark p-3">
                <FileText className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-resq-dark text-white rounded-full p-1 border-2 border-white">
                <span className="font-bold text-xs">+</span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-serif font-bold text-resq-dark mb-2">
                NGO Registration
              </h2>
              <p className="text-resq-dark/70 text-sm">
                Enter your organization details to create your verified portal account.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Trustee / Contact Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  1. Trustee / Head First Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  2. Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Organization Name */}
            <div>
              <label className="block text-sm font-semibold text-resq-dark mb-2">
                3. NGO / Organization Name *
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. Hope Feed Foundation"
                  className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Account Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f8faf8] p-5 rounded-2xl border border-gray-100">
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  4. Official Email (Login) *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@hopefoundation.org"
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  5. Account Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-resq-dark mb-1">
                6. Registered Address & Location *
              </label>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Operational address / center"
                  className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City (e.g. New Delhi)"
                  className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none placeholder:text-gray-400"
                />
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Helpline / Contact Phone"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Registration ID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  7. NGO Unique ID / Darpan ID
                </label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                    placeholder="e.g. DL/2023/008492"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  8. Verification Document Type
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={docType}
                    onChange={(e) => setDocType(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none appearance-none bg-white text-gray-600"
                  >
                    <option value="12A/80G Certificate">12A / 80G Certificate</option>
                    <option value="Darpan Registration">NITI Aayog Darpan ID</option>
                    <option value="Trust Deed">Trust Deed / Society Registration</option>
                    <option value="FCRA Certificate">FCRA Certificate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#153e26] hover:bg-[#11311b] text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] group mt-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Registering Organization...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Complete NGO Registration</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
