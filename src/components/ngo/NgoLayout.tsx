import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
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
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Logo } from "../Logo";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function NgoLayout() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/ngo/dashboard", icon: Home },
    { name: "Nearby Food", path: "/ngo/nearby", icon: MapPin },
    { name: "Live Map", path: "/ngo/map", icon: MapIcon },
    { name: "Requests", path: "/ngo/requests", icon: ShoppingBag },
    { name: "My Pickups", path: "/ngo/pickups", icon: Truck },
    { name: "Impact", path: "/ngo/impact", icon: BarChart2 },
    { name: "Profile", path: "/ngo/profile", icon: User },
  ];

  return (
    <div className="flex h-screen bg-[#f8faf8] overflow-hidden font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white border-r border-gray-100 flex-col hidden md:flex flex-shrink-0 z-20">
        <div className="h-28 flex items-center justify-center border-b border-transparent mt-4">
          <div className="w-24 h-24 bg-[#1b432a] rounded-full flex flex-col items-center justify-center text-white shadow-lg p-2 relative overflow-hidden">
            {/* Small leaf decor */}
            <svg
              className="absolute top-1 right-2 w-4 h-4 text-[#e8906c]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 16 12 22 12 22Z" />
            </svg>
            <span className="font-serif font-bold tracking-tight text-xl leading-none mt-1">
              RESQ
            </span>
            <span className="font-sans font-bold text-[10px] tracking-widest text-[#e8906c] mt-0.5">
              MEAL
            </span>
          </div>
        </div>

        <nav className="flex-1 py-8 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl text-[15px] font-medium transition-colors",
                  isActive
                    ? "bg-[#eef3ea] text-[#1b432a]"
                    : "text-gray-500 hover:text-[#1b432a] hover:bg-gray-50",
                )}
              >
                <Icon
                  className={cn(
                    "w-[22px] h-[22px]",
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
        <div className="p-5 mb-4">
          <div className="bg-[#f0f5ee] rounded-2xl p-5 border border-[#e3ecda]/50 relative overflow-hidden flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-[#1b432a]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 16v-3a4 4 0 1 1 8 0v3" />
                <path d="M18 16v-3a4 4 0 0 0-8 0" />
                <path d="M8 12v4" />
                <path d="M16 12v4" />
                <rect x="2" y="16" width="20" height="6" rx="2" />
                <path d="M12 2v2" />
              </svg>
            </div>
            <p className="text-sm font-bold text-[#1b432a] mb-2 leading-tight">
              Every meal you
              <br />
              rescue makes a<br />
              difference.
            </p>
            <p className="text-xs font-semibold text-[#1b432a] mt-2">
              Thank you for
              <br />
              being a hero! <span className="text-[#4caf50]">💚</span>
            </p>
            <svg
              className="absolute bottom-[-10px] left-[-10px] w-16 h-16 text-[#bcd0b2] opacity-40 rotate-12 pointer-events-none"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M 60,100 C 60,80 80,60 100,60 C 100,80 80,100 60,100 Z" />
              <path
                d="M 40,100 C 40,70 70,40 100,40 C 100,70 70,100 40,100 Z"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-[64px] md:h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-3 sm:px-6 md:px-8 shrink-0 z-10 w-full relative">
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
            {/* Desktop header title */}
            <div className="hidden md:flex flex-1 justify-center absolute left-1/2 -translate-x-1/2">
              <Logo className="scale-75 origin-center" withTaglines={true} />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 relative z-10 ml-auto">
            <button className="relative min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-gray-400 hover:text-resq-orange transition-colors">
              <Bell className="w-[22px] h-[22px]" />
              <span className="absolute top-2 right-2 w-4 h-4 bg-[#f1784b] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </button>
            <NavLink
              to="/ngo/profile"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f0f5ee] rounded-full flex items-center justify-center text-[12px] sm:text-[13px] font-bold text-[#1b432a] border border-[#d6e3cd] cursor-pointer"
            >
              NG
            </NavLink>
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

            <nav className="flex-1 py-6 space-y-2 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px]",
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

            <div className="pt-4 border-t border-gray-100">
              <NavLink
                to="/"
                onClick={() => setMobileDrawerOpen(false)}
                className="flex items-center justify-center w-full min-h-[44px] py-2.5 px-4 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100"
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
