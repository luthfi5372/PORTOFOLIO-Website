"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest: number) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix && <span className="text-vivid-violet ml-1">{suffix}</span>}
    </span>
  );
}

const stats = [
  { label: "Projects Synthesized", value: 24, suffix: "+" },
  { label: "Research Collaborators", value: 150, suffix: "" },
  { label: "Systems Integrated", value: 12, suffix: "" },
  { label: "Leadership Hours", value: 1200, suffix: "h" },
];

export default function ImpactMetrics() {
  return (
    <section className="py-32 px-6 flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl w-full">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="text-5xl md:text-6xl font-black text-vivid-slate mb-4 tracking-tighter flex items-baseline">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            
            {/* Digital Progress Line */}
            <div className="w-12 h-1 bg-vivid-violet/20 rounded-full mb-4 overflow-hidden">
               <motion.div 
                 initial={{ x: "-100%" }}
                 whileInView={{ x: "0%" }}
                 transition={{ duration: 1.5, delay: i * 0.2 }}
                 className="w-full h-full bg-vivid-violet shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
               />
            </div>

            <p className="text-xs font-black tracking-[0.3em] text-vivid-slate/40 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

