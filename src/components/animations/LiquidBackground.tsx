"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidBackgroundProps {
  children: ReactNode;
}

export default function LiquidBackground({ children }: LiquidBackgroundProps) {
  return (
    <>
      {/* Background blobs - Increased opacity for stronger color saturation */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F8FAFC]">
        {/* Blob Violet - Stronger opacity */}
        <motion.div
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-vivid-violet/40 rounded-full blur-[120px]"
        />
        {/* Blob Cyan - Stronger opacity */}
        <motion.div
          animate={{
            x: [0, -200, 100, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.5, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-vivid-cyan/40 rounded-full blur-[150px]"
        />
        {/* Blob Rose - Subtle highlight */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-vivid-rose/20 rounded-full blur-[100px]"
        />
      </div>
      
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}

