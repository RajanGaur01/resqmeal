import React from "react";
import { Logo } from "./Logo";
import {
  HomeStoreIcon,
  BowlPlantIcon,
  PeopleIcon,
  AuthBoxIllustration,
  LeavesDecoration,
  BirdsDecoration,
} from "./Assets";
import { Leaf, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-start overflow-hidden pt-2 md:pt-4 bg-[#fdfaf5]">
      {/* Background Decor */}
      {/* Hanging Leaves - Top Left */}
      <div className="absolute top-0 left-0 w-40 md:w-80 h-40 md:h-80 -translate-x-12 -translate-y-12 pointer-events-none z-0">
        <LeavesDecoration className="w-full h-full transform -rotate-12 scale-110 filter drop-shadow-md opacity-90" />
      </div>

      {/* Birds Top Right */}
      <div className="absolute top-8 right-10 md:right-20 w-24 md:w-56 pointer-events-none z-0 hidden sm:block opacity-60">
        <BirdsDecoration className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center w-full max-w-4xl px-4 text-center mt-6 md:mt-12 flex-grow">
        {/* Large Logo */}
        <Logo
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] mb-6 md:mb-8"
          withTaglines={true}
        />

        {/* Process Icons */}
        <div className="flex items-center justify-center space-x-2 md:space-x-6 mt-1 md:mt-2 mb-6 md:mb-8 w-full max-w-sm">
          <div className="text-[#044B34] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
            <HomeStoreIcon className="w-full h-full" />
          </div>

          {/* Dotted line */}
          <div className="flex-grow flex items-center justify-center space-x-1.5 md:space-x-2 opacity-80">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#044B34]"
              ></div>
            ))}
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transform -translate-y-2 flex-shrink-0">
            <BowlPlantIcon className="w-full h-full" />
          </div>

          {/* Dotted line */}
          <div className="flex-grow flex items-center justify-center space-x-1.5 md:space-x-2 opacity-80">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#044B34]"
              ></div>
            ))}
          </div>

          <div className="text-[#044B34] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
            <PeopleIcon className="w-full h-full" />
          </div>
        </div>

        <p className="text-[#044B34]/80 max-w-sm md:max-w-md text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
          Connecting surplus food with those who
          <br className="hidden md:block" />
          need it most, in real-time.
        </p>

        {/* CTA */}
        <div className="relative z-50 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <Link
            to="/role"
            className="inline-block bg-[#044B34] text-white px-8 md:px-10 py-2.5 md:py-3.5 rounded-lg hover:bg-[#044B34]/90 transition-colors font-medium shadow-md text-sm md:text-base active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Landscape illustration container */}
      <div className="absolute bottom-0 left-0 w-full h-[65%] sm:h-[60%] md:h-[55%] pointer-events-none z-0">
        {/* City Skyline Silhouette */}
        <div
          className="absolute bottom-[40%] left-0 w-full h-56 opacity-15"
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 200' preserveAspectRatio='none'%3E%3Cpath d='M0,200 L0,150 L50,150 L50,100 L70,100 L70,140 L100,140 L100,60 L140,60 L140,160 L160,160 L160,80 L200,80 L200,120 L230,120 L230,40 L280,40 L280,180 L300,180 L300,100 L340,100 L340,150 L380,150 L380,50 L420,50 L420,130 L450,130 L450,70 L500,70 L500,160 L520,160 L520,90 L560,90 L560,120 L600,120 L600,20 L650,20 L650,140 L680,140 L680,80 L720,80 L720,160 L750,160 L750,50 L800,50 L800,120 L830,120 L830,90 L880,90 L880,140 L910,140 L910,60 L950,60 L950,150 L1000,150 L1000,200 Z' fill='%23044B34'/%3E%3C/svg%3E\") repeat-x bottom",
            backgroundSize: "1000px 100%",
          }}
        ></div>

        {/* Far light hills */}
        <div className="absolute bottom-[20%] left-0 w-full h-[60%]">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full text-[#E4F0DA] fill-current"
          >
            <path d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Middle green hills */}
        <div className="absolute bottom-[10%] left-0 w-full h-[60%]">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full text-[#90B876]/80 fill-current"
          >
            <path d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          {/* Pathway through hills */}
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full fill-[#fdfaf5] opacity-60"
          >
            <path d="M400,320 Q500,200 450,150 T600,60 L580,50 Q430,130 480,180 T350,320 Z"></path>
          </svg>
        </div>

        {/* Trees Left */}
        <svg
          className="absolute bottom-[35%] left-[6%] w-14 h-24 text-[#598064] z-0 opacity-80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>
        <svg
          className="absolute bottom-[40%] left-[10%] w-20 h-32 text-[#598064] z-0 opacity-90"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>
        <svg
          className="absolute bottom-[15%] left-[25%] w-12 h-20 text-[#598064] z-0 opacity-80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>

        {/* Trees Right */}
        <svg
          className="absolute bottom-[38%] right-[30%] w-20 h-28 text-[#598064] z-0 opacity-80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>
        <svg
          className="absolute bottom-[30%] right-[38%] w-12 h-20 text-[#598064] z-0 opacity-90"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L4 16H10V22H14V16H20L12 2Z" />
        </svg>

        {/* Foreground dark curve */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] text-[#044B34] fill-current z-10">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full absolute bottom-[-1px]"
          >
            <path d="M0,128L80,149.3C160,171,320,213,480,229.3C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        {/* Blurred leaves overlay left side close */}
        <div className="absolute bottom-12 -left-16 w-64 h-64 md:w-96 md:h-96 z-20 text-[#044B34] drop-shadow-2xl opacity-100 transform -rotate-12">
          <LeavesDecoration className="w-full h-full brightness-50" />
        </div>

        {/* Box Illustration on the right - hidden on very narrow mobile to prevent overlapping text */}
        <div className="hidden sm:block absolute bottom-[20%] right-[3%] md:right-[10%] w-56 md:w-[350px] lg:w-[480px] z-10 translate-y-16 lg:translate-y-24">
          <AuthBoxIllustration className="w-full h-auto drop-shadow-2xl" />
        </div>
      </div>

      {/* Feature Items List (Overlaying the dark bottom section) */}
      <div className="relative w-full px-4 sm:px-6 md:px-12 z-30 pb-8 md:pb-10 pt-12 md:pt-4 bg-gradient-to-t from-[#044B34] via-[#044B34] to-transparent mt-auto backdrop-blur-[2px]">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-center py-4 text-[#fdfaf5]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
            {/* Item 1 */}
            <div className="flex items-center space-x-4 sm:border-r border-white/20 sm:pr-4">
              <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 border-[1.5px] border-white/40 rounded-full flex items-center justify-center p-2.5 relative">
                <Leaf className="w-full h-full text-[#90B876]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base lg:text-lg tracking-wide">
                  Reduce Waste
                </h4>
                <p className="text-white/80 text-xs md:text-sm mt-0.5 leading-snug font-light">
                  Diverting surplus food from landfills.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4 sm:border-r border-white/20 sm:px-4">
              <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 border-[1.5px] border-white/40 rounded-full flex items-center justify-center p-2.5">
                <Heart
                  className="w-full h-full text-[#90B876]"
                  fill="currentColor"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base lg:text-lg tracking-wide">
                  Fight Hunger
                </h4>
                <p className="text-white/80 text-xs md:text-sm mt-0.5 leading-snug font-light">
                  Providing food to those in need.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4 sm:pl-4">
              <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 border-[1.5px] border-white/40 rounded-full flex items-center justify-center p-2.5">
                <Globe className="w-full h-full text-[#90B876]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base lg:text-lg tracking-wide">
                  Build Community
                </h4>
                <p className="text-white/80 text-xs md:text-sm mt-0.5 leading-snug font-light">
                  Creating a sustainable future together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
