import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  MapPin,
  Map as MapIcon,
  ShoppingBag,
  Truck,
  BarChart2,
  User,
  Bell,
  Menu,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Logo } from "../Logo";
import { useAuth } from "../../context/AuthContext";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function NgoLayout() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userProfile, currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const navItems = [
    { name: "Home", path: "/ngo/dashboard", icon: Home },
    { name: "Nearby Food", path: "/ngo/nearby", icon: MapPin },
    { name: "Live Map", path: "/ngo/map", icon: MapIcon },
    { name: "Requests", path: "/ngo/requests", icon: ShoppingBag },
    { name: "My Pickups", path: "/ngo/pickups", icon: Truck },
    { name: "Impact", path: "/ngo/impact", icon: BarChart2 },
    { name: "Profile", path: "/ngo/profile", icon: User },
  ];

  const ngoName = userProfile?.orgName || userProfile?.displayName || "Hope Feed Foundation";

  return (
    <div className="flex h-screen bg-[#f8faf8] overflow-hidden font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white border-r border-gray-100 flex-col hidden md:flex flex-shrink-0 z-20">
        <div className="h-24 flex items-center justify-center border-b border-gray-50 px-4">
          <div className="w-20 h-20 bg-[#1b432a] rounded-full flex flex-col items-center justify-center text-white shadow-md p-2 relative overflow-hidden">
            <span className="font-serif font-bold tracking-tight text-lg leading-none mt-1">
              RESQ
            </span>
            <span className="font-sans font-bold text-[9px] tracking-widest text-[#e8906c] mt-0.5">
              MEAL
            </span>
          </div>
        </div>

        {/* NGO Profile Chip in Sidebar */}
        <div className="p-3.5 border-b border-gray-50 flex items-center justify-between bg-gray-50/60">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#1b432a] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
              {ngoName.substring(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#1b432a] truncate">{ngoName}</p>
              <p className="text-[10px] text-gray-500 truncate flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#4caf50]" />
                Verified NGO
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

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#eef3ea] text-[#1b432a] font-semibold"
                    : "text-gray-500 hover:text-[#1b432a] hover:bg-gray-50",
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-[#1b432a]" : "text-gray-400",
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Callout */}
        <div className="p-4 mb-2">
          <div className="bg-[#f0f5ee] rounded-2xl p-4 border border-[#e3ecda]/50 relative overflow-hidden flex flex-col items-center text-center">
            <p className="text-xs font-bold text-[#1b432a] mb-1 leading-tight">
              Community Food Hero
            </p>
            <p className="text-[10px] font-semibold text-[#1b432a]/80">
              Thank you for rescuing meals and feeding communities! 💚
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-[64px] md:h-[68px] bg-white border-b border-gray-100 flex items-center justify-between px-3 sm:px-6 md:px-8 shrink-0 z-10 w-full relative">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center -ml-2 text-gray-600 hover:text-[#1b432a] md:hidden rounded-lg hover:bg-gray-100"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="md:hidden flex items-center">
              <Logo className="text-xl" />
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-400">NGO Portal</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-bold text-[#1b432a]">{ngoName}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 relative z-10 ml-auto">
            <NavLink
              to="/ngo/profile"
              className="flex items-center gap-2 bg-[#f0f5ee] hover:bg-[#e4eedd] border border-[#d6e3cd] px-3 py-1.5 rounded-full transition-colors text-xs font-bold text-[#1b432a]"
            >
              <div className="w-6 h-6 bg-[#1b432a] text-white rounded-full flex items-center justify-center text-[10px]">
                {ngoName.substring(0, 1).toUpperCase()}
              </div>
              <span className="hidden sm:inline">{ngoName}</span>
            </NavLink>

            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#fbfdfa] relative pb-24 md:pb-0">
          <Outlet />
        </main>

        {/* Mobile bottom nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around items-center px-1 py-1 z-40 shadow-lg">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center min-h-[48px] flex-1 py-1 text-center transition-colors",
                  isActive ? "text-[#1b432a] font-bold" : "text-gray-400 font-medium",
                )
              }
            >
              <item.icon className="w-5 h-5 mb-0.5" strokeWidth={2} />
              <span className="text-[10px] leading-tight truncate">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative bg-white w-4/5 max-w-xs h-full shadow-2xl flex flex-col p-6 z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <Logo className="text-xl" />
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:text-resq-dark"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-[#1b432a] truncate">{ngoName}</p>
              <p className="text-[10px] text-gray-400">Verified NGO Partner</p>
            </div>

            <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={cn(
                      "flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[44px]",
                      isActive
                        ? "bg-[#eef3ea] text-[#1b432a] font-semibold"
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
                className="flex items-center gap-2 w-full py-2 px-3 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
              <NavLink
                to="/"
                onClick={() => setMobileDrawerOpen(false)}
                className="flex items-center justify-center w-full min-h-[44px] py-2 px-4 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
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
