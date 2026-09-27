import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  PlusCircle,
  Package,
  History,
  BarChart2,
  MoreHorizontal,
  Leaf,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Logo } from "../Logo";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DonorLayout() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/donor/dashboard", icon: Home },
    { name: "Add Donation", path: "/donor/donate", icon: PlusCircle },
    { name: "Requests", path: "/donor/requests", icon: Package },
    { name: "History", path: "/donor/history", icon: History },
    { name: "Analytics", path: "/donor/analytics", icon: BarChart2 },
  ];

  return (
    <div className="flex h-screen bg-[#f8faf8] overflow-hidden">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex flex-shrink-0 z-20">
        <div className="h-28 flex items-center justify-center border-b border-transparent mt-4">
          <Logo className="scale-75 origin-center" variant="circle" />
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
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
                    ? "bg-[#eef3ea] text-resq-dark"
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

        <div className="p-4 mb-4">
          <div className="bg-[#f0f5ee] rounded-2xl p-5 relative overflow-hidden h-40 flex flex-col justify-between">
            <svg
              className="absolute bottom-0 right-0 w-24 h-24 opacity-60 text-[#bcd0b2] pointer-events-none"
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 60,100 C 60,80 80,60 100,60 C 100,80 80,100 60,100 Z" />
              <path
                d="M 40,100 C 40,70 70,40 100,40 C 100,70 70,100 40,100 Z"
                opacity="0.6"
              />
              <path
                d="M 80,100 C 80,50 100,20 100,20 C 100,50 100,100 80,100 Z"
                opacity="0.3"
              />
            </svg>
            <div className="w-8 h-8 bg-resq-dark text-white rounded-full flex items-center justify-center mb-1">
              <Leaf className="w-4 h-4 fill-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-resq-dark mb-2 leading-tight">
                Together, we're
                <br />
                creating a zero-
                <br />
                waste future.
              </p>
              <p className="text-[11px] font-medium text-resq-dark/70 relative z-10 leading-tight">
                Thank you for making
                <br />a difference!
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
          <NavLink
            to="/donor/donate"
            className="bg-resq-dark text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Donate</span>
          </NavLink>
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
