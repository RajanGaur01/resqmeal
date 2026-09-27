import React from "react";
import { Check, ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function DonorSuccess() {
  return (
    <div className="min-h-screen bg-[#f8faf8] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti / Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-resq-green rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-resq-orange rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-resq-sand rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative z-10">
        <div className="w-24 h-24 mx-auto bg-[#e8efdf] rounded-full flex items-center justify-center relative mb-8">
          <div className="absolute inset-0 bg-resq-green rounded-full animate-ping opacity-20"></div>
          <div className="w-16 h-16 bg-resq-green rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
            <Check className="w-8 h-8" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-3xl font-serif font-bold text-resq-dark mb-4">
          Welcome to ResQMeal!
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Your food business account has been created successfully. You're now
          part of a community working towards a zero-waste future.
        </p>

        <div className="bg-[#f0f5ee] rounded-2xl p-5 mb-8 text-left flex items-start gap-3">
          <Leaf className="w-5 h-5 text-resq-green flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-resq-dark text-sm">Next Step</h4>
            <p className="text-xs text-gray-600 mt-1">
              Visit your dashboard to upload your first food donation and start
              making an impact.
            </p>
          </div>
        </div>

        <Link
          to="/donor/dashboard"
          className="w-full bg-resq-dark text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-resq-dark/90 transition-all shadow-lg shadow-resq-dark/20 text-lg group"
        >
          Go to Dashboard{" "}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
