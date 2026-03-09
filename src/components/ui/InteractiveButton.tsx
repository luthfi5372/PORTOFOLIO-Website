"use client";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/useSound";

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function InteractiveButton({ 
  children, 
  onClick,
  className = "" 
}: InteractiveButtonProps) {
  // Use subtle sound files - you can replace with actual sound files
  const playHover = useSound("/sounds/hover.mp3");
  const playClick = useSound("/sounds/click.mp3");

  const handleClick = () => {
    playClick();
    onClick?.();
  };

  return (
    <motion.button
      onMouseEnter={playHover}
      onMouseDown={handleClick}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full bg-glass-white backdrop-blur-md 
                 border border-glass-border shadow-soft text-gray-800 font-medium
                 liquid-glass-element transition-all duration-200 ${className}`}
    >
      {children}
    </motion.button>
  );
}
