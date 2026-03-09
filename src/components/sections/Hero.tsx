"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="text-6xl md:text-7xl font-black text-vivid-slate leading-[1.1] tracking-tighter"
      >
        Sintesis <span className="text-vivid-violet">Riset</span> & <br />
        Inovasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-vivid-violet to-vivid-cyan">Teknologi.</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-vivid-slate/60 max-w-2xl font-medium"
      >
        Menjembatani pemikiran strategis NCC dan ekosistem kewirausahaan PIKIR 
        melalui solusi digital yang presisi dan berdampak.
      </motion.p>
    </section>
  );
}

