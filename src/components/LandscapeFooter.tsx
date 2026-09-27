import React from "react";
import { cn } from "./Logo";

interface LandscapeFooterProps {
  className?: string;
}

export function LandscapeFooter({ className }: LandscapeFooterProps) {
  return (
    <div
      className={cn(
        "w-full relative h-[120px] md:h-[180px] overflow-hidden mt-8 rounded-2xl bg-gradient-to-t from-[#eef3ea] to-transparent",
        className,
      )}
    >
      {/* Sun */}
      <div className="absolute top-4 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-amber-300 rounded-full blur-[1px]"></div>

      {/* Background Cityscape */}
      <div className="absolute bottom-[20%] left-0 right-0 h-1/2 flex items-end justify-around px-10 opacity-30">
        <div className="w-12 h-full bg-[#bcd0b2] rounded-t-md"></div>
        <div className="w-16 h-3/4 bg-[#bcd0b2] rounded-t-md mx-2"></div>
        <div className="w-24 h-full bg-[#bcd0b2] rounded-t-lg"></div>
        <div className="w-14 h-4/5 bg-[#bcd0b2] rounded-t-md mx-2"></div>
        <div className="w-20 h-[110%] bg-[#bcd0b2] rounded-t-lg"></div>
        <div className="hidden md:block w-32 h-[90%] bg-[#bcd0b2] rounded-t-xl mx-2"></div>
        <div className="hidden md:block w-16 h-full bg-[#bcd0b2] rounded-t-md"></div>
        <div className="w-20 h-4/5 bg-[#bcd0b2] rounded-t-lg"></div>
      </div>

      {/* Trees Background */}
      <div className="absolute bottom-[10%] left-[10%] text-[#8ac262] opacity-70">
        <svg width="40" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L6 10H9L4 18H11V22H13V18H20L15 10H18L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-[25%] text-[#8ac262] opacity-60">
        <svg width="30" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L6 10H9L4 18H11V22H13V18H20L15 10H18L12 2Z" />
        </svg>
      </div>

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-[#d1e3ca]">
        <div className="w-full h-full border-t-2 border-dashed border-white/50 relative top-1/2 -mt-[1px]"></div>
      </div>

      {/* Trees Foreground */}
      <div className="absolute bottom-[5%] right-[10%] text-[#0E3E2D]">
        <svg width="50" height="70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[2%] right-[5%] text-[#2e5d42]">
        <svg width="35" height="45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>
      </div>

      {/* Delivery Van */}
      <div className="absolute bottom-[10%] left-1/2 w-16 h-10 md:w-24 md:h-12 bg-white shadow-md rounded-t-md rounded-br-md rounded-bl-sm flex flex-col z-10 transition-transform duration-1000 translate-x-[50px]">
        <div className="flex-1 flex">
          {/* Cab */}
          <div className="w-1/3 h-full border-r border-gray-200 relative">
            <div className="absolute top-1 left-1 w-3/4 h-1/2 bg-blue-100 rounded-tl-sm"></div>
          </div>
          {/* Cargo */}
          <div className="flex-1 h-full bg-[#f46c24] rounded-tr-md flex items-center justify-center relative overflow-hidden">
            {/* ResqMeal Branding on van */}
            <span className="text-white font-serif font-bold text-[8px] md:text-xs z-10">
              ResQMeal
            </span>
            <div className="absolute inset-0 bg-black/10 w-1/2 transform -skew-x-12"></div>
          </div>
        </div>
        {/* Wheels */}
        <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-800 rounded-full absolute -bottom-1.5 md:-bottom-2 left-2 border-2 border-white"></div>
        <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-800 rounded-full absolute -bottom-1.5 md:-bottom-2 right-3 border-2 border-white"></div>
      </div>
    </div>
  );
}
