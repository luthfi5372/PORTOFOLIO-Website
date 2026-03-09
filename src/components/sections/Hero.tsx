"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Badge - Innovation Systems & Leadership */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-6 px-5 py-2 rounded-full bg-vivid-violet/10 border border-vivid-violet/30 flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full bg-vivid-violet animate-pulse" />
        <span className="text-xs font-black tracking-[0.2em] text-vivid-violet uppercase">
          Innovation Systems & Leadership
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="text-6xl md:text-8xl font-black text-vivid-slate leading-[0.9] tracking-tighter"
      >
        Sintesis <span className="text-vivid-violet">Riset</span> <br /> 
        & Inovasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-vivid-violet to-vivid-cyan">Digital.</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-lg md:text-xl text-vivid-slate/60 max-w-2xl font-medium leading-relaxed"
      >
        Menghubungkan visi strategis <strong>NCC</strong> dengan ekosistem riset <strong>PIKIR</strong> melalui pengembangan teknologi yang presisi dan berdampak luas.
      </motion.p>

      <div className="mt-10 flex gap-5 flex-col sm:flex-row">
        <PrimaryButton className="bg-vivid-violet text-white px-10 py-4 rounded-full font-bold shadow-glow-violet hover:scale-105 transition-all">
          Eksplorasi Modul
        </PrimaryButton>
        <button className="bg-white/80 backdrop-blur-md border border-vivid-slate/10 text-vivid-slate px-10 py-4 rounded-full font-bold hover:bg-vivid-slate/5 transition-all">
          Dokumentasi Riset
        </button>
      </div>
    </section>
  );
}

