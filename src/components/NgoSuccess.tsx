import React from "react";
import { Logo } from "./Logo";
import { LeavesDecoration } from "./Assets";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  Lock,
  MailCheck,
  UserCheck,
  Phone,
  Mail,
  Home,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

export function NgoSuccess() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-resq-sand pt-6 md:pt-8 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-48 md:w-80 text-resq-dark/80 -translate-x-12 -translate-y-12 pointer-events-none z-0">
        <LeavesDecoration className="w-full h-full drop-shadow-sm opacity-90" />
      </div>

      {/* Landscape illustration container */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] pointer-events-none z-0">
        {/* City Skyline Silhouette omitted */}

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

        {/* Trees */}
        <div className="absolute right-[10%] bottom-[30%] opacity-80 z-10 w-24 h-32 md:w-32 md:h-40">
          <svg
            viewBox="0 0 100 200"
            fill="currentColor"
            className="w-full h-full text-resq-green/60"
          >
            <path d="M50 0 L90 80 L70 80 L100 150 L0 150 L30 80 L10 80 Z" />
            <rect
              x="40"
              y="150"
              width="20"
              height="50"
              fill="#0f3d2b"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="absolute left-[15%] bottom-[35%] opacity-80 z-10 w-20 h-28 md:w-24 md:h-32">
          <svg
            viewBox="0 0 100 200"
            fill="currentColor"
            className="w-full h-full text-resq-green/60"
          >
            <path d="M50 0 L90 80 L70 80 L100 150 L0 150 L30 80 L10 80 Z" />
            <rect
              x="40"
              y="150"
              width="20"
              height="50"
              fill="#0f3d2b"
              opacity="0.5"
            />
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

        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-resq-dark opacity-50 pointer-events-none">
          <span>Home</span>
          <span>About Us</span>
          <span>How It Works</span>
          <span>Impact</span>
          <span>Partner With Us</span>
          <span>Contact</span>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/"
            className="bg-white border border-gray-200 text-resq-dark px-6 py-2.5 rounded-md hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center pb-24">
        {/* Success Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative z-20 border border-gray-100 flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-[#e8efdf] rounded-full flex items-center justify-center text-resq-dark p-4 mx-auto">
              <FileText className="w-10 h-10" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-resq-dark text-white rounded-full p-1.5 border-[3px] border-white">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="absolute top-2 -right-4 bg-resq-green text-white rounded-full p-1.5 border-[3px] border-white">
              <CheckCircle2 className="w-4 h-4" />
            </div>

            {/* sparkles */}
            <svg
              className="absolute -top-4 -left-4 w-6 h-6 text-resq-light"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <svg
              className="absolute top-10 -right-8 w-4 h-4 text-resq-light"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-resq-dark mb-4">
            Registration Submitted Successfully!
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6 relative w-full max-w-[200px]">
            <div className="flex-grow border-t-2 border-resq-dark"></div>
            <div className="flex-grow border-t-2 border-resq-orange -ml-1"></div>
          </div>

          <p className="text-resq-dark/80 text-base md:text-lg mb-2">
            Your NGO verification request has been received.
          </p>
          <p className="text-resq-dark/80 text-sm md:text-base max-w-lg mb-8">
            Our team is currently reviewing your submitted documents and
            organization details.
          </p>

          <div className="bg-[#e8efdf] rounded-xl py-4 px-8 flex flex-col md:flex-row items-center gap-4 mb-8 border border-[#d1e3ca]">
            <Clock className="w-6 h-6 text-resq-dark" />
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-resq-dark">
                Verification usually takes:
              </p>
              <p className="text-xl font-bold text-resq-dark">24-48 hours</p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6 relative w-full max-w-md">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="relative bg-white px-4 text-resq-dark font-medium text-sm">
              Once approved, you will receive:
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-lg mb-10">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 bg-gray-50 text-resq-dark">
                <UserCheck className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold text-resq-dark">
                Your NGO
                <br />
                Verification ID
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 bg-gray-50 text-resq-dark">
                <Lock className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold text-resq-dark">
                Secure portal
                <br />
                access
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 bg-gray-50 text-resq-dark">
                <MailCheck className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold text-resq-dark">
                Activation
                <br />
                confirmation
              </p>
            </div>
          </div>

          <div className="bg-[#fcfaf5] rounded-xl p-5 border border-[#f0e7d5] w-full flex items-center gap-4 mb-6">
            <div className="text-resq-green">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <p className="text-sm text-resq-dark/80 text-left">
              Thank you for joining ResQMeal and helping us
              <br className="hidden md:block" /> reduce food waste while
              supporting communities in need.
              <span className="text-resq-orange block mt-1">❤</span>
            </p>
          </div>

          <Link
            to="/ngo/dashboard"
            className="w-full bg-[#153e26] hover:bg-[#11311b] text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-md text-base"
          >
            <span>Proceed to NGO Dashboard</span>
            <CheckCircle2 className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="w-full text-center text-sm font-medium text-resq-dark absolute bottom-16 z-20 flex items-center justify-center gap-2">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" /> Need help? Contact our support
          team at
        </span>
        <a
          href="mailto:support@resqmeal.org"
          className="font-bold border-b border-resq-dark pb-0.5"
        >
          support@resqmeal.org
        </a>
        <span>or call</span>
        <span className="font-bold">+91 98765 43210</span>
      </div>

      <div className="w-full text-center text-xs font-medium text-white/80 absolute bottom-4 z-20">
        © 2025 ResQMeal. All rights reserved.
      </div>

      {/* Footer dark bar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-resq-dark z-10"></div>
    </div>
  );
}
