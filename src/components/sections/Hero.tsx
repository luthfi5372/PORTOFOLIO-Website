"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="text-7xl font-extrabold tracking-tight bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent"
      >
        Masa Depan <br /> Antarmuka Cair.
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-vivid-slate/90 max-w-xl"
      >
        Rasakan pengalaman visual yang mengalir, responsif, dan elegan dengan teknologi Liquid Glass iOS 26.
      </motion.p>
    </section>
  );
}

