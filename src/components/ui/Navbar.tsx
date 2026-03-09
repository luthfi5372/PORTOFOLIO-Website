"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function RefractionNavbar() {
  const mouseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Animasi pegas untuk distorsi yang halus
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  
  // Efek pembiasan (refraction) - menggeser isi di dalam navbar sedikit berlawanan arah kursor
  const refractionX = useTransform(springX, [-100, 100], ["-5px", "5px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    mouseX.set(x);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-[50] flex justify-center px-6 pointer-events-none">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          pointer-events-auto relative flex items-center gap-8 px-10 py-4 
          rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 
          shadow-glass-heavy overflow-hidden
        "
      >
        {/* Layer Pembiasan Cahaya (Refraction Layer) */}
        {isHovered && (
          <motion.div 
            style={{ x: refractionX }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        )}

        {/* Link Navigasi */}
        {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2, color: "#8B5CF6" }}
            className="text-sm font-bold text-vivid-slate/80 transition-colors relative z-10 cursor-pointer"
          >
            {item}
          </motion.a>
        ))}

        {/* Indikator Aktif Berbentuk "Pill" Cair */}
        <motion.div className="absolute bottom-2 h-1 bg-vivid-violet rounded-full w-4 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100" />
      </motion.div>
    </nav>
  );
}

