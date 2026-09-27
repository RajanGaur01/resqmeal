import React from "react";
import {
  Store,
  Mail,
  Phone,
  MapPin,
  ChefHat,
  User,
  Lock,
  ExternalLink,
  Leaf,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function DonorRegistration() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/donor-success");
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 fixed">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-resq-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#e8efdf] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-resq-dark rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden shadow-lg">
              <Leaf className="w-5 h-5 mb-0.5 text-resq-green" />
              <span className="font-bold text-[10px] tracking-widest leading-none">
                RESQ
              </span>
            </div>
          </Link>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-resq-dark mb-4 tracking-tight">
            Partner with Us
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Register your food business to start donating surplus food.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <form onSubmit={handleRegister}>
              <div className="mb-10 pb-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-resq-dark mb-6 flex items-center gap-2">
                  <Store className="w-6 h-6 text-resq-green" /> Business
                  Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Business Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Store className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Green Bites Restaurant"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Business Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <ChefHat className="w-5 h-5 text-gray-400" />
                      </div>
                      <select
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green appearance-none text-gray-600"
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Cafe / Bakery</option>
                        <option value="hotel">Hotel / Catering</option>
                        <option value="supermarket">
                          Supermarket / Grocery
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-top pt-3.5 pointer-events-none">
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        placeholder="Full address of the pickup location"
                        rows={2}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10 pb-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-resq-dark mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-resq-green" /> Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Manager Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        placeholder="manager@restaurant.com"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-resq-green"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <div className="bg-[#f0f5ee] border border-[#d1e3ca] rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-resq-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-resq-dark mb-1">
                      Food Safety Pledge
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      By registering, I confirm that all food donated through
                      ResQMeal will meet local health and safety standards, will
                      be stored properly, and will be fit for consumption.
                    </p>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 text-resq-green border-gray-300 rounded focus:ring-resq-green"
                      />
                      <span className="text-sm font-semibold text-resq-dark">
                        I agree to the Food Safety Guidelines
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <Link
                  to="/donor-portal"
                  className="text-gray-500 hover:text-resq-dark font-medium text-sm flex items-center gap-1 w-full sm:w-auto justify-center"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-resq-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-resq-dark/90 transition-all shadow-lg shadow-resq-dark/20 text-lg"
                >
                  Complete Registration <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
