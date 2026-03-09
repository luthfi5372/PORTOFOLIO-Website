"use client";
import { motion } from "framer-motion";

const items = [
  { id: 1, title: "Abstract Flow", height: "h-64", color: "bg-purple-200" },
  { id: 2, title: "Refraction", height: "h-80", color: "bg-blue-200" },
  { id: 3, title: "Liquid Metal", height: "h-96", color: "bg-teal-200" },
  { id: 4, title: "Glassy", height: "h-72", color: "bg-pink-200" },
];

export default function GlassGallery() {
  return (
    <section className="p-10">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring", 
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              rotateX: 2,
              rotateY: -2
            }}
            className={`relative break-inside-avoid overflow-hidden rounded-[2rem] 
                       bg-[rgba(255,255,255,0.12)] backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]
                       group cursor-pointer liquid-glass-element ${item.height}`}
          >
            {/* Inner Refraction Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content Mockup */}
            <div className={`w-full h-full ${item.color} opacity-40`} />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-sm border-t border-white/20">
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

