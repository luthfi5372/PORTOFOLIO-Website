"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-vivid-violet to-vivid-cyan text-white hover:from-violet-700 hover:to-cyan-600",
    secondary: "bg-gradient-to-r from-vivid-rose to-pink-500 text-white hover:from-rose-600 hover:to-pink-600",
    outline: "border-2 border-vivid-violet text-vivid-violet hover:bg-violet-50",
    ghost: "text-vivid-slate hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

