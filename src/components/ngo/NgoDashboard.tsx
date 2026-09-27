import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  Truck,
  Leaf,
  Users,
  Search,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { collection, query, where, onSnapshot, orderBy, writeBatch, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import toast from "react-hot-toast";

interface Donation {
  id: string;
  foodName: string;
  type: string;
  quantity: string;
  expiryTime: string;
  donationType: string;
  totalDonorPrice?: number;
  totalNgoPrice?: number;
  commissionRate?: number;
  pickupTiming: string;
  location: string;
  imageUrl: string;
  status: string;
  ngoAssigned: string | null;
  createdAt: any;
}

export function NgoDashboard() {
  const [donations, setDonations] = useState<Donation[]>([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "donations"),
      where("status", "==", "pending")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Donation[];
        // sort by length for now since we don't have indexes
        setDonations(docs);
      },
      (error) => {
        console.error("Firestore error:", error);
        if (error.message.includes("permission-denied")) {
          toast.error("Please update Firestore rules to 'allow read, write: if true;' in Firebase Console.");
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const handleAcceptDonation = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const batch = writeBatch(db);
      const donationRef = doc(db, "donations", id);
      batch.update(donationRef, {
        status: "accepted",
        ngoAssigned: "Helping Hands NGO", // Placeholder NGO name
      });
      await batch.commit();
      toast.success("Donation accepted successfully! You can contact the donor now.");
    } catch (error) {
      console.error("Error accepting donation", error);
      toast.error("Failed to accept donation.");
    }
  };
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto pb-24 md:pb-8">
      {/* Welcome Banner */}
      <div className="relative bg-[#eaf1e4] rounded-3xl p-6 md:p-10 mb-8 overflow-hidden border border-[#d6e3cd]">
        {/* Background Decorative Pattern (resembling a map route) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none hidden md:block">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50,150 L 150,100 L 250,130 L 350,50"
              stroke="#1b432a"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            <circle cx="50" cy="150" r="10" fill="#1b432a" />
            <circle cx="150" cy="100" r="10" fill="#1b432a" />
            <circle cx="250" cy="130" r="10" fill="#1b432a" />
            <circle cx="350" cy="50" r="10" fill="#1b432a" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-[28px] md:text-[34px] font-bold text-[#1b432a] leading-tight mb-2 font-serif">
            Good Morning,
            <br />
            Helping Hands NGO 👋
          </h1>
          <p className="text-[#3c6b4f] text-[15px] font-medium max-w-md">
            Let's rescue more food and feed more lives today.
          </p>
        </div>
      </div>

      {/* Available Nearby Banner */}
      <div className="bg-[#f2f6ee] border border-[#e3ecda] rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-6 z-10 w-full md:w-auto">
          <div className="w-16 h-16 bg-[#1b432a] rounded-full flex items-center justify-center shrink-0">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 16v-3a4 4 0 1 1 8 0v3" />
              <path d="M18 16v-3a4 4 0 0 0-8 0" />
              <path d="M8 12v4" />
              <path d="M16 12v4" />
              <rect x="2" y="16" width="20" height="6" rx="2" />
            </svg>
          </div>
          <div>
            <p className="text-[#4a5568] text-[13px] font-bold mb-1 uppercase tracking-wide">
              Food Available Nearby
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[32px] font-bold text-[#1b432a] leading-none">
                1,250
              </span>
              <span className="text-[16px] font-bold text-[#1b432a]">
                Meals
              </span>
            </div>
            <p className="text-[#718096] text-sm">From 18+ donors near you</p>
          </div>
        </div>
        <Link
          to="/ngo/nearby"
          className="w-full md:w-auto bg-[#1b432a] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#153421] transition-colors z-10"
        >
          Explore Nearby <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Nearby Food Listings */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[19px] font-bold text-[#1b432a] font-serif">
            Nearby Food Listings
          </h2>
          <Link
            to="/ngo/nearby"
            className="text-sm font-bold text-[#f1784b] hover:text-[#d9653a]"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {donations.length === 0 ? (
            <div className="col-span-full py-12 text-center text-gray-500 font-medium">
              No pending donations nearby right now.
            </div>
          ) : (
            donations.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-gray-200 relative">
                  <img
                    src={listing.imageUrl || "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800"}
                    alt={listing.foodName}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 left-3 px-2 py-1 rounded bg-white text-xs font-bold shadow-sm ${listing.type === "Veg" ? "text-green-600" : "text-red-600"}`}
                  >
                    {listing.type}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-[#1b432a] flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-[#f1784b]" />{" "}
                    {listing.expiryTime}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#1b432a] text-base mb-3 truncate flex justify-between items-start">
                    <span>{listing.foodName}</span>
                    {listing.donationType === "Low-Cost" && listing.totalNgoPrice && (
                      <span className="text-sm bg-orange-100 text-[#f1784b] px-2 py-0.5 rounded flex flex-col items-end shrink-0 ml-2">
                        <span className="flex items-center font-bold">
                          ₹{listing.totalNgoPrice}
                        </span>
                        <span className="text-[10px] text-gray-500 font-normal mt-0.5">
                          (₹{listing.totalDonorPrice} + {(listing.commissionRate! * 100).toFixed(0)}% fee)
                        </span>
                      </span>
                    )}
                    {listing.donationType === "Free" && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded shrink-0 ml-2">
                        Free
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <ShoppingBag className="w-4 h-4 text-gray-400" />
                      {listing.quantity}
                    </div>
                    <div className="flex items-center gap-1 truncate max-w-[120px]">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0" /> {listing.location || "Nearby"}
                    </div>
                  </div>
                  <button 
                    onClick={(e) => handleAcceptDonation(listing.id, e)}
                    className="mt-auto w-full min-h-[44px] bg-[#f6f9f4] text-[#1b432a] py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#eef3ea] active:scale-[0.98] transition-all border border-[#e3ecda]"
                  >
                    Accept <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Grid: Live Pickup & Today's Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Pickup */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[17px] font-bold text-[#1b432a] font-serif">
              Live Pickup
            </h2>
            <Link
              to="/ngo/pickups"
              className="text-sm font-bold text-[#f1784b] hover:text-[#d9653a]"
            >
              View All
            </Link>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-4 pl-6 pb-6 space-y-6">
            <div className="relative">
              <div className="absolute -left-[35px] top-0 w-6 h-6 bg-white border-2 border-[#1b432a] rounded-full flex items-center justify-center">
                <Truck className="w-3 h-3 text-[#1b432a]" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-[#1b432a] text-[15px] mb-1">
                    Green Bites Restaurant
                  </h4>
                  <p className="text-[#4caf50] text-xs font-bold">
                    Pickup in progress
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    ETA
                  </p>
                  <p className="font-bold text-[#1b432a] text-[15px]">20 min</p>
                </div>
              </div>
            </div>

            <div className="relative opacity-50">
              <div className="absolute -left-[33px] top-1 w-5 h-5 bg-white border-2 border-gray-300 rounded-full"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-500 text-sm mb-1">
                    On the way to you
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    ETA
                  </p>
                  <p className="font-bold text-gray-500 text-sm">10 min</p>
                </div>
              </div>
            </div>

            <div className="relative opacity-50">
              <div className="absolute -left-[33px] top-1 w-5 h-5 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-500 text-sm mb-1">
                    Expected delivery
                  </h4>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-400 text-[13px]">
                    Today, 11:30 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full min-h-[48px] mt-4 bg-white border border-[#e3ecda] text-[#1b432a] py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-[#f6f9f4] active:scale-[0.99] transition-all shadow-sm">
            Track Pickup <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Today's Impact */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-[17px] font-bold text-[#1b432a] font-serif mb-6">
            Today's Impact
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-[#fdfaf8] p-4 rounded-xl border border-[#fde8d9]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#fcf1eb] flex items-center justify-center text-[#e8906c]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="font-medium text-[#4a5568] text-[15px]">
                  Meals Rescued
                </span>
              </div>
              <span className="font-bold text-[#1b432a] text-xl">350</span>
            </div>

            <div className="flex justify-between items-center bg-[#f7f6fc] p-4 rounded-xl border border-[#edeaf6]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f1eff8] flex items-center justify-center text-[#8a72c1]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-medium text-[#4a5568] text-[15px]">
                  People Fed
                </span>
              </div>
              <span className="font-bold text-[#1b432a] text-xl">210</span>
            </div>

            <div className="flex justify-between items-center bg-[#f4faf6] p-4 rounded-xl border border-[#e3ecda]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#eaf4ed] flex items-center justify-center text-[#4caf50]">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="font-medium text-[#4a5568] text-[15px]">
                  Food Waste Prevented
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-[#1b432a] text-xl">124</span>
                <span className="text-[13px] font-bold text-[#718096]">kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
