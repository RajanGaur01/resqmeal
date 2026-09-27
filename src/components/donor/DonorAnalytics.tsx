import React from "react";
import {
  ArrowLeft,
  Download,
  TrendingUp,
  Heart,
  Leaf,
  Users,
  Home,
  ArrowRight,
  TreePine,
  CloudRain,
  HeartHandshake,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { LandscapeFooter } from "../LandscapeFooter";

const lineData = [
  { name: "Jan", meals: 400 },
  { name: "Feb", meals: 300 },
  { name: "Mar", meals: 550 },
  { name: "Apr", meals: 450 },
  { name: "May", meals: 700 },
  { name: "Jun", meals: 650 },
  { name: "Jul", meals: 800 },
];

const pieData = [
  { name: "Veg Meals", value: 65 },
  { name: "Non-Veg", value: 20 },
  { name: "Produce", value: 15 },
];
const COLORS = ["#4ade80", "#fb923c", "#38bdf8"];

export function DonorAnalytics() {
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
          <div>
            <h1 className="text-2xl font-serif font-bold text-resq-dark">
              Your Impact Analytics
            </h1>
            <p className="text-sm text-gray-500">
              Track your contribution over time
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-resq-dark bg-white outline-none cursor-pointer">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-resq-dark text-white rounded-lg text-sm font-semibold hover:bg-resq-dark/90 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Line Chart Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-resq-dark">
                Meals Donated Over Time
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-bold text-resq-dark">3,250</span>
                <span className="text-xs font-semibold text-resq-green flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" /> +15.3%
                </span>
              </div>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow:
                      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  }}
                  itemStyle={{ color: "#0f3d2b", fontWeight: "bold" }}
                />
                <Line
                  type="monotone"
                  dataKey="meals"
                  stroke="#4ade80"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#0f3d2b", strokeWidth: 0 }}
                  activeDot={{
                    r: 6,
                    fill: "#4ade80",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <h3 className="font-bold text-resq-dark mb-4">Food Categories</h3>
          <div className="flex-1 min-h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-resq-dark">100%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {pieData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="text-gray-600 font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-resq-dark">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Environmental Impact Section */}
        <div className="bg-[#f4fcf6] rounded-2xl p-6 border border-[#d1e3ca] flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
          <div className="z-10 w-full md:w-2/3">
            <h3 className="font-bold text-resq-dark mb-2 text-lg">
              Environmental Impact
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              By rescuing food, you've significantly reduced carbon emissions
              and saved water resources this year.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#f0f6ff] flex items-center justify-center text-blue-500">
                  <CloudRain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">
                    CO2 Prevented
                  </div>
                  <div className="font-bold text-resq-dark">2.6 Tons</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#f0f5ee] flex items-center justify-center text-resq-green">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">
                    Water Saved
                  </div>
                  <div className="font-bold text-resq-dark">15,000 L</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 relative z-10 flex items-center gap-4">
            {/* Illustration Approximation */}
            <div className="w-24 h-24 rounded-full bg-[#e8efdf] flex items-center justify-center relative shadow-inner">
              <span className="text-4xl">🌍</span>
              <Leaf className="absolute -bottom-2 -right-2 w-8 h-8 text-resq-green" />
            </div>
            <div className="text-3xl font-bold text-gray-300">=</div>
            <div className="w-20 h-20 rounded-full bg-[#f0f6ff] flex items-center justify-center shadow-inner">
              <span className="text-2xl font-bold text-blue-500">CO₂</span>
            </div>
            <div className="w-20 h-20 rounded-full bg-[#f0f5ee] flex flex-col items-center justify-center shadow-inner">
              <TreePine className="w-8 h-8 text-[#2e5d42]" />
            </div>
          </div>

          <svg
            className="absolute -bottom-10 -left-10 w-64 h-64 opacity-20 text-[#bcd0b2] pointer-events-none"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M 60,100 C 60,80 80,60 100,60 C 100,80 80,100 60,100 Z" />
            <path d="M 40,100 C 40,70 70,40 100,40 C 100,70 70,100 40,100 Z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Testimonials/Feedback */}
        <div className="bg-[#f0f5ee] rounded-2xl p-6 border border-[#d1e3ca]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-resq-dark rounded-full flex items-center justify-center text-white">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-resq-dark">Recent Appreciations</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-sm text-gray-600 italic mb-3">
                "The warm meals from Green Bites Restaurant have been a blessing
                for the shelter. Thank you!"
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-resq-dark">
                <span>— Helping Hands NGO</span>
                <span className="text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-sm text-gray-600 italic mb-3">
                "Consistent and high-quality food donations. Our community is
                grateful."
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-resq-dark">
                <span>— Feed India Foundation</span>
                <span className="text-gray-400">1 week ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top NGOs Partnered */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-resq-dark">Top NGO Partners</h3>
            <Link
              to="#"
              className="text-xs font-bold text-resq-green flex items-center gap-1 hover:text-resq-dark"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-4 text-sm font-medium flex-1">
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#f0f6ff] flex items-center justify-center text-blue-500 shadow-inner">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-resq-dark font-bold">
                  Helping Hands NGO
                </div>
                <div className="text-xs text-resq-green font-semibold">
                  ~850 Meals
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#fff6f0] flex items-center justify-center text-resq-orange shadow-inner">
                <Home className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-resq-dark font-bold">
                  Feed India Foundation
                </div>
                <div className="text-xs text-resq-green font-semibold">
                  ~720 Meals
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#f0f5ee] flex items-center justify-center text-resq-green shadow-inner">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-resq-dark font-bold">
                  Green Shelter NGO
                </div>
                <div className="text-xs text-resq-green font-semibold">
                  ~480 Meals
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#f7f0ff] flex items-center justify-center text-purple-600 shadow-inner">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-resq-dark font-bold">Seva Sarthi NGO</div>
                <div className="text-xs text-resq-green font-semibold">
                  ~360 Meals
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
