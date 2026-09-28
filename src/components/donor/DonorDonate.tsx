import React, { useState } from "react";
import {
  ArrowLeft,
  UploadCloud,
  MapPin,
  Clock,
  Package,
  Check,
  Camera,
  ArrowRight,
  Leaf,
  IndianRupee,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LandscapeFooter } from "../LandscapeFooter";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export function DonorDonate() {
  const navigate = useNavigate();
  const { currentUser, userProfile } = useAuth();
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState<"Veg" | "Non-Veg">("Veg");
  const [quantityVal, setQuantityVal] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("kg");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [donationType, setDonationType] = useState<"Free" | "Low-Cost">("Free");
  const [pricePerUnit, setPricePerUnit] = useState("15");
  const [pickupTiming, setPickupTiming] = useState("Today");
  const [location, setLocation] = useState("Connaught Place, New Delhi");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateCommissionRate = (qty: number) => {
    if (qty <= 5) return 0.02;
    if (qty <= 15) return 0.03;
    return 0.04;
  };

  const handleSubmit = async () => {
    if (!foodName || !quantityVal || !expiryDate || !expiryTime) {
      toast.error("Please fill all required fields");
      return;
    }

    if (donationType === "Low-Cost") {
      const price = Number(pricePerUnit);
      if (price < 15 || price > 35) {
        toast.error("Price must be between ₹15 and ₹35 per unit");
        return;
      }
    }

    setIsSubmitting(true);
    let imageUrl = "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop";

    try {
      if (imagePreview) {
        imageUrl = imagePreview; // Use base64 data URL
      }

      const numQty = Number(quantityVal);
      const price = donationType === "Low-Cost" ? Number(pricePerUnit) : 0;
      const totalDonorPrice = numQty * price;
      const commissionRate = calculateCommissionRate(numQty);
      const commissionAmount = Number((totalDonorPrice * commissionRate).toFixed(2));
      const totalNgoPrice = Number((totalDonorPrice + commissionAmount).toFixed(2));
      
      const expiryDateTime = `${expiryDate}T${expiryTime}`;

      await addDoc(collection(db, "donations"), {
        foodName,
        type: foodType,
        quantityVal: numQty,
        quantityUnit,
        quantity: `${numQty} ${quantityUnit}`,
        expiryTime: expiryDateTime,
        donationType,
        pricePerUnit: price,
        totalDonorPrice,
        commissionRate,
        commissionAmount,
        totalNgoPrice,
        pickupTiming,
        location,
        imageUrl,
        status: "pending",
        ngoAssigned: null,
        donorId: currentUser?.uid || "demo-donor-101",
        donorName: userProfile?.orgName || userProfile?.displayName || "Green Bites Bistro",
        donorEmail: currentUser?.email || "donor@resqmeal.org",
        createdAt: serverTimestamp(),
      });

      toast.success("Donation published successfully!");
      navigate("/donor/dashboard");
    } catch (error: any) {
      console.error(error);
      if (error && error.message && error.message.includes("permission-denied")) {
        toast.error("Permission denied. Ensure Firestore rules are set to 'allow read, write: if true;' in Firebase console for the event.");
      } else {
        toast.error("Failed to publish donation");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            to="/donor/dashboard"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-resq-dark" />
          </Link>
          <h1 className="text-2xl font-serif font-bold text-resq-dark">
            Upload Food Donation
          </h1>
        </div>
        <button className="text-sm font-semibold text-resq-green hover:text-resq-dark">
          Save Draft
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between relative mb-12 px-4 md:px-12">
        <div className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-gray-200 -z-10"></div>
        <div className="absolute left-[10%] right-[66%] top-4 h-0.5 bg-resq-dark -z-10"></div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-resq-dark text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span className="text-xs font-bold text-resq-dark">Details</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#e8efdf] text-resq-dark flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="text-xs font-semibold text-gray-500">Quantity</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="text-xs font-semibold text-gray-500">Pickup</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold text-sm">
            4
          </div>
          <span className="text-xs font-semibold text-gray-500">Review</span>
        </div>
      </div>

      {/* Image Upload Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="h-48 md:h-56 relative rounded-2xl overflow-hidden group cursor-pointer border border-gray-200" onClick={() => document.getElementById('food-image-upload')?.click()}>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Food Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              No image selected
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Camera className="w-5 h-5 text-resq-dark" />
            </div>
          </div>
          <input id="food-image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </div>
        <div 
          className="h-48 md:h-56 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors group"
          onClick={() => document.getElementById('food-image-upload')?.click()}
        >
          <UploadCloud className="w-8 h-8 text-resq-green mb-3 group-hover:text-resq-dark transition-colors" />
          <span className="font-bold text-sm text-resq-dark">
            Add Food Images
          </span>
          <span className="text-xs text-gray-400 mt-1">
            JPG, PNG • Max 5 photos
          </span>
          <button className="mt-4 text-xs font-semibold text-resq-green">
            Take Photo
          </button>
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-resq-dark mb-3">
              Food Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-resq-dark focus-within:ring-1 focus-within:ring-resq-dark">
                <div className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                    Food Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Veg Biryani"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    className="w-full text-sm font-medium text-resq-dark border-none bg-transparent p-0 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-200 h-[66px] items-center">
                <button 
                  onClick={() => setFoodType("Veg")}
                  className={`flex-1 rounded-lg h-full flex items-center justify-center gap-2 text-sm font-semibold shadow-sm transition-colors ${foodType === "Veg" ? "bg-resq-dark text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  <Leaf className="w-4 h-4" /> Veg
                </button>
                <button 
                  onClick={() => setFoodType("Non-Veg")}
                  className={`flex-1 rounded-lg h-full flex items-center justify-center text-sm font-medium transition-colors ${foodType === "Non-Veg" ? "bg-red-800 text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  Non-Veg
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between hover:border-gray-300 focus-within:border-resq-dark focus-within:ring-1 focus-within:ring-resq-dark">
                <div className="flex items-center gap-3 w-full">
                  <Package className="w-5 h-5 text-gray-400" />
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1">
                      <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                        Quantity
                      </label>
                      <input 
                        type="number"
                        min="1"
                        className="w-full text-sm font-medium text-resq-dark border-none bg-transparent p-0 focus:ring-0 outline-none"
                        placeholder="Ex: 25"
                        value={quantityVal}
                        onChange={(e) => setQuantityVal(e.target.value)}
                      />
                    </div>
                    <div className="w-24">
                      <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                        Unit
                      </label>
                      <select
                        className="w-full text-sm font-medium text-resq-dark border-none bg-transparent p-0 focus:ring-0 outline-none"
                        value={quantityUnit}
                        onChange={(e) => setQuantityUnit(e.target.value)}
                      >
                        <option value="kg">kg</option>
                        <option value="packs">packs</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col justify-between hover:border-gray-300 focus-within:border-resq-dark focus-within:ring-1 focus-within:ring-resq-dark min-h-[52px]">
                <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block mb-1">
                  Expiry Date & Time
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                  <input 
                    type="date"
                    className="w-full text-sm font-medium text-resq-dark border border-gray-200 sm:border-none rounded-lg sm:rounded-none p-2 sm:p-0 bg-transparent focus:ring-0 outline-none min-h-[40px]"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                  <input 
                    type="time"
                    className="w-full text-sm font-medium text-resq-dark border border-gray-200 sm:border-none rounded-lg sm:rounded-none p-2 sm:p-0 bg-transparent focus:ring-0 outline-none min-h-[40px]"
                    value={expiryTime}
                    onChange={(e) => setExpiryTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-resq-dark mb-3">
              Donation Type
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div 
                onClick={() => setDonationType("Free")}
                className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 relative cursor-pointer min-h-[56px] transition-colors ${donationType === "Free" ? "bg-[#f0f5ee] border-resq-green shadow-sm" : "bg-white border-gray-200 opacity-70 hover:opacity-100"}`}
              >
                {donationType === "Free" && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-resq-green rounded-full flex items-center justify-center text-white">
                    <Check className="w-3 h-3" />
                  </div>
                )}
                <Package className={`w-6 h-6 ${donationType === "Free" ? "text-resq-green" : "text-gray-400"}`} />
                <span className={`font-bold text-sm ${donationType === "Free" ? "text-resq-dark" : "text-gray-500"}`}>Free</span>
              </div>
              <div 
                onClick={() => setDonationType("Low-Cost")}
                className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 relative cursor-pointer min-h-[56px] transition-colors ${donationType === "Low-Cost" ? "bg-[#f0f5ee] border-resq-green shadow-sm" : "bg-white border-gray-200 opacity-70 hover:opacity-100"}`}
              >
                {donationType === "Low-Cost" && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-resq-green rounded-full flex items-center justify-center text-white">
                    <Check className="w-3 h-3" />
                  </div>
                )}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs ${donationType === "Low-Cost" ? "border-resq-green text-resq-green" : "border-gray-300 text-gray-400"}`}>
                  ₹
                </div>
                <span className={`font-bold text-sm ${donationType === "Low-Cost" ? "text-resq-dark" : "text-gray-500"}`}>
                  Low-Cost
                </span>
              </div>
            </div>
            
            {donationType === "Low-Cost" && (
              <div className="mt-4 bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-resq-dark focus-within:ring-1 focus-within:ring-resq-dark min-h-[52px]">
                <IndianRupee className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
                    Price per {quantityUnit} (₹15 - ₹35)
                  </label>
                  <input
                    type="number"
                    min="15"
                    max="35"
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(e.target.value)}
                    className="w-full text-sm font-medium text-resq-dark border-none bg-transparent p-0 focus:ring-0 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold text-resq-dark mb-3">
              Preferred Pickup Timing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Today', 'Tomorrow', 'Custom'].map((timing) => (
                <div 
                  key={timing}
                  onClick={() => setPickupTiming(timing)}
                  className={`border rounded-xl p-3.5 relative cursor-pointer min-h-[48px] transition-colors ${pickupTiming === timing ? "bg-resq-dark border-resq-dark text-white shadow-sm" : "bg-white border-gray-200 hover:border-gray-300"}`}
                >
                  {pickupTiming === timing && (
                    <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full flex items-center justify-center text-resq-dark">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className={`font-bold text-sm ${pickupTiming === timing ? "text-white" : "text-resq-dark"}`}>{timing}</span>
                  </div>
                  <p className={`text-xs ${pickupTiming === timing ? "text-white/80" : "text-gray-500"}`}>
                    {timing === 'Today' ? '12:00 – 2:00 PM' : timing === 'Tomorrow' ? '10:00 AM – 2:00 PM' : 'Select date & time'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Map & Impact) */}
        <div className="space-y-4">
          {/* Map Card */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 relative">
            <div
              className="h-48 bg-[#e5e5e5] relative"
              style={{
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/cartographer.png")',
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-resq-green/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-resq-green/40 rounded-full"></div>
              <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-8 text-resq-dark" />

              <button className="absolute right-3 top-3 bg-white py-1.5 px-3 min-h-[44px] rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm text-resq-dark hover:bg-gray-50 active:scale-95 transition-all">
                <svg
                  className="w-3.5 h-3.5 text-resq-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v10.764a1 1 0 01-1.447.894L15 18M5 18l-4.553 2.276A1 1 0 010 19.382V8.618a1 1 0 011.447-.894L5 10m10 8V10m0 8l-4.553 2.276A1 1 0 019 20.236v-10.764M15 10l-4.553-2.276A1 1 0 009 8.236v10.764L15 18"
                  />
                </svg>
                Use My Location
              </button>
            </div>
            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-resq-dark" />
                <div className="flex-1">
                  <label className="text-[10px] text-gray-500 font-semibold uppercase block tracking-wider">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    className="w-full text-sm font-medium text-resq-dark border-none bg-transparent p-0 focus:ring-0 outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Impact Estimate */}
          <div className="bg-[#f0f5ee] rounded-xl p-4 flex justify-between items-center border border-[#d1e3ca]">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-resq-dark" />
              <div>
                <h4 className="text-xs font-bold text-resq-dark">
                  Estimated Impact
                </h4>
                <p className="text-[11px] text-resq-dark/80">
                  ~120 meals • 48 kg saved from waste
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-resq-dark/50" />
          </div>
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full min-h-[52px] bg-resq-dark text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 hover:bg-resq-dark/90 active:scale-[0.99] transition-all shadow-lg group disabled:opacity-70 text-base"
      >
        {isSubmitting ? "Publishing..." : "Publish Donation"}
        {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </button>

      <LandscapeFooter />
    </div>
  );
}


// Needed local component
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
