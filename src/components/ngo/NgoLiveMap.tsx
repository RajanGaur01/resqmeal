import React from "react";
import {
  Layers,
  Target,
  Navigation2,
  MapPin,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export function NgoLiveMap() {
  return (
    <div className="flex flex-col h-[calc(100vh-72px)] bg-gray-100 relative">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-8 z-10 pointer-events-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="pointer-events-auto">
            <h1 className="text-[28px] md:text-[32px] font-bold text-[#1b432a] font-serif mb-1">
              Live Map View
            </h1>
            <p className="text-[#4a5568] text-[15px] font-medium">
              Track nearby donations and plan your pickups efficiently.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl shadow-sm border border-white/40 pointer-events-auto overflow-x-auto">
            <button className="px-4 py-2 bg-[#eef3ea] text-[#1b432a] rounded-xl text-sm font-bold shadow-sm border border-[#1b432a]/10 whitespace-nowrap">
              All
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-[#1b432a] rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-[#4caf50]"></div>{" "}
              Available
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-[#1b432a] rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-[#f1784b]"></div> Accepted
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-[#1b432a] rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> In
              Transit
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-[#1b432a] rounded-xl text-sm font-bold flex items-center gap-2 pr-6 whitespace-nowrap border-r border-gray-200">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div> Completed
            </button>
            <button className="px-4 py-2 text-[#1b432a] rounded-xl text-sm font-bold flex items-center gap-2 bg-white ml-2 whitespace-nowrap hover:bg-gray-50 border border-gray-200">
              <Layers className="w-4 h-4" /> Layers
            </button>
          </div>
        </div>
      </div>

      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560,c_limit/GoogleMapTA.jpg"
          alt="Map"
          className="w-full h-full object-cover opacity-50 grayscale contrast-125"
        />

        {/* Fake Route */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.15))" }}
        >
          <path
            d="M 400,300 C 450,250 500,400 600,450 C 700,500 750,350 850,300"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
        </svg>

        {/* Map Elements/Pins Overlay */}
        <div className="absolute top-[20%] left-[25%] pointer-events-auto group">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-2 flex gap-3 transform -translate-x-1/2 -translate-y-full mb-3 w-[240px] opacity-0 group-hover:opacity-100 transition-opacity">
            <img
              src="https://images.unsplash.com/photo-1512152272829-410a5628b031?auto=format&fit=crop&w=100&q=80"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#1b432a] text-sm truncate">
                Green Bites Restaurant
              </p>
              <p className="text-xs text-gray-500">120 Meals • Veg</p>
              <div className="flex justify-between items-end mt-1">
                <p className="text-xs text-gray-400">2.4 km away</p>
                <span className="text-[10px] bg-[#eef3ea] text-[#4caf50] px-1.5 py-0.5 rounded font-bold">
                  Available
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center cursor-pointer">
            <div className="w-10 h-10 bg-[#1b432a] rounded-full flex items-center justify-center text-white border-2 border-white shadow-md z-10">
              <MapPin className="w-5 h-5 fill-white" />
            </div>
            <div className="absolute -bottom-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white mix-blend-overlay"></div>
          </div>
        </div>

        {/* Active Transit Point */}
        <div className="absolute top-[40%] left-[55%] pointer-events-auto">
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-3 transform -translate-x-1/2 -translate-y-[120%] w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <Truck className="w-4 h-4 text-blue-500" />
              <p className="font-bold text-blue-600 text-sm">
                Pickup in Progress
              </p>
            </div>
            <p className="text-xs text-gray-500 mb-1">From Green Bites</p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-bold text-[#1b432a]">ETA: 12 min</p>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center relative -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 bottom-24 md:right-8 md:bottom-8 flex flex-col gap-3 z-10 pointer-events-auto">
        <button className="w-11 h-11 md:w-12 md:h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#1b432a] active:scale-95 transition-all" aria-label="Current location">
          <Target className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button className="w-11 h-11 md:w-12 md:h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#1b432a] active:scale-95 transition-all" aria-label="Directions">
          <Navigation2 className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Floating Panel Bottom */}
      <div className="absolute bottom-24 left-4 right-18 md:bottom-8 md:left-8 md:right-auto md:w-[420px] z-10 pointer-events-auto space-y-3">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-5">
          <div className="flex justify-between items-start mb-1">
            <p className="text-xs font-bold text-[#4caf50] uppercase tracking-wide">
              Nearest Donation
            </p>
            <span className="text-[11px] font-bold text-gray-400">2.4 km away</span>
          </div>
          <h3 className="font-bold text-[#1b432a] text-base sm:text-lg font-serif">
            Green Bites Restaurant
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3">
            120 Meals available for pickup
          </p>
          <button className="w-full min-h-[44px] bg-[#1b432a] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-[#153421] active:scale-98 transition-all flex items-center justify-center gap-2">
            View Details <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-2 flex">
          <div className="flex-1 flex flex-col items-center justify-center py-2 border-r border-gray-100">
            <div className="w-7 h-7 rounded-full bg-[#eef3ea] text-[#4caf50] flex items-center justify-center mb-0.5">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <p className="text-base font-bold text-[#1b432a] leading-none mb-0.5">
              4
            </p>
            <p className="text-[9px] text-gray-500 font-bold uppercase">
              Available
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2 border-r border-gray-100">
            <div className="w-7 h-7 rounded-full bg-[#fff0eb] text-[#f1784b] flex items-center justify-center mb-0.5">
              <ShoppingBag className="w-3.5 h-3.5" />
            </div>
            <p className="text-base font-bold text-[#1b432a] leading-none mb-0.5">
              2
            </p>
            <p className="text-[9px] text-gray-500 font-bold uppercase">
              Accepted
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2 border-r border-gray-100 hidden sm:flex">
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-0.5">
              <Truck className="w-3.5 h-3.5" />
            </div>
            <p className="text-base font-bold text-[#1b432a] leading-none mb-0.5">
              1
            </p>
            <p className="text-[9px] text-gray-500 font-bold uppercase">
              In Transit
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2">
            <div className="w-7 h-7 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <p className="text-base font-bold text-[#1b432a] leading-none mb-0.5">
              3
            </p>
            <p className="text-[9px] text-gray-500 font-bold uppercase">
              Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
