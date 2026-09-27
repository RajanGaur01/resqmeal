import React from "react";
import {
  ShoppingBag,
  Users,
  Package,
  Leaf,
  ChevronDown,
  Award,
  Upload,
  ArrowRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export function NgoImpact() {
  const lineData = [
    { name: "Dec", meals: 6200 },
    { name: "Jan", meals: 7100 },
    { name: "Feb", meals: 8300 },
    { name: "Mar", meals: 9600 },
    { name: "Apr", meals: 10600 },
    { name: "May", meals: 12540 },
  ];

  const pieData = [
    { name: "Children", value: 45, meals: "5,643", color: "#4caf50" },
    { name: "Families", value: 35, meals: "4,389", color: "#8a72c1" },
    { name: "Elderly", value: 20, meals: "2,508", color: "#f1784b" },
  ];

  const barData = [
    { name: "Dec", meals: 6.2, food: 2.1 },
    { name: "Jan", meals: 7.1, food: 2.4 },
    { name: "Feb", meals: 8.3, food: 2.8 },
    { name: "Mar", meals: 9.6, food: 3.2 },
    { name: "Apr", meals: 10.6, food: 3.7 },
    { name: "May", meals: 12.5, food: 4.3 },
  ];

  const topDonors = [
    {
      name: "Green Bites Restaurant",
      meals: "2,340",
      initials: "GB",
      color: "bg-[#1b432a]",
    },
    {
      name: "Spice Route Kitchen",
      meals: "1,870",
      initials: "SR",
      color: "bg-[#8a72c1]",
    },
    {
      name: "Daily Dhaba",
      meals: "1,560",
      initials: "DD",
      color: "bg-[#f1784b]",
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto pb-24 md:pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold text-[#1b432a] font-serif mb-1">
            NGO Impact Dashboard
          </h1>
          <p className="text-[#4a5568] text-[15px] flex items-center gap-1.5">
            Your impact is creating a better tomorrow{" "}
            <span className="text-[#4caf50]">💚</span>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl font-bold text-gray-700 text-sm shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <CalendarIcon className="w-4 h-4 text-gray-500" /> May 2025{" "}
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          icon={<ShoppingBag className="w-6 h-6 text-[#4caf50]" />}
          title="Meals Collected"
          value="12,540"
          trend="+18%"
          trendIcon="up"
          color="bg-[#eef3ea]"
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-[#8a72c1]" />}
          title="Communities Served"
          value="215"
          trend="+16%"
          trendIcon="up"
          color="bg-[#f1eff8]"
        />
        <StatCard
          icon={<Package className="w-6 h-6 text-[#f1784b]" />}
          title="Food Rescued (kg)"
          value="4,320"
          suffix=" kg"
          trend="+20%"
          trendIcon="up"
          color="bg-[#fff0eb]"
        />
        <StatCard
          icon={<Leaf className="w-6 h-6 text-[#1b432a]" />}
          title="CO₂ Emissions Saved"
          value="10.8"
          suffix=" Tons"
          trend="+18%"
          trendIcon="up"
          color="bg-[#e3ecda]"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#1b432a] text-[17px] font-serif">
              Meals Collected Over Time
            </h3>
            <button className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600 bg-white">
              Meals <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={lineData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4caf50" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4caf50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#718096", fontWeight: 600 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#718096", fontWeight: 600 }}
                  tickFormatter={(val) => `${val / 1000}K`}
                />
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                  labelStyle={{
                    fontWeight: "bold",
                    color: "#1b432a",
                    marginBottom: "4px",
                  }}
                  formatter={(value: number) => [
                    `${value.toLocaleString()} Meals`,
                    "Collected",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="meals"
                  stroke="#4caf50"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorMeals)"
                  activeDot={{
                    r: 6,
                    fill: "#1b432a",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
          <h3 className="font-bold text-[#1b432a] text-[17px] font-serif mb-6">
            Meal Distribution
          </h3>
          <div className="flex-1 flex flex-col relative items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-2 mt-4">
              <span className="text-2xl font-bold text-[#1b432a]">12,540</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                Total Meals
              </span>
            </div>
            <div className="h-[200px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full mt-6 space-y-4">
              {pieData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-semibold text-gray-600">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold">
                    <span className="text-[#1b432a]">{item.value}%</span>
                    <span className="text-gray-400 w-12 text-right">
                      {item.meals}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Impact Summary Label */}
      <h3 className="font-bold text-[#1b432a] text-[17px] font-serif mb-4">
        Monthly Impact Summary
      </h3>

      {/* Monthly Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <SummaryCard
          icon={<Users className="w-5 h-5 text-[#4caf50]" />}
          value="8,750+"
          label="People Fed"
          trend="+17%"
          color="bg-[#eef3ea]"
          border="border-[#d6e3cd]"
        />
        <SummaryCard
          icon={<Leaf className="w-5 h-5 text-[#8a72c1]" />}
          value="18,200"
          label="Total Beneficiaries"
          trend="+15%"
          color="bg-[#f1eff8]"
          border="border-[#edeaf6]"
        />
        <SummaryCard
          icon={<ShoppingBag className="w-5 h-5 text-[#f1784b]" />}
          value="46"
          label="Active Donors"
          trend="+9%"
          color="bg-[#fff0eb]"
          border="border-[#fde8d9]"
        />
        <SummaryCard
          icon={<Users className="w-5 h-5 text-[#1b432a]" />}
          value="32"
          label="Active Volunteers"
          trend="+14%"
          color="bg-[#e3ecda]"
          border="border-[#d6e3cd]"
        />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-[#1b432a] text-[17px] font-serif">
                Impact Trend
              </h3>
              <span className="text-sm text-gray-400 font-medium">
                (Last 6 Months)
              </span>
            </div>
            <button className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600 bg-white hidden sm:flex">
              6 Months <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
              <div className="w-3 h-3 rounded-full bg-[#1b432a]"></div> Meals
              (K)
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
              <div className="w-3 h-3 rounded-full bg-[#f1784b]"></div> Food
              Rescued (kg)
            </div>
          </div>

          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#718096", fontWeight: 600 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#718096", fontWeight: 600 }}
                  tickFormatter={(val) => `${val}K`}
                />
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                  labelStyle={{
                    fontWeight: "bold",
                    color: "#1b432a",
                    marginBottom: "8px",
                  }}
                  cursor={{ fill: "#f8faf8" }}
                />
                <Bar
                  dataKey="meals"
                  name="Meals"
                  fill="#1b432a"
                  radius={[4, 4, 0, 0]}
                  barSize={16}
                >
                  {/* Values on top of bars */}
                  {/* This would normally be done with LabelList, simplifying here */}
                </Bar>
                <Bar
                  dataKey="food"
                  name="Food Rescued"
                  fill="#f1784b"
                  radius={[4, 4, 0, 0]}
                  barSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Donors */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
          <h3 className="font-bold text-[#1b432a] text-[17px] font-serif mb-6">
            Top Donors This Month
          </h3>

          <div className="space-y-5 flex-1">
            {topDonors.map((donor, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm ${donor.color} shadow-sm`}
                  >
                    {donor.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#1b432a] text-sm">
                      {donor.name}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {donor.meals} Meals
                    </p>
                  </div>
                </div>
                <div className="text-yellow-500">
                  <Award
                    className={`w-6 h-6 ${i === 0 ? "text-amber-400" : i === 1 ? "text-gray-400" : "text-amber-700"}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-[#f4faf6] border border-[#d6e3cd] text-[#1b432a] py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-[#eef3ea] transition-colors flex items-center justify-center gap-2">
            View All Donors <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Share Button Block */}
      <div className="flex justify-end">
        <button className="bg-[#1b432a] text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#153421] transition-colors shadow-lg">
          Share Your Impact <Upload className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  suffix = "",
  trend,
  trendIcon,
  color,
}: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
        <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wide leading-tight px-1">
          {title}
        </p>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-[28px] font-bold text-[#1b432a] leading-none">
          {value}
          <span className="text-lg">{suffix}</span>
        </p>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold">
        <span className="text-[#4caf50]">{trend}</span>
        <span className="text-gray-400">vs Apr 2025</span>
      </div>
    </div>
  );
}

function SummaryCard({ icon, value, label, trend, color, border }: any) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center gap-4 ${border} border-l-4`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${color}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-[#1b432a] leading-tight mb-0.5">
          {value}
        </p>
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">
          {label}
        </p>
        <div className="flex items-center gap-1 text-[10px] font-bold">
          <span className="text-[#4caf50]">{trend}</span>
          <span className="text-gray-400">vs Apr 2025</span>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
