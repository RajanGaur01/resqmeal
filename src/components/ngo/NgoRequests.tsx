import React, { useState, useEffect } from "react";
import {
  SlidersHorizontal,
  MapPin,
  ShoppingBag,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Phone,
  IndianRupee,
} from "lucide-react";
import { collection, query, onSnapshot, writeBatch, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";
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

export function NgoRequests() {
  const { currentUser, userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState("available");
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
        // sort by length for now since we don't have indexes
        setDonations(docs.sort((a,b) => b.createdAt?.toMillis() - a.createdAt?.toMillis()));
      },
      (error) => {
        console.error("Firestore error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleAcceptDonation = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const batch = writeBatch(db);
      const donationRef = doc(db, "donations", id);
      const assignedName = userProfile?.orgName || userProfile?.displayName || "Hope Feed Foundation";
      batch.update(donationRef, {
        status: "accepted",
        ngoAssigned: assignedName,
        ngoId: currentUser?.uid || "demo-ngo-202",
      });
      await batch.commit();
      toast.success("Donation accepted successfully! You can contact the donor now.");
    } catch (error) {
      console.error("Error accepting donation", error);
      toast.error("Failed to accept donation.");
    }
  };

  const handleCompleteDonation = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const batch = writeBatch(db);
      const donationRef = doc(db, "donations", id);
      batch.update(donationRef, {
        status: "completed",
      });
      await batch.commit();
      toast.success("Donation marked as completed!");
    } catch (error) {
      console.error("Error completing donation", error);
      toast.error("Failed to complete donation.");
    }
  };

  const displayedRequests = donations.filter(req => {
    if (activeTab === "available") return req.status === "pending";
    if (activeTab === "my") return req.status === "accepted" && req.ngoAssigned === "Helping Hands NGO";
    if (activeTab === "completed") return req.status === "completed" && req.ngoAssigned === "Helping Hands NGO";
    return false;
  });

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto pb-24 md:pb-8">
      <div className="mb-8">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1b432a] font-serif mb-1">
          Request / Accept
        </h1>
        <p className="text-[#4a5568] text-[15px]">
          Review donations and accept pickups
        </p>
      </div>

      {/* Tabs & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-200 pb-2">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <button
            onClick={() => setActiveTab("available")}
            className={`flex items-center gap-2 pb-3 border-b-2 font-bold whitespace-nowrap transition-colors ${activeTab === "available" ? "border-[#1b432a] text-[#1b432a]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            Available Requests
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] ${activeTab === "available" ? "bg-[#1b432a] text-white" : "bg-gray-200 text-gray-600"}`}
            >
              {donations.filter(req => req.status === "pending").length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("my")}
            className={`flex items-center gap-2 pb-3 border-b-2 font-bold whitespace-nowrap transition-colors ${activeTab === "my" ? "border-[#1b432a] text-[#1b432a]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            My Requests
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] ${activeTab === "my" ? "bg-[#f1784b] text-white" : "bg-[#fff0eb] text-[#f1784b]"}`}
            >
              {donations.filter(req => req.status === "accepted" && req.ngoAssigned === "Helping Hands NGO").length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`flex items-center gap-2 pb-3 border-b-2 font-bold whitespace-nowrap transition-colors ${activeTab === "completed" ? "border-[#1b432a] text-[#1b432a]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            Completed
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] ${activeTab === "completed" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              {donations.filter(req => req.status === "completed" && req.ngoAssigned === "Helping Hands NGO").length}
            </span>
          </button>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 w-max shrink-0">
          <SlidersHorizontal className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {displayedRequests.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No donations found for this tab.
          </div>
        ) : (
        displayedRequests.map((req) => (
          <div
            key={req.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-5 relative opacity-100 transition-opacity"
          >
            {/* Image */}
            <div className="w-full md:w-[220px] h-40 md:h-[180px] rounded-xl overflow-hidden relative shrink-0">
              <img
                src={req.imageUrl || "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=400"}
                alt={req.foodName}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm ${req.type === "Veg" ? "bg-white text-green-600" : "bg-white text-red-600"}`}
              >
                {req.type}
              </div>
              {req.donationType === "Low-Cost" && req.totalNgoPrice && (
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold shadow-sm text-resq-dark flex items-center gap-1">
                  <IndianRupee className="w-3 h-3" />
                  {req.totalNgoPrice}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-[#1b432a] flex items-center gap-1.5 font-serif">
                    {req.foodName}{" "}
                    <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50" />
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-[13px] font-medium text-gray-500">
                    <MapPin className="w-4 h-4" /> <span>{req.location || "Nearby"}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end hidden sm:flex">
                  {req.donationType === "Low-Cost" && req.totalNgoPrice && (
                    <div className="text-xs text-gray-500 mb-1 flex flex-col items-end">
                       <span className="font-bold text-[#f1784b]">Low Cost Item</span>
                       <span>₹{req.totalDonorPrice} + {(req.commissionRate! * 100).toFixed(0)}% fee</span>
                    </div>
                  )}
                  {req.donationType === "Free" && (
                     <div className="px-2.5 py-1 rounded-full text-[11px] font-bold mb-1 bg-[#eef3ea] text-[#4caf50]">
                       Free
                     </div>
                  )}
                </div>
              </div>

              {/* Meta info grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 my-4">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 text-gray-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1b432a] text-[15px] leading-tight">
                      {req.quantity}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                      Quantity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 text-gray-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1b432a] text-[15px] leading-tight">
                      {req.pickupTiming}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                      Preferred Pickup
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 col-span-2 lg:col-span-1 border-t lg:border-t-0 pt-3 lg:pt-0 lg:border-l border-gray-100 lg:pl-5">
                  <div className="mt-0.5 text-gray-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-[15px] leading-tight`}
                    >
                      {req.expiryTime.replace("T", " ")}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                      Expires at
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-3 text-xs font-semibold text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <span>{req.type}</span>
                {req.donationType === "Low-Cost" && (
                  <>
                    <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                    <span className="text-[#f1784b]">Total Price: ₹{req.totalNgoPrice}</span>
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="md:w-[200px] flex flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-5 mt-4 md:mt-0 justify-center">
              {activeTab === "available" && (
                <button 
                  onClick={(e) => handleAcceptDonation(req.id, e)}
                  className="w-full bg-[#1b432a] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-[#153421] transition-colors"
                >
                  Accept Pickup
                </button>
              )}
              {activeTab === "my" && (
                <button 
                  onClick={(e) => handleCompleteDonation(req.id, e)}
                  className="w-full bg-[#f1784b] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-[#d9653a] transition-colors"
                >
                  Mark as Complete
                </button>
              )}
              {activeTab === "completed" && (
                 <button 
                 disabled
                 className="w-full bg-gray-100 text-gray-400 py-2.5 rounded-xl text-sm font-bold shadow-sm cursor-not-allowed"
               >
                 Completed
               </button>
              )}
              <button className="w-full bg-white border border-gray-200 text-[#4a5568] py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Contact Donor
              </button>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}
