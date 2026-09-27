import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  Plus,
  Package,
  Clock,
  BarChart2,
  MapPin,
  ArrowRight,
  Heart,
  Leaf,
  Users,
  Check,
  ShoppingBasket,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";
import { LandscapeFooter } from "../LandscapeFooter";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../../lib/firebase";

interface Donation {
  id: string;
  foodName: string;
  type: string;
  quantity: string;
  expiryTime: string;
  imageUrl: string;
  status: string;
  ngoAssigned: string | null;
}

export function DonorDashboard() {
  const [activeDonations, setActiveDonations] = useState<Donation[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "donations"),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Donation[];
        setActiveDonations(docs);
      },
      (error) => {
        console.error("Firestore error:", error);
        if (error.message.includes("permission-denied")) {
          // just log to avoid double toast, since user will see it on one of the screens
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-6xl mx-auto pb-20 md:pb-6 relative z-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-gray-500 text-sm mb-1 font-medium">
            Dashboard Overview
          </h1>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-serif text-resq-dark">
              Welcome back, Green Bites
            </h2>
          </div>
          <p className="text-resq-dark/70 text-sm mt-1">
            Here's what is happening with your donations today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/donor/donate"
            className="bg-resq-orange text-white px-5 py-2.5 min-h-[44px] rounded-full font-semibold shadow-md hover:bg-[#e05215] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" /> New Donation
          </Link>
        </div>
      </div>

      {/* Impact Banner */}
      <div className="bg-resq-dark text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
            <path
              d="M100 200 C 150 100, 250 100, 300 200 Z"
              fill="currentColor"
            />
            <circle cx="350" cy="50" r="30" fill="currentColor" />
            <circle cx="50" cy="80" r="20" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute -left-12 -bottom-24 w-64 h-64 bg-resq-green/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex justify-between items-center mb-8 relative z-10">
          <h3 className="font-serif text-2xl text-white font-bold tracking-wide">
            Your Lifetime Impact
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {/* Stat 1 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f0f5ee] flex items-center justify-center shadow-inner">
                <Leaf className="w-6 h-6 text-resq-green" />
              </div>
              <div>
                <div className="text-3xl font-bold font-serif tracking-tight">
                  3,250
                </div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  Meals Donated
                </div>
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fff6f0] flex items-center justify-center shadow-inner">
                <ShoppingBasket className="w-6 h-6 text-resq-orange" />
              </div>
              <div>
                <div className="text-3xl font-bold font-serif tracking-tight flex items-baseline gap-1">
                  1,285{" "}
                  <span className="text-sm font-normal text-white/70">kg</span>
                </div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  Food Saved
                </div>
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f0f6ff] flex items-center justify-center shadow-inner">
                <Cloud className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-3xl font-bold font-serif tracking-tight flex items-baseline gap-1">
                  2.6{" "}
                  <span className="text-sm font-normal text-white/70">
                    t CO₂
                  </span>
                </div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  Carbon Reduced
                </div>
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f7f0ff] flex items-center justify-center shadow-inner">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-3xl font-bold font-serif tracking-tight">
                  12
                </div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  NGOs Helped
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Alerts & Recent */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Current Pickups */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif font-bold text-resq-dark text-xl">
                Recent Donations
              </h3>
              <Link
                to="/donor/requests"
                className="text-resq-orange text-sm font-bold hover:text-resq-dark flex items-center gap-1"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {activeDonations.length === 0 ? (
                <div className="text-center text-gray-500 py-6">
                  No active donations. Create one above!
                </div>
              ) : (
                activeDonations.map((donation) => (
                  <div key={donation.id} className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-[#f4f7f4] border border-[#e8efdf] relative overflow-hidden group hover:border-[#d1e3ca] transition-colors">
                    <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-sm relative">
                      <img
                        src={donation.imageUrl || "https://images.unsplash.com/photo-1543339308-43e59d6b73a6"}
                        alt="Food"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-resq-dark shadow-sm">
                        {donation.type}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-resq-dark text-lg">
                            {donation.foodName}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ring-1 ${donation.status === 'pending' ? 'bg-[#fff6f0] text-resq-orange ring-resq-orange/20' : donation.status === 'accepted' ? 'bg-[#e8efdf] text-resq-green ring-resq-green/20' : 'bg-gray-100 text-gray-600 ring-gray-200'}`}>
                            {donation.status === 'pending' ? 'Pending Pickup' : donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-medium">
                          <Package className="w-4 h-4 text-resq-green" /> {donation.quantity}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-medium">
                          <Clock className="w-4 h-4 text-blue-500" /> Expiry: {donation.expiryTime}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-resq-dark font-bold">
                          {donation.ngoAssigned ? (
                            <>
                              <div className="w-6 h-6 rounded-full bg-resq-orange text-white flex items-center justify-center text-xs">
                                {donation.ngoAssigned.substring(0, 2).toUpperCase()}
                              </div>
                              {donation.ngoAssigned}
                            </>
                          ) : (
                            <span className="text-gray-400">Waiting for NGO to accept</span>
                          )}
                        </div>
                        <Link
                          to="/donor/requests"
                          className="text-sm font-bold text-resq-green hover:underline"
                        >
                          Track Status
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Donation History Minimal */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif font-bold text-resq-dark text-xl">
                Recent History
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Dinner Leftovers",
                  date: "Yesterday, 9:30 PM",
                  amount: "15 kg",
                  ngo: "Shelter Connect",
                },
                {
                  title: "Bakery Surplus",
                  date: "May 10, 8:00 AM",
                  amount: "8 kg",
                  ngo: "Morning Hope",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f0f5ee] flex items-center justify-center text-resq-green border border-[#e8efdf]">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-resq-dark">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.ngo} • {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-resq-dark">
                      {item.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Mini Widgets */}
        <div className="space-y-6">
          {/* Discover Map */}
          <div className="bg-resq-sand rounded-3xl p-6 shadow-sm border border-[#e8d2b3]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif font-bold text-resq-dark text-lg">
                Nearby Needs
              </h3>
            </div>
            <p className="text-sm text-resq-dark/70 mb-4 leading-relaxed">
              There are 4 NGOs within a 5km radius looking for food today.
            </p>

            <div className="w-full h-40 bg-[#f4f7f4] rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center border-2 border-white shadow-inner">
              <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
              <div className="relative z-10 flex space-x-2">
                <MapPin className="w-8 h-8 text-resq-orange drop-shadow-md animate-bounce" />
                <MapPin className="w-6 h-6 text-resq-green drop-shadow-md mt-4" />
              </div>
            </div>

            <Link
              to="/donor/donate"
              className="w-full bg-resq-dark text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-resq-dark/90 transition-all text-sm"
            >
              Find Match <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Actions Bento */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/donor/history"
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-resq-green transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#f0f5ee] flex items-center justify-center text-resq-green mb-2 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-700">History</span>
            </Link>
            <Link
              to="/donor/analytics"
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-resq-orange transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#fff6f0] flex items-center justify-center text-resq-orange mb-2 group-hover:scale-110 transition-transform">
                <BarChart2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-700">Analytics</span>
            </Link>
          </div>

          <div className="bg-[#f0f5ee] rounded-3xl p-6 border border-[#d1e3ca]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-resq-green flex-shrink-0 shadow-sm">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-resq-dark text-sm mb-1">
                  Monthly Goal
                </h4>
                <p className="text-xs text-resq-dark/80 mb-3">
                  You are 80% towards your 50kg goal this month!
                </p>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-resq-green w-4/5 rounded-full"></div>
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
