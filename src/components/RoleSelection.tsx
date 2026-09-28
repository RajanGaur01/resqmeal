import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  BirdsDecoration,
  LeavesDecoration,
  BoxIllustration,
  VeggieBowlIllustration,
  ShopDoorSVGIcon,
  NgoPeopleSVGIcon,
  BowlPlantIcon,
} from "./Assets";
import {
  Leaf,
  Heart,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  X,
  User,
  FilePlus,
} from "lucide-react";
import { Link } from "react-router-dom";

export function RoleSelection() {
  const [showNgoModal, setShowNgoModal] = useState(false);
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-start overflow-x-hidden pt-4 md:pt-8 pb-12">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-48 md:w-80 text-resq-dark/80 translate-x-12 -translate-y-12 pointer-events-none z-0 transform rotate-45 scale-x-[-1]">
        <LeavesDecoration className="w-full h-full drop-shadow-lg opacity-80" />
      </div>
      <div className="absolute top-10 right-20 w-48 pointer-events-none z-0 hidden md:block">
        <BirdsDecoration className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center mt-0">
        {/* Large Logo */}
        <Logo className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-4" />

        <h1 className="text-3xl md:text-5xl font-serif text-resq-dark mb-3 mt-2">
          Choose Your Role
        </h1>
        <p className="text-resq-dark/80 max-w-md md:text-lg mb-8 leading-relaxed">
          Join ResQMeal and be a part of the movement to reduce food waste and
          end hunger.
        </p>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full max-w-5xl mt-2 lg:mt-6 mb-10">
          {/* Donor Card */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-[#bcccb6] rounded-2xl p-6 md:p-8 flex flex-col w-full md:w-[380px] text-left hover:shadow-xl transition-all shadow-md">
            <div className="flex items-start mb-6">
              <div className="relative shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#d1e3ca] rounded-full flex items-center justify-center text-resq-dark p-3.5 md:p-4">
                  <ShopDoorSVGIcon className="w-full h-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-resq-dark text-white rounded-full p-1.5 border-2 border-white">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="ml-4 md:ml-5">
                <h3 className="text-resq-dark font-serif text-xl md:text-2xl font-semibold mb-1">
                  I Want to
                  <br />
                  Donate Food
                </h3>
                <p className="text-resq-dark/60 text-xs">
                  Restaurant, hotel, caterer or individual with surplus food.
                </p>
              </div>
            </div>

            <div className="flex-grow">
              <ul className="space-y-3 mb-6 md:mb-8">
                <li className="flex items-center text-sm font-medium text-resq-dark">
                  <CheckCircle2 className="w-5 h-5 text-resq-dark mr-2 flex-shrink-0" />
                  List surplus food easily
                </li>
                <li className="flex items-center text-sm font-medium text-resq-dark">
                  <CheckCircle2 className="w-5 h-5 text-resq-dark mr-2 flex-shrink-0" />
                  Connect with nearby NGOs
                </li>
                <li className="flex items-center text-sm font-medium text-resq-dark">
                  <CheckCircle2 className="w-5 h-5 text-resq-dark mr-2 flex-shrink-0" />
                  Track your impact
                </li>
              </ul>
            </div>

            <Link
              to="/auth?role=donor"
              className="w-full min-h-[48px] bg-resq-dark text-white py-3.5 px-4 rounded-xl md:rounded-full flex items-center justify-center font-medium hover:bg-resq-dark/90 active:scale-[0.99] transition-all group shadow-sm"
            >
              Continue as Donor
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* NGO Card */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-[#fcd5b8] rounded-2xl p-6 md:p-8 flex flex-col w-full md:w-[380px] text-left hover:shadow-xl transition-all shadow-md">
            <div className="flex items-start mb-6">
              <div className="relative shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#feddc4] rounded-full flex items-center justify-center text-resq-orange p-3.5 md:p-4">
                  <NgoPeopleSVGIcon className="w-full h-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-resq-orange text-white rounded-full p-1.5 border-2 border-white">
                  <Heart className="w-3.5 h-3.5" fill="currentColor" />
                </div>
              </div>
              <div className="ml-4 md:ml-5">
                <h3 className="text-resq-orange font-serif text-xl md:text-2xl font-semibold mb-1">
                  I Represent an
                  <br />
                  NGO / Charity
                </h3>
                <p className="text-resq-dark/60 text-xs">
                  NGO, trust or shelter that helps people and needs food.
                </p>
              </div>
            </div>

            <div className="flex-grow">
              <ul className="space-y-3 mb-6 md:mb-8">
                <li className="flex items-center text-sm font-medium text-resq-orange">
                  <CheckCircle2 className="w-5 h-5 text-resq-orange mr-2 flex-shrink-0" />
                  Find food near you
                </li>
                <li className="flex items-center text-sm font-medium text-resq-orange">
                  <CheckCircle2 className="w-5 h-5 text-resq-orange mr-2 flex-shrink-0" />
                  Request & collect food
                </li>
                <li className="flex items-center text-sm font-medium text-resq-orange">
                  <CheckCircle2 className="w-5 h-5 text-resq-orange mr-2 flex-shrink-0" />
                  Serve more people
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowNgoModal(true)}
              className="w-full min-h-[48px] bg-resq-orange text-white py-3.5 px-4 rounded-xl md:rounded-full flex items-center justify-center font-medium hover:bg-resq-orange/90 active:scale-[0.99] transition-all group shadow-sm"
            >
              Continue as NGO
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Feature Items List in regular document flow */}
      <div className="relative w-full max-w-5xl mx-auto px-4 z-20 mt-4 mb-8">
        <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-4 md:p-6 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d1e3ca] rounded-full flex items-center justify-center text-resq-dark">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Reduce Waste
              </h4>
              <p className="text-resq-dark/70 text-[11px] mt-0.5">
                Save food from disposal
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#feddc4] rounded-full flex items-center justify-center text-resq-orange">
              <Heart className="w-5 h-5" fill="currentColor" />
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Serve People
              </h4>
              <p className="text-resq-dark/70 text-[11px] mt-0.5">
                Feed those in need
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d1e3ca] rounded-full flex items-center justify-center text-resq-dark">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Save Planet
              </h4>
              <p className="text-resq-dark/70 text-[11px] mt-0.5">
                Build a greener future
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-transparent border-2 border-resq-dark rounded-full flex items-center justify-center text-resq-dark">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-sm text-resq-dark">
                Safe & Verified
              </h4>
              <p className="text-resq-dark/70 text-[11px] mt-0.5">
                Trusted community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Landscape illustration container */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full h-[35%] pointer-events-none z-0 opacity-40">
        <div className="absolute bottom-0 left-0 w-full h-full text-resq-dark fill-current">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full absolute bottom-[-1px]"
          >
            <path d="M0,128L80,149.3C160,171,320,213,480,229.3C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* NGO Modal Overlay */}
      {showNgoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            className="absolute inset-0 bg-resq-dark/50 backdrop-blur-sm"
            onClick={() => setShowNgoModal(false)}
          />

          <div className="bg-resq-sand w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 flex flex-col p-5 sm:p-8 md:p-10 animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowNgoModal(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 min-h-[44px] min-w-[44px] flex items-center justify-center text-resq-dark/60 hover:text-resq-dark transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center mt-2 mb-6">
              <div className="w-14 h-14 bg-[#e8efdf] rounded-full flex justify-center items-center mb-3 p-3 shadow-inner">
                <BowlPlantIcon className="w-full h-full text-resq-dark" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-resq-dark mb-2">
                NGO / Organization
              </h2>
              <p className="text-resq-dark/70 text-xs sm:text-sm max-w-md leading-relaxed">
                Join us in making a difference. Collect surplus food and help
                those who need it the most.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mb-6 relative">
              <div className="absolute w-full border-t border-gray-300"></div>
              <span className="relative bg-resq-sand px-3 text-xs sm:text-sm font-semibold text-resq-dark">
                How would you like to proceed?
              </span>
            </div>

            {/* Options Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Card 1: Already Registered */}
              <div className="flex-1 bg-[#f4f7f0] border border-[#d1e3ca] rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full border-2 border-resq-dark flex items-center justify-center mb-3 bg-transparent text-resq-dark">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-resq-dark mb-1">
                  Already Registered
                </h3>
                <p className="text-xs text-resq-dark/70 mb-4 flex-grow">
                  If your NGO is already registered with us, please sign in to
                  continue.
                </p>
                <Link
                  to="/auth?role=ngo"
                  className="w-full min-h-[44px] bg-resq-dark text-white py-3 px-4 rounded-xl flex items-center justify-center font-medium hover:bg-resq-dark/90 transition-colors group"
                >
                  Sign In
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Card 2: Not Registered */}
              <div className="flex-1 bg-[#fff6f0] border border-[#fcd5b8] rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full border-2 border-resq-orange flex items-center justify-center mb-3 bg-transparent text-resq-orange">
                  <FilePlus className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-resq-orange mb-1">
                  Not Registered
                </h3>
                <p className="text-xs text-resq-dark/70 mb-4 flex-grow">
                  Register your NGO with us and get verified to start collecting
                  food.
                </p>
                <Link
                  to="/ngo-register"
                  className="w-full min-h-[44px] bg-resq-orange text-white py-3 px-4 rounded-xl flex items-center justify-center font-medium hover:bg-resq-orange/90 transition-colors group"
                >
                  Register NGO
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Footer Trust Badge */}
            <div className="bg-[#f0e7d5] rounded-xl p-3.5 flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-resq-dark flex-shrink-0" />
              <p className="text-xs text-resq-dark font-medium text-left">
                We verify each NGO to ensure transparency and build a trusted community.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
