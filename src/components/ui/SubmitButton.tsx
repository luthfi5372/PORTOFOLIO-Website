"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const LiquidButton = () => {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        setStatus("loading");
        setTimeout(() => setStatus("success"), 2000);
      }}
      className="relative w-full py-4 rounded-[2rem] font-bold text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden
                 bg-gradient-to-r from-purple-600 to-cyan-500"
    >
      {status === "idle" && <span>Kirim Pesan</span>}
      {status === "loading" && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full mx-auto"
        />
      )}
      {status === "success" && <span>Terkirim! ✓</span>}
    </motion.button>
  );
};

