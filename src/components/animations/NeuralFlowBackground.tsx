"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeuralFlowBackgroundProps {
  children: ReactNode;
}

export default function NeuralFlowBackground({ children }: NeuralFlowBackgroundProps) {
  return (
    <>
      {/* Neural Flow Background - Innovation Prism Concept */}
      <div className="fixed inset-0 -z-10 bg-[#F8FAFC] overflow-hidden">
        {/* Aliran Ide 1: Violet (Representasi NCC/Leadership) */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-vivid-violet/15 rounded-full blur-[120px]"
        />
        
        {/* Aliran Ide 2: Cyan (Representasi PIKIR/Research) */}
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1.1, 1, 1.1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-vivid-cyan/15 rounded-full blur-[100px]"
        />

        {/* Additional accent flow - subtle */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-vivid-violet/8 rounded-full blur-[80px]"
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

