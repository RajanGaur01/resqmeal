import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Filter,
  CheckCircle2,
  ChevronRight,
  Package,
  Clock,
  MapPin,
  Check,
  X,
  Users,
  Home,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { collection, query, onSnapshot, writeBatch, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";

interface Donation {
  id: string;
  foodName: string;
  type: string;
  quantityVal: number;
  quantityUnit: string;
  quantity: string;
  expiryTime: string;
  donationType: string;
  totalNgoPrice?: number;
  pickupTiming: string;
  location: string;
  imageUrl: string;
  status: string;
  ngoAssigned: string | null;
  createdAt: any;
}

export function DonorRequests() {
  const [activeTab, setActiveTab] = useState("pending");
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "donations")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Donation[];
        setDonations(docs.sort((a,b) => b.createdAt?.toMillis() - a.createdAt?.toMillis()));
      },
      (error) => {
        console.error("Firestore error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const pendingDonations = donations.filter(d => d.status === "pending");
  const acceptedDonations = donations.filter(d => d.status === "accepted");
  const completedDonations = donations.filter(d => d.status === "completed");

  const displayedRequests = activeTab === "pending" ? pendingDonations : activeTab === "accepted" ? acceptedDonations : completedDonations;

  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link
            to="/donor/dashboard"
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="w-5 h-5 text-resq-dark" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-resq-dark">
              Live Requests
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Manage incoming pickup requests
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 min-h-[44px] border border-gray-200 rounded-xl text-sm font-semibold text-resq-dark hover:bg-gray-50 active:scale-95 transition-all">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-white rounded-2xl p-1 border border-gray-100 shadow-sm mb-8 overflow-x-auto">
        <div 
          onClick={() => setActiveTab("pending")}
          className={`flex-1 min-h-[44px] flex items-center justify-center py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold relative cursor-pointer select-none transition-colors ${activeTab === 'pending' ? 'bg-[#f0f5ee] text-resq-green shadow-xs' : 'text-gray-500 hover:text-resq-dark'}`}
        >
          <span className="flex items-center gap-1.5 sm:gap-2">
            Pending{" "}
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${activeTab === 'pending' ? 'bg-[#e8efdf] text-resq-dark' : 'bg-gray-100 text-gray-500'}`}>
              {pendingDonations.length}
            </span>
          </span>
        </div>
        <div 
          onClick={() => setActiveTab("accepted")}
          className={`flex-1 min-h-[44px] flex items-center justify-center py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold relative cursor-pointer select-none transition-colors ${activeTab === 'accepted' ? 'bg-[#f0f5ee] text-resq-green shadow-xs' : 'text-gray-500 hover:text-resq-dark'}`}
        >
          <span className="flex items-center gap-1.5 sm:gap-2">
            Accepted{" "}
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${activeTab === 'accepted' ? 'bg-[#e8efdf] text-resq-dark' : 'bg-gray-100 text-gray-500'}`}>
              {acceptedDonations.length}
            </span>
          </span>
        </div>
        <div 
          onClick={() => setActiveTab("completed")}
          className={`flex-1 min-h-[44px] flex items-center justify-center py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold relative cursor-pointer select-none transition-colors ${activeTab === 'completed' ? 'bg-[#f0f5ee] text-resq-green shadow-xs' : 'text-gray-500 hover:text-resq-dark'}`}
        >
          <span className="flex items-center gap-1.5 sm:gap-2">
            Picked Up{" "}
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${activeTab === 'completed' ? 'bg-[#e8efdf] text-resq-dark' : 'bg-gray-100 text-gray-500'}`}>
              {completedDonations.length}
            </span>
          </span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${activeTab === 'pending' ? 'bg-resq-orange' : activeTab === 'accepted' ? 'bg-blue-500' : 'bg-resq-green'}`}></div>
            <h3 className="font-bold text-resq-dark text-lg capitalize">
              {activeTab} Requests{" "}
              <span className="text-gray-400 font-normal">({displayedRequests.length})</span>
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          {displayedRequests.length === 0 ? (
            <div className="text-center py-10 bg-white border border-gray-100 rounded-2xl shadow-sm text-gray-500">
              No {activeTab} requests.
            </div>
          ) : (
            displayedRequests.map(req => (
              <div key={req.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-6 relative">
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 hidden md:block" />

                {/* NGO Info/Status Info */}
                <div className="flex md:flex-col items-center gap-3 w-full md:w-32 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${req.ngoAssigned ? 'bg-[#e8efdf] text-resq-green' : 'bg-[#fff6f0] text-resq-orange'}`}>
                    {req.ngoAssigned ? <Users className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                  </div>
                  <div className="flex-1 md:text-center">
                    <h4 className="font-bold text-sm text-resq-dark leading-tight">
                      {req.ngoAssigned || "Awaiting NGO"}
                    </h4>
                  </div>
                </div>

                <div className="w-full md:w-px h-px md:h-auto bg-gray-100 hidden md:block"></div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-resq-dark text-lg">
                        {req.foodName}
                      </h4>
                      <p className="text-xs text-gray-500">Donated by you</p>
                    </div>
                    {req.donationType === "Low-Cost" && (
                      <span className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-bold">
                        Total NGO Price: ₹{req.totalNgoPrice}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-2 rounded-lg">
                      <Package className="w-4 h-4 text-resq-green" /> {req.quantity}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-2 rounded-lg">
                      <Clock className="w-4 h-4 text-blue-500" /> By {req.pickupTiming}
                    </div>
                  </div>
                  
                  {activeTab === 'pending' && (
                    <div className="text-sm text-gray-500">
                      Waiting for an NGO to accept this donation...
                    </div>
                  )}
                  {activeTab === 'accepted' && (
                    <div className="text-sm text-resq-green font-bold">
                      Accepted! Expect pickup soon.
                    </div>
                  )}
                  {activeTab === 'completed' && (
                    <div className="text-sm text-gray-500 font-bold">
                      Completed.
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
