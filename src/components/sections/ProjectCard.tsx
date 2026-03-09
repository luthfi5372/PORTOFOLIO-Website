"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProjectCard({ title, category, image }: { title: string, category: string, image?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Membuat efek kemiringan (tilt) yang halus
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-[400px] w-full rounded-[2.5rem] bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px] border border-white/20 shadow-[0_0_15px_rgba(139,92,246,0.3)] overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent">
        <motion.span style={{ translateZ: 50 }} className="text-xs font-bold text-white/70 uppercase tracking-widest">{category}</motion.span>
        <motion.h3 style={{ translateZ: 80 }} className="text-2xl font-bold text-white mt-2">{title}</motion.h3>
      </div>
      {/* Gambar project sebagai background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-200 to-teal-200 transition-transform duration-500 group-hover:scale-110" />
    </motion.div>
  );
}

