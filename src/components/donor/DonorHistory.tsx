import React from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  Star,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { LandscapeFooter } from "../LandscapeFooter";

export function DonorHistory() {
  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            to="/donor/dashboard"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-resq-dark" />
          </Link>
          <div>
            <h1 className="text-2xl font-serif font-bold text-resq-dark">
              Donation History
            </h1>
            <p className="text-sm text-gray-500">Your past contributions</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-resq-dark hover:bg-gray-50 transition-colors">
            Monthly <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-resq-dark text-white rounded-lg text-sm font-semibold hover:bg-resq-dark/90 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between gap-2 mb-6 text-xs border-b border-gray-100 pb-2">
        <span className="font-semibold text-gray-500">
          Total Donated: 3,250 Meals
        </span>
        <button className="text-resq-green font-bold flex items-center gap-1">
          <Download className="w-3 h-3" /> PDF
        </button>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {/* Item 1 */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 relative">
          <div className="hidden md:flex flex-col items-center justify-center w-24 border-r border-gray-100 pr-4">
            <span className="text-2xl font-bold text-resq-dark">15</span>
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
              May
            </span>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:hidden flex items-center justify-between border-b border-gray-100 pb-2 mb-1">
              <span className="text-xs font-semibold text-gray-400">
                15 May • 2:30 PM
              </span>
              <span className="bg-[#f0f5ee] text-resq-green px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Completed
              </span>
            </div>

            <div className="w-full md:w-32 h-32 md:h-24 rounded-xl overflow-hidden relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=400&auto=format&fit=crop"
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-resq-dark text-lg md:text-base leading-tight">
                  Veg Biryani & Curries
                </h4>
                <span className="hidden md:flex bg-[#f0f5ee] text-resq-green px-2 py-0.5 rounded text-[10px] items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Completed
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">50 kg • ~250 meals</p>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#fcead9] flex items-center justify-center text-resq-orange">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-resq-dark">
                    Helping Hands NGO
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-resq-orange">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 relative">
          <div className="hidden md:flex flex-col items-center justify-center w-24 border-r border-gray-100 pr-4">
            <span className="text-2xl font-bold text-resq-dark">12</span>
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
              May
            </span>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:hidden flex items-center justify-between border-b border-gray-100 pb-2 mb-1">
              <span className="text-xs font-semibold text-gray-400">
                12 May • 10:15 AM
              </span>
              <span className="bg-[#f0f5ee] text-resq-green px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Completed
              </span>
            </div>

            <div className="w-full md:w-32 h-32 md:h-24 rounded-xl overflow-hidden relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1548943487-a2e4142f3609?q=80&w=400&auto=format&fit=crop"
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-resq-dark text-lg md:text-base leading-tight">
                  Mixed Fresh Produce
                </h4>
                <span className="hidden md:flex bg-[#f0f5ee] text-resq-green px-2 py-0.5 rounded text-[10px] items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Completed
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">15 kg • ~75 meals</p>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#faefe4] flex items-center justify-center text-[#d97d33]">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-resq-dark">
                    Feed India Foundation
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-resq-orange">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 text-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 relative opacity-70">
          <div className="hidden md:flex flex-col items-center justify-center w-24 border-r border-gray-100 pr-4">
            <span className="text-2xl font-bold text-resq-dark">05</span>
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
              May
            </span>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:hidden flex items-center justify-between border-b border-gray-100 pb-2 mb-1">
              <span className="text-xs font-semibold text-gray-400">
                05 May • 4:00 PM
              </span>
              <span className="bg-[#f0f5ee] text-resq-green px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Completed
              </span>
            </div>

            <div className="w-full md:w-32 h-32 md:h-24 rounded-xl overflow-hidden relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=400&auto=format&fit=crop"
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-resq-dark text-lg md:text-base leading-tight">
                  Bakery Items & Breads
                </h4>
                <span className="hidden md:flex bg-[#f0f5ee] text-resq-green px-2 py-0.5 rounded text-[10px] items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Completed
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">10 kg • ~50 meals</p>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#f0f5fa] flex items-center justify-center text-blue-500">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-resq-dark">
                    Seva Sarthi NGO
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-resq-orange">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandscapeFooter />
    </div>
  );
}
