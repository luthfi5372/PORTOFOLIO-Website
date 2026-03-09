"use client";
import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <>
      {/* Tirai Liquid (Atas ke Bawah) */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-vivid-violet z-[9998] origin-top pointer-events-none"
      />
      
      {/* Tirai Liquid (Bawah ke Atas - Saat masuk halaman baru) */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="fixed top-0 left-0 w-full h-screen bg-vivid-cyan z-[9998] origin-bottom pointer-events-none"
      />
    </>
  );
}

