"use client";
import { motion } from "framer-motion";

export default function HireMeButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(125, 42, 232, 0.3)" }}
      whileTap={{ scale: 0.9, borderRadius: "50%" }}
      className="px-10 py-4 bg-purple-600 text-white font-bold rounded-full border-t border-white/30 transition-all shadow-lg"
    >
      Mari Berkolaborasi
    </motion.button>
  );
}

