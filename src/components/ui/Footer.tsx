"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  
  // Efek pantulan cahaya yang bergerak berdasarkan progress scroll
  const lightPosition = useTransform(scrollYProgress, [0.8, 1], ["-100%", "100%"]);

  return (
    <footer className="relative mt-20 w-full overflow-hidden border-t border-white/20 bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px]">
      {/* Moving Light Reflection Layer */}
      <motion.div 
        style={{ left: lightPosition }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              LiquidOS 26
            </h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Membangun masa depan web dengan estetika cair dan pengalaman tanpa batas.
            </p>
          </div>

          {/* Social Icons with Hover Physics */}
          <div className="flex justify-center gap-8">
            {[Github, Instagram, Twitter, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -8, scale: 1.2, color: "#7d2ae8" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-400 p-3 rounded-full bg-white/5 border border-white/10"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright & Policy */}
          <div className="text-right text-xs text-gray-400 space-y-2">
            <p>© 2026 Liquid Design Studio.</p>
            <p className="hover:text-purple-600 cursor-pointer transition-colors">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

