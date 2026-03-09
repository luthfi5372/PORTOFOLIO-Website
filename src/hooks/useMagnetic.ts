"use client";
import { useRef } from "react";
import { useSpring } from "framer-motion";

export const useMagnetic = (strength = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Spring config agar gerakan "magnet" terasa kenyal/liquid
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    // Hitung posisi tengah elemen
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Hitung jarak kursor dari tengah
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Terapkan kekuatan magnet
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, handleMouseMove, handleMouseLeave };
};

