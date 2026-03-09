"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LiquidInput({ label, type = "text" }: { label: string, type?: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-8">
      <label className={`absolute left-4 transition-all duration-300 pointer-events-none 
                        ${isFocused ? "-top-6 text-xs text-purple-600" : "top-3 text-gray-500"}`}>
        {label}
      </label>
      
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/20">
        <input
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          className="w-full bg-transparent px-4 py-3 text-gray-800 outline-none z-10 relative"
        />

        {/* Liquid Border Animation (SVG Path) */}
        {isFocused && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.rect
              x="0" y="0" width="100%" height="100%"
              rx="16"
              fill="none"
              stroke="url(#liquid-gradient)"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7d2ae8" />
                <stop offset="100%" stopColor="#00c4cc" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
}

