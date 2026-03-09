"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface InputProps {
  label?: string;
  error?: string;
  icon?: ReactNode;
  className?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  error,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const hasValue = props.value !== undefined && props.value !== "";

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-300 pointer-events-none",
            focused || hasValue
              ? "top-[-8px] text-xs bg-white px-1 text-violet-600"
              : "top-3 text-gray-400"
          )}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <motion.input
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300",
            icon && "pl-10",
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-violet-500",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

