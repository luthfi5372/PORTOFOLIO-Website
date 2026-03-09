"use client";
import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-vivid-violet/40 
                 pointer-events-none z-[9999] hidden md:block"
    />
  );
}

