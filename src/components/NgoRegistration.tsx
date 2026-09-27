import React from "react";
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
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function NgoRegistration() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/ngo-success");
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-resq-sand pt-6 md:pt-8 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-48 md:w-80 text-resq-dark/80 -translate-x-12 -translate-y-12 pointer-events-none z-0">
        <LeavesDecoration className="w-full h-full drop-shadow-sm opacity-90" />
      </div>

      {/* Landscape illustration container */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] pointer-events-none z-0">
        {/* City Skyline Silhouette is omitted for token limit but would be here */}

        {/* Far light hills */}
        <div className="absolute bottom-[25%] left-0 w-full h-[60%]">
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
        </div>

        {/* Pathway */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-[5%] w-full h-[70%] fill-[#f0e7d5] opacity-50 z-0"
        >
          <path d="M300,320 Q400,200 450,150 T600,60 L580,50 Q430,130 480,180 T250,320 Z"></path>
        </svg>

        {/* Foreground dark curve */}
        <div className="absolute bottom-0 left-0 w-full h-[30%] text-resq-dark fill-current">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full absolute bottom-[-1px]"
          >
            <path d="M0,128L80,149.3C160,171,320,213,480,229.3C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
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

        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-resq-dark">
          <Link to="/" className="hover:text-resq-orange transition-colors">
            Home
          </Link>
          <a href="#" className="hover:text-resq-orange transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-resq-orange transition-colors">
            How It Works
          </a>
          <a href="#" className="hover:text-resq-orange transition-colors">
            Impact
          </a>
          <a href="#" className="hover:text-resq-orange transition-colors">
            Partner With Us
          </a>
          <a href="#" className="hover:text-resq-orange transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/auth?role=ngo"
            className="flex items-center gap-2 text-sm font-semibold text-resq-dark hover:text-resq-orange transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-resq-dark/10"
          >
            <UploadCloud className="w-4 h-4" />
            Already Registered?
          </Link>
          <Link
            to="/auth?role=ngo"
            className="bg-resq-dark text-white px-6 py-2.5 rounded-md hover:bg-resq-dark/90 transition-colors font-medium text-sm"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 pb-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start lg:pt-8 w-full lg:w-auto relative lg:max-w-md xl:max-w-lg">
          <h1 className="text-4xl md:text-[44px] lg:text-[50px] font-serif text-resq-dark leading-[1.15] mb-4">
            Register Your NGO
          </h1>

          {/* Underline decorative */}
          <div className="flex items-center w-full max-w-[120px] mb-8">
            <div className="w-2 h-2 rounded-full bg-resq-dark mr-2"></div>
            <div className="flex-grow h-0.5 bg-resq-orange"></div>
          </div>

          <p className="text-resq-dark text-sm md:text-base leading-relaxed mb-10 font-bold bg-white/40 backdrop-blur-md p-5 border border-white/60 rounded-2xl shadow-sm">
            Join ResQMeal and be part of the movement to reduce food waste and
            end hunger.
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
                  We ensure transparency and trust in everything we do.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 border-l-4 border-l-resq-dark">
              <div className="w-10 h-10 border border-resq-dark/40 rounded-full flex justify-center items-center flex-shrink-0 bg-white shadow-sm">
                <Users className="w-5 h-5 text-resq-dark" />
              </div>
              <div>
                <h4 className="font-bold text-resq-dark text-sm mb-1">
                  Impact That Matters
                </h4>
                <p className="text-resq-dark/80 text-xs">
                  Your work helps save food and change lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 border-l-4 border-l-resq-dark">
              <div className="w-10 h-10 border border-resq-dark/40 rounded-full flex justify-center items-center flex-shrink-0 bg-white shadow-sm">
                <Globe className="w-5 h-5 text-resq-dark" />
              </div>
              <div>
                <h4 className="font-bold text-resq-dark text-sm mb-1">
                  Together We Can
                </h4>
                <p className="text-resq-dark/80 text-xs">
                  Join a growing community of changemakers.
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
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="w-12 border-t-2 border-resq-dark"></div>
                <div className="w-2 h-2 rounded-full bg-resq-dark mx-2"></div>
                <div className="w-12 border-t-2 border-resq-orange"></div>
              </div>
              <p className="text-resq-dark/70 text-sm">
                Please fill in the details below to register your organization.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  1. NGO / Trustee First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter first name"
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
                    placeholder="Enter last name"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-semibold text-resq-dark mb-2">
                3. NGO / Organization Name
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter NGO / Organization name"
                  className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Address Block */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-resq-dark mb-1">
                4. Registered Address
              </label>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter address line 1"
                  className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter address line 2 (Optional)"
                  className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <select className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none appearance-none bg-white text-gray-500">
                  <option>Select State</option>
                  <option>State 1</option>
                </select>

                <select className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none appearance-none bg-white text-gray-500">
                  <option>Select District</option>
                  <option>District 1</option>
                </select>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  5. Select Document Type
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none appearance-none bg-white text-gray-500">
                    <option>Select document</option>
                    <option>Aadhar Card</option>
                    <option>PAN Card</option>
                  </select>
                </div>
                <p className="text-[11px] text-gray-500 mt-1.5 ml-1">
                  Options: Aadhar Card, PAN Card
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  6. Enter Document Number
                </label>
                <div className="relative">
                  <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter document number"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  7. Registration Certificate Upload
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                  <UploadCloud className="w-8 h-8 text-resq-dark/50 mb-2 group-hover:text-resq-dark transition-colors" />
                  <p className="text-sm font-semibold text-resq-dark">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, JPG, PNG (Max. 5MB)
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-resq-dark mb-2">
                  8. Unique ID
                </label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Unique ID issued to your organization"
                    className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-resq-dark focus:ring-1 focus:ring-resq-dark outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <p className="text-[11px] text-gray-500 mt-1.5 ml-1">
                  This could be Darpan ID, CSR ID, 12A/80G No. or any other
                  Unique ID
                </p>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-resq-dark text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-resq-dark/90 transition-all shadow-lg active:scale-[0.98] group mt-4"
            >
              <ShieldCheck className="w-5 h-5" />
              Register Organization
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
            </button>

            <div className="flex items-center justify-center text-xs font-medium text-gray-500 gap-2 mt-4">
              <ShieldCheck className="w-4 h-4 text-resq-dark" />
              Your information is secure and will only be used for verification
              purposes.
            </div>
          </form>
        </div>
      </div>

      <div className="w-full text-center text-xs font-medium text-white/80 absolute bottom-4 z-20">
        © 2025 ResQMeal. All rights reserved.
      </div>

      {/* Footer dark bar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-resq-dark z-10"></div>
    </div>
  );
}
