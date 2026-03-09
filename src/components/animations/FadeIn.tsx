"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directions: Record<string, Variants["initial"]> = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const variants: Variants = {
    initial: shouldReduceMotion ? { opacity: 1 } : directions[direction],
    animate: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

