"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, Image as ImageIcon, MessageSquare, Settings } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: ImageIcon, label: "Manage Gallery" },
  { icon: MessageSquare, label: "Inquiries" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#f0fdf4] p-6">
      {/* Glass Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px] border border-[rgba(255,255,255,0.25)] rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        <div className="font-bold text-xl text-purple-600 px-4">Admin.</div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.4)" }}
              className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-colors text-gray-600 hover:text-purple-600"
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 px-10 overflow-y-auto">
        <header className="py-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Welcome back, Luthfi</h2>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]" />
        </header>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Views" value="24.8K" change="+12%" />
          <StatCard title="New Messages" value="18" change="+5" />
          <StatCard title="Storage" value="85%" change="Critical" />
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, change }: { title: string, value: string, change: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px] border border-[rgba(255,255,255,0.25)] rounded-[2rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    >
      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
      <span className="text-xs text-purple-600 font-medium">{change}</span>
    </motion.div>
  );
}

