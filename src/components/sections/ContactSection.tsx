"use client";
import { motion } from "framer-motion";
import LiquidInput from "@/components/ui/LiquidInput";
import { LiquidButton } from "@/components/ui/SubmitButton";

export default function ContactSection() {
  return (
    <section className="max-w-2xl mx-auto py-20 px-6">
      <motion.div 
        className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px] p-10 rounded-[3rem] border border-[rgba(255,255,255,0.25)] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Hubungi Kami</h2>
        <LiquidInput label="Nama Lengkap" />
        <LiquidInput label="Email" type="email" />
        <LiquidInput label="Pesan" />
        <LiquidButton />
      </motion.div>
    </section>
  );
}

