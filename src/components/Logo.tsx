import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LogoProps {
  className?: string;
  variant?: "standard" | "circle";
  withTaglines?: boolean;
}

function ResQIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle forming Q */}
      <path
        d="M 50 6 A 44 44 0 1 0 88 77"
        stroke="#044B34"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Hand holding / Q Tail */}
      <path
        d="M 20 75 C 30 85 65 85 85 70 C 85 70 90 65 95 65 C 95 65 80 80 65 85 C 50 88 35 85 20 75 Z"
        fill="#044B34"
      />

      {/* Leaves */}
      <path d="M 48 45 C 40 25 25 30 40 45 Z" fill="#044B34" />
      <path d="M 52 45 C 60 20 80 25 52 45 Z" fill="#044B34" />
      <rect x="48" y="40" width="4" height="15" fill="#044B34" />

      {/* Bowl */}
      <path
        d="M 25 50 L 75 50 C 75 65 60 70 50 70 C 40 70 25 65 25 50 Z"
        fill="#FF6221"
      />

      {/* Heart */}
      <path
        d="M 50 63 Q 44 57 44 54 A 3 3 0 0 1 50 51 A 3 3 0 0 1 56 54 Q 56 57 50 63 Z"
        fill="white"
      />
    </svg>
  );
}

export function Logo({
  className,
  variant = "standard",
  withTaglines = false,
}: LogoProps) {
  if (variant === "circle") {
    return (
      <div
        className={cn(
          "w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center relative shadow-sm overflow-hidden p-[2px]",
          className,
        )}
      >
        <img src="/Q.png" alt="ResQMeal Icon" className="w-full h-full object-contain" />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center font-serif", className)}>
      {withTaglines && (
        <div className="flex items-center w-full justify-center space-x-1 md:space-x-2 mb-1 md:mb-2 px-1">
          <div className="h-[1px] bg-[#044B34] opacity-50 flex-grow max-w-[20px] md:max-w-[40px]"></div>
          <p className="text-[0.25em] sm:text-[0.3em] md:text-[0.35em] text-[#044B34] whitespace-nowrap tracking-wide font-medium">
            Bridging <span className="text-[#FF6221]">Food Surplus</span> and Human Need
          </p>
          <div className="h-[1px] bg-[#FF6221] opacity-60 flex-grow max-w-[20px] md:max-w-[40px]"></div>
        </div>
      )}

      <div className="flex items-center justify-center -space-x-[0.05em]">
        <span
          className="font-bold text-[#044B34] tracking-tight"
          style={{ fontSize: "1em", lineHeight: "1" }}
        >
          Res
        </span>

        <div className="w-[1.1em] h-[1.1em] flex items-center justify-center shrink-0 relative mt-[0.05em] mx-[0.02em]">
          <img src="/Q.png" alt="Q" className="w-[120%] max-w-none h-auto object-contain transform scale-110" />
        </div>

        <span
          className="font-bold text-[#FF6221] tracking-tight"
          style={{ fontSize: "1em", lineHeight: "1" }}
        >
          Meal
        </span>
      </div>

      {withTaglines && (
        <div className="flex flex-col items-center w-full mt-[0.1em] relative px-1">
          <div className="w-full relative flex items-center justify-center mb-1 md:mb-1.5">
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-[#044B34] to-[#FF6221] opacity-50"></div>
            <div className="w-[0.15em] h-[0.15em] rounded-full bg-[#044B34] z-10"></div>
          </div>
          <p className="text-[#044B34] tracking-[0.2em] md:tracking-[0.25em] text-[0.2em] sm:text-[0.22em] md:text-[0.25em] uppercase w-full text-center whitespace-nowrap">
            Food should reach people,{" "}
            <span className="text-[#FF6221]">Not Landfills</span>
          </p>
        </div>
      )}
    </div>
  );
}
