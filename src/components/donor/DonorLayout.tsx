import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  PlusCircle,
  Package,
  History,
  BarChart2,
  MoreHorizontal,
  Leaf,
  LogOut,
  Store,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Logo } from "../Logo";
import { useAuth } from "../../context/AuthContext";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DonorLayout() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userProfile, currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const navItems = [
    { name: "Dashboard", path: "/donor/dashboard", icon: Home },
    { name: "Add Donation", path: "/donor/donate", icon: PlusCircle },
    { name: "Requests", path: "/donor/requests", icon: Package },
    { name: "History", path: "/donor/history", icon: History },
    { name: "Analytics", path: "/donor/analytics", icon: BarChart2 },
  ];

  const donorName = userProfile?.orgName || userProfile?.displayName || "Green Bites Bistro";
  const donorEmail = userProfile?.email || currentUser?.email || "donor@resqmeal.org";

  return (
    <div className="flex h-screen bg-[#f8faf8] overflow-hidden">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex flex-shrink-0 z-20">
        <div className="h-24 flex items-center justify-center border-b border-gray-50 px-4">
          <Logo className="scale-75 origin-center" variant="circle" />
        </div>

        {/* Donor Profile Chip in Sidebar */}
        <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/60">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-resq-dark text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              {donorName.substring(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-resq-dark truncate">{donorName}</p>
              <p className="text-[10px] text-gray-500 truncate flex items-center gap-1">
                <Store className="w-3 h-3 text-resq-green" />
                Verified Donor
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#eef3ea] text-resq-dark font-semibold shadow-xs"
                    : "text-gray-500 hover:text-resq-dark hover:bg-gray-50",
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-resq-dark" : "text-gray-400",
                  )}
                />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Environmental impact note */}
        <div className="p-4 mb-2">
          <div className="bg-[#f0f5ee] rounded-2xl p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="w-7 h-7 bg-resq-dark text-white rounded-full flex items-center justify-center mb-1">
              <Leaf className="w-3.5 h-3.5 fill-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-resq-dark mb-1 leading-tight">
                Zero Waste Champion
              </p>
              <p className="text-[10px] font-medium text-resq-dark/70 leading-tight">
                Your surplus food feeds real people every single day.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fbfdfa]">
        {/* Mobile top header */}
        <header className="md:hidden h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:text-resq-dark min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg"
              aria-label="Open menu"
            >
              <MoreHorizontal className="w-6 h-6" />
            </button>
            <Logo className="text-xl" />
          </div>
          <div className="flex items-center gap-2">
            <NavLink
              to="/donor/donate"
              className="bg-resq-dark text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Donate</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="p-1.5 text-gray-400 hover:text-red-600"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around items-center px-1 py-1 z-40 shadow-lg">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center min-h-[48px] flex-1 py-1 text-center transition-colors",
                isActive ? "text-resq-dark font-bold" : "text-gray-400 font-medium",
              )
            }
          >
            {item.name === "Add Donation" ? (
              <div className="bg-resq-dark text-white p-2 rounded-full -mt-4 shadow-md">
                <PlusCircle className="w-5 h-5" />
              </div>
            ) : (
              <item.icon className="w-5 h-5 mb-0.5" strokeWidth={2} />
            )}
            <span className="text-[10px] leading-tight truncate">
              {item.name === "Add Donation" ? "Donate" : item.name}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative bg-white w-4/5 max-w-xs h-full shadow-2xl flex flex-col p-6 z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-5 border-b border-gray-100">
              <Logo className="text-xl" />
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:text-resq-dark"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="py-4 border-b border-gray-100">
              <p className="text-xs font-bold text-resq-dark">{donorName}</p>
              <p className="text-[11px] text-gray-400">{donorEmail}</p>
            </div>

            <nav className="flex-1 py-4 space-y-1.5 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px]",
                      isActive
                        ? "bg-[#eef3ea] text-resq-dark font-semibold"
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
              <NavLink
                to="/"
                onClick={() => setMobileDrawerOpen(false)}
                className="flex items-center justify-center w-full min-h-[44px] py-2 px-4 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-100"
              >
                ← Return to Home
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
