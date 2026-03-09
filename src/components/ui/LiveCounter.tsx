"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function Counter({ end, label, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    spring.set(end);
  }, [end, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setCount(latest);
    });
    return unsubscribe;
  }, [display]);

  const formattedCount = count.toLocaleString();

  return (
    <div className="text-center">
      <motion.span 
        className="text-3xl font-mono font-thin text-gray-800 dark:text-white"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {formattedCount}{suffix}
      </motion.span>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

export default function LiveCounter() {
  return (
    <section className="py-8 px-4">
      <div className="glass rounded-3xl p-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-6 text-gray-700">
          Stats & Achievements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter end={1500} label="Hours Coded" suffix="+" />
          <Counter end={50} label="Projects Done" suffix="+" />
          <Counter end={200} label="Sensors Programmed" suffix="+" />
          <Counter end={25} label="Papers Reviewed" suffix="+" />
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 font-mono">
          Currently leading NCC 2026-2027
        </p>
      </div>
    </section>
  );
}

