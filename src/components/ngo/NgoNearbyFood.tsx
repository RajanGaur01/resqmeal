import React from "react";
import {
  MapPin,
  Search,
  SlidersHorizontal,
  Heart,
  Clock,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export function NgoNearbyFood() {
  const listings = [
    {
      name: "Green Bites Restaurant",
      verified: true,
      dist: "2.4 km",
      meals: "120 Meals",
      pickup: "11:30 AM",
      expires: "2h 15m",
      preparedText: "Freshly Prepared",
      preparedTime: "9:30 AM",
      type: "Veg",
      img: "https://images.unsplash.com/photo-1512152272829-410a5628b031?auto=format&fit=crop&q=80&w=800",
      photos: "5+ Photos",
    },
    {
      name: "Spice Route Kitchen",
      verified: true,
      dist: "3.1 km",
      meals: "80 Meals",
      pickup: "12:00 PM",
      expires: "1h 10m",
      preparedText: "Pickup Soon",
      preparedTime: "10:00 AM",
      type: "Non-Veg",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
      photos: "4+ Photos",
    },
    {
      name: "Daily Dhaba",
      verified: true,
      dist: "4.2 km",
      meals: "60 Meals",
      pickup: "10:45 AM",
      expires: "45m",
      preparedText: "Expiring Fast",
      preparedTime: "9:15 AM",
      type: "Veg",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      photos: "3+ Photos",
    },
    {
      name: "Punjabi Tadka Restaurant",
      verified: true,
      dist: "5.6 km",
      meals: "100 Meals",
      pickup: "1:00 PM",
      expires: "2h 30m",
      preparedText: "Freshly Prepared",
      preparedTime: "10:30 AM",
      type: "Veg",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
      photos: "3+ Photos",
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto pb-24 md:pb-8">
      <div className="mb-8">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1b432a] font-serif mb-1">
          Nearby Food Listings
        </h1>
        <p className="text-[#4a5568] text-[15px]">
          Find and collect food from donors near you
        </p>
      </div>

      {/* Search and filter */}
      <div className="flex gap-3 sm:gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search donor or location"
            className="w-full pl-11 pr-4 py-3 min-h-[44px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1b432a] focus:ring-1 focus:ring-[#1b432a] transition-all text-sm font-medium"
          />
        </div>
        <button className="flex items-center gap-2 border border-gray-200 px-4 sm:px-6 py-3 min-h-[44px] rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 active:scale-95 bg-white shrink-0">
          <SlidersHorizontal className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Location Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 bg-[#f4faf6] border border-[#d6e3cd] rounded-xl px-4 py-3 text-sm">
        <div className="flex items-center gap-2 text-[#1b432a] font-medium">
          <Clock className="w-4 h-4 text-[#4caf50]" /> Showing food available within 10 km
        </div>
        <button className="flex items-center gap-1 font-bold text-[#1b432a] hover:text-[#4caf50] min-h-[36px]">
          Change Location <MapPin className="w-4 h-4" />
        </button>
      </div>

      {/* Listings */}
      <div className="space-y-5">
        {listings.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col md:flex-row gap-5 md:gap-6 hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="w-full md:w-[260px] h-[180px] md:h-[200px] rounded-2xl overflow-hidden relative shrink-0">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm ${item.type === "Veg" ? "bg-white text-green-600" : "bg-white text-red-600"}`}
              >
                {item.type}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                {item.photos}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col pt-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-[20px] font-bold text-[#1b432a] flex items-center gap-1.5 font-serif mb-1">
                    {item.name}{" "}
                    {item.verified && (
                      <svg
                        className="w-4 h-4 text-green-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.1 14.6l-4.2-4.2 1.4-1.4 2.8 2.8 7.1-7.1 1.4 1.4-8.5 8.5z" />
                      </svg>
                    )}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
                    <MapPin className="w-4 h-4" />{" "}
                    {item.name.includes("Connaught")
                      ? "Connaught Place"
                      : item.name.includes("Spice")
                        ? "Karol Bagh"
                        : item.name.includes("Daily")
                          ? "Paharganj"
                          : "Rajinder Nagar"}
                    , New Delhi{" "}
                    <span className="text-[#4caf50] font-bold ml-2">
                      {item.dist}
                    </span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors hidden sm:block">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-8 my-5">
                <div className="flex items-start gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-bold text-[#1b432a] text-[15px] leading-none mb-1">
                      {item.meals}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase">
                      (Approx.)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">
                      Pick up by
                    </p>
                    <p className="font-bold text-[#1b432a] text-[15px] leading-none">
                      {item.pickup}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 border-l border-gray-100 pl-4 md:pl-8">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">
                      Expires in
                    </p>
                    <p
                      className={`font-bold text-[15px] leading-none ${item.expires.includes("45m") || item.expires.includes("1h") ? "text-red-500" : "text-[#f1784b]"}`}
                    >
                      {item.expires}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-1 rounded text-[11px] font-bold ${
                      item.preparedText === "Freshly Prepared"
                        ? "bg-[#eef3ea] text-[#4caf50]"
                        : item.preparedText === "Pickup Soon"
                          ? "bg-[#fff0eb] text-[#f1784b]"
                          : "bg-[#ffe5e5] text-red-500"
                    }`}
                  >
                    {item.preparedText}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    Prepared at {item.preparedTime}
                  </span>
                </div>
                <button className="w-full md:w-[160px] bg-[#1b432a] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-[#153421] transition-colors flex items-center justify-center gap-2">
                  Accept <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
