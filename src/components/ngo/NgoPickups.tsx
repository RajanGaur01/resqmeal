import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Navigation,
  CheckCircle2,
  Package,
  Truck,
  Navigation2,
  Clock,
} from "lucide-react";

export function NgoPickups() {
  const [activeTab, setActiveTab] = useState("in_progress");

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto pb-24 md:pb-8">
      <div className="mb-8">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1b432a] font-serif mb-1">
          Pickup Tracking
        </h1>
        <p className="text-[#4a5568] text-[15px]">
          Track your accepted pickups in real-time
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-6 border-b border-gray-200 overflow-x-auto no-scrollbar pb-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex items-center gap-2 pb-3 border-b-2 font-bold whitespace-nowrap transition-colors ${activeTab === "all" ? "border-[#1b432a] text-[#1b432a]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
          All Pickups
          <span className="px-2 py-0.5 rounded-full text-[11px] bg-gray-200 text-gray-600">
            5
          </span>
        </button>
        <button
          onClick={() => setActiveTab("in_progress")}
          className={`flex items-center gap-2 pb-3 border-b-2 font-bold whitespace-nowrap transition-colors ${activeTab === "in_progress" ? "border-[#1b432a] text-[#1b432a]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
          In Progress
          <span className="px-2 py-0.5 rounded-full text-[11px] bg-[#f1784b] text-white">
            2
          </span>
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent font-bold whitespace-nowrap text-gray-500 hover:text-gray-700 transition-colors">
          Completed
          <span className="px-2 py-0.5 rounded-full text-[11px] bg-gray-200 text-gray-600">
            12
          </span>
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent font-bold whitespace-nowrap text-gray-500 hover:text-gray-700 transition-colors">
          Cancelled
          <span className="px-2 py-0.5 rounded-full text-[11px] bg-gray-200 text-gray-600">
            1
          </span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Active tracking card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Left Info */}
            <div className="lg:w-1/3">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1512152272829-410a5628b031?auto=format&fit=crop&q=80&w=150"
                  alt="Food"
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <div className="bg-[#eef3ea] text-[#4caf50] px-2.5 py-1 rounded-md text-[11px] font-bold mb-2 inline-block">
                    In Progress
                  </div>
                  <h3 className="text-[19px] font-bold text-[#1b432a] font-serif mb-1">
                    Green Bites Restaurant
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
                    <MapPin className="w-4 h-4" /> Connaught Place, New Delhi
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex gap-3">
                  <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1b432a]">120 Meals</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      (Approx.)
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Pickup by
                    </p>
                    <p className="font-bold text-[#1b432a]">11:30 AM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Contact Donor
                </button>
                <button className="flex-1 bg-[#1b432a] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-[#153421] transition-colors flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" /> Navigate
                </button>
              </div>
            </div>

            {/* Right Map */}
            <div className="lg:w-2/3 h-[240px] bg-gray-100 rounded-2xl relative overflow-hidden border border-gray-200">
              {/* Fake Map Background */}
              <img
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1024,c_limit/GoogleMapTA.jpg"
                alt="Map"
                className="w-full h-full object-cover opacity-60 grayscale"
              />

              {/* Route Line overlay */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" }}
              >
                <path
                  d="M 100,100 L 250,110 L 320,150 L 450,160"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Current position */}
              <div className="absolute top-[90px] left-[230px] w-12 h-6 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-2 bg-gray-800 rounded-sm"></div>
              </div>

              {/* Pins */}
              <div className="absolute top-[80px] left-[80px] -translate-x-1/2 -translate-y-[100%]">
                <div className="bg-[#1b432a] text-white p-2 rounded-full shadow-lg border-2 border-white">
                  <Package className="w-5 h-5" />
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1b432a] mx-auto"></div>
              </div>

              <div className="absolute top-[160px] left-[450px] -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg shadow-blue-500/40"></div>
              </div>

              {/* ETA Badge */}
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  ETA
                </p>
                <p className="text-xl font-bold text-[#1b432a]">
                  <span className="text-[#4caf50]">18</span> min
                </p>
              </div>
            </div>
          </div>

          {/* Stepper */}
          <div className="relative pt-8 pb-4">
            <div className="absolute top-11 left-8 right-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="absolute top-11 left-8 w-[60%] h-1 bg-[#1b432a] rounded-full"></div>

            <div className="flex justify-between relative">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#1b432a] text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-center mt-3">
                  <p className="text-[13px] font-bold text-[#1b432a]">
                    Accepted
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium">
                    10:15 AM
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#1b432a] text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-center mt-3">
                  <p className="text-[13px] font-bold text-[#1b432a]">
                    On the Way
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium">
                    10:22 AM
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#1b432a] text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-center mt-3">
                  <p className="text-[13px] font-bold text-[#1b432a]">
                    Reached Donor
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium">
                    10:42 AM
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white text-gray-300 flex items-center justify-center border-4 border-gray-100 shadow-sm z-10">
                  <Package className="w-4 h-4" />
                </div>
                <div className="text-center mt-3">
                  <p className="text-[13px] font-bold text-gray-400">
                    Pickup Complete
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white text-gray-300 flex items-center justify-center border-4 border-gray-100 shadow-sm z-10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-center mt-3">
                  <p className="text-[13px] font-bold text-gray-400">
                    Delivery / Drop-off
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#f4faf6] border border-[#d6e3cd] rounded-xl p-3 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#4caf50] shrink-0" />
            <p className="text-sm font-semibold text-[#1b432a]">
              You have reached the donor location. Please collect the food.
            </p>
          </div>
        </div>

        {/* Small List Items */}
        <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=150"
              alt="Food"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <div className="bg-[#fff0eb] text-[#f1784b] px-2 py-0.5 rounded text-[10px] font-bold mb-1.5 inline-block">
                Pickup Soon
              </div>
              <h3 className="text-base font-bold text-[#1b432a] font-serif mb-0.5">
                Spice Route Kitchen
              </h3>
              <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mb-1.5">
                <MapPin className="w-3 h-3" /> Karol Bagh, New Delhi
              </div>
              <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase">
                <span className="flex items-center gap-1">
                  <Package className="w-3 h-3" /> 80 Meals
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 12:00 PM
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="text-center md:text-right hidden sm:block">
              <p className="font-bold text-[#f1784b] text-base">14 min</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                away
              </p>
            </div>
            <button className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              Navigate <Navigation2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex gap-4 w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=150"
              alt="Food"
              className="w-20 h-20 rounded-xl object-cover grayscale opacity-80"
            />
            <div>
              <div className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold mb-1.5 inline-block">
                Completed
              </div>
              <h3 className="text-base font-bold text-[#1b432a] font-serif mb-0.5">
                Punjabi Tadka Restaurant
              </h3>
              <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mb-1.5">
                <MapPin className="w-3 h-3" /> Rajinder Nagar, New Delhi
              </div>
              <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase">
                <span className="flex items-center gap-1">
                  <Package className="w-3 h-3" /> 100 Meals
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Delivered 12:25 PM
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              View Details{" "}
              <Navigation2 className="w-4 h-4 text-transparent opacity-0 absolute" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
