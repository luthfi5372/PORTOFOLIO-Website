"use client";
import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function GravityBadge({ children }: { children: React.ReactNode }) {
  const x = useSpring(0, { stiffness: 50, damping: 20 });
  const y = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      // Skala kemiringan -30 sampai 30 derajat
      x.set(e.gamma ? e.gamma / 2 : 0); 
      y.set(e.beta ? (e.beta - 45) / 2 : 0);
    };
    
    // Check if device supports orientation events
    const deviceOrientation = DeviceOrientationEvent as unknown as { 
      requestPermission?: () => Promise<string> 
    };
    
    if (typeof deviceOrientation.requestPermission === 'function') {
      // iOS 13+ requires permission
      deviceOrientation.requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }
    
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [x, y]);

  return (
    <motion.div 
      style={{ x, y }} 
      className="inline-block gpu-accelerated"
    >
      {children}
    </motion.div>
  );
}

