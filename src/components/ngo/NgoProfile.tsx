import React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Building,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NgoProfile() {
  const { userProfile, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const orgName = userProfile?.orgName || "Hope Feed Foundation";
  const email = userProfile?.email || currentUser?.email || "ngo@resqmeal.org";
  const regNumber = userProfile?.regNumber || "DL/2023/008492";
  const address = userProfile?.address || "Lajpat Nagar IV, South Delhi";
  const city = userProfile?.city || "New Delhi";
  const phone = userProfile?.phone || "+91 98112 34567";

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 pb-24 md:pb-8">
      {/* Profile Header Banner */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-5 z-10">
          <div className="w-20 h-20 bg-[#1b432a] text-white rounded-2xl flex items-center justify-center font-serif text-2xl font-bold shadow-md">
            {orgName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1b432a] font-serif">
                {orgName}
              </h1>
              <span className="inline-flex items-center gap-1 bg-[#eef3ea] text-[#1b432a] px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[#d6e3cd]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4caf50]" />
                Verified NGO
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Registered NGO Partner • Reg No: <span className="font-mono text-gray-700">{regNumber}</span>
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm px-4 py-2.5 rounded-xl border border-red-200 transition-colors z-10 active:scale-95"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#1b432a]">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1b432a]">28</p>
            <p className="text-xs text-gray-500 font-medium">Total Pickups Completed</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-resq-orange">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-resq-orange">3,450+</p>
            <p className="text-xs text-gray-500 font-medium">Meals Distributed</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">14</p>
            <p className="text-xs text-gray-500 font-medium">Active Rescue Volunteers</p>
          </div>
        </div>
      </div>

      {/* Organization Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-[#1b432a] font-serif flex items-center gap-2 pb-2 border-b border-gray-100">
            <Building className="w-5 h-5 text-gray-400" />
            <span>Organization Information</span>
          </h2>

          <div className="space-y-3 text-sm">
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">Organization Name</label>
              <p className="font-semibold text-gray-800">{orgName}</p>
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">Registration Number</label>
              <p className="font-semibold text-gray-800 font-mono">{regNumber}</p>
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">Official Email</label>
              <p className="font-semibold text-gray-800 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                {email}
              </p>
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">Contact Phone</label>
              <p className="font-semibold text-gray-800 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                {phone}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-[#1b432a] font-serif flex items-center gap-2 pb-2 border-b border-gray-100">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span>Location & Trust Status</span>
          </h2>

          <div className="space-y-3 text-sm">
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">Operational Center Address</label>
              <p className="font-semibold text-gray-800">{address}</p>
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">City / Zone</label>
              <p className="font-semibold text-gray-800">{city}</p>
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-0.5">Verification Badge</label>
              <div className="flex items-center gap-2 mt-1">
                <CheckCircle2 className="w-5 h-5 text-[#4caf50]" />
                <span className="text-sm font-semibold text-gray-700">ResQMeal Verified Trust Tier 1</span>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Partner since September 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
