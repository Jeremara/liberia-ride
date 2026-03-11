import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  LayoutDashboard,
  Users,
  Car,
  DollarSign,
  MapPin,
  Settings,
  Bell,
  FileText,
  Menu,
  X,
  LogOut,
  TrendingUp,
  Wallet,
  AlertTriangle,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Live Rides", href: "/admin/live-rides", icon: MapPin },
  { name: "Drivers", href: "/admin/drivers", icon: Car },
  { name: "Passengers", href: "/admin/passengers", icon: Users },
  { name: "Finance", href: "/admin/finance", icon: DollarSign },
  { name: "Transactions", href: "/admin/transactions", icon: Wallet },
  { name: "Analytics", href: "/admin/analytics", icon: TrendingUp },
  { name: "Fraud Monitor", href: "/admin/fraud", icon: AlertTriangle },
  { name: "Reports", href: "/admin/reports", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminUserStr = localStorage.getItem("adminUser");
  const adminUser = adminUserStr ? JSON.parse(adminUserStr) : null;

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <img
              src="/src/components/logo/logo.jpeg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold text-slate-900">
              Liberia Ride
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.href);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                  active
                    ? "bg-gradient-to-r from-[#00b894]/10 to-[#0984e3]/10 text-[#00b894]"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center space-x-3 mb-3">
            <Avatar>
              <AvatarFallback className="bg-[#00b894] text-white">
                {adminUser ? getInitials(adminUser.name) : "AD"}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {adminUser?.name || "Admin"}
              </p>

              <p className="text-xs text-slate-500 truncate">
                {adminUser?.email || "admin@liberiaride.com"}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full justify-start text-slate-600 hover:text-destructive hover:bg-destructive/5"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 flex items-center px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-4 text-slate-400 hover:text-slate-600"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              {navigation.find((item) => isActive(item.href))?.name ||
                "Dashboard"}
            </h2>

            <Button variant="outline" size="icon" className="relative">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}