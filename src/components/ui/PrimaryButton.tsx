"use client";
import { motion } from "framer-motion";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const PrimaryButton = ({ 
  children, 
  onClick,
  className = "" 
}: PrimaryButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-full 
        bg-vivid-violet text-white font-bold
        shadow-glow-violet hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
        active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] active:shadow-inner
        transition-all duration-300
        border-t border-white/30
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

// Glass Button - Secondary (Visible on any background)
export const GlassButton = ({ 
  children, 
  onClick,
  className = "" 
}: PrimaryButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.6)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-8 py-3 rounded-full 
        bg-glass-thick backdrop-blur-xl
        border border-vivid-violet/30
        text-vivid-slate font-semibold
        shadow-glass-heavy
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};
