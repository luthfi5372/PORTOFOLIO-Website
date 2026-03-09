"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function MagneticCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 15, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Magnetic ring / magnifier effect */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-12 h-12 border-2 border-black/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glass magnifier effect */}
        <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm" />
      </motion.div>
    </>
  );
}

