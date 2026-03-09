"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  category: string;
  desc: string;
  size: string;
  gradient: string;
}

const projects: Project[] = [
  { 
    title: "MindMate+", 
    category: "TECH", 
    desc: "AI-Powered Mood Tracker - Advanced emotional analysis with real-time insights", 
    size: "col-span-1 md:col-span-2",
    gradient: "from-violet-400 via-purple-500 to-indigo-600"
  },
  { 
    title: "Budget App", 
    category: "RESEARCH", 
    desc: "Financial Analysis Tool - Smart spending analysis with predictive modeling", 
    size: "col-span-1",
    gradient: "from-cyan-400 via-teal-500 to-emerald-600"
  },
  { 
    title: "Brand Design", 
    category: "DESIGN", 
    desc: "Visual Identity System - Complete brand ecosystem with motion graphics", 
    size: "col-span-1",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-600"
  },
  { 
    title: "NCC System", 
    category: "MANAGEMENT", 
    desc: "Organizational Dashboard - Streamlined workflow automation platform", 
    size: "col-span-1 md:col-span-2",
    gradient: "from-amber-400 via-orange-500 to-red-600"
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt effect
  const mouseX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.1 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring", 
        stiffness: 100,
        damping: 15
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className={`${project.size} relative h-[380px] rounded-[2.5rem] overflow-hidden group cursor-pointer`}
    >
      {/* Glass Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-2xl border border-white/20 group-hover:border-vivid-violet/50 transition-all duration-500" />
      
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L3N2Zz4=')]`} />

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-vivid-violet/10 via-transparent to-vivid-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
        <motion.div style={{ transform: "translateZ(30px)" }}>
          <motion.span 
            className="inline-block text-xs font-bold tracking-[0.25em] text-vivid-violet mb-3 px-3 py-1 rounded-full bg-vivid-violet/10 border border-vivid-violet/20"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.span>
          
          <h3 className="text-3xl md:text-4xl font-black text-vivid-slate mb-3 group-hover:translate-x-3 transition-transform duration-300">
            {project.title}
          </h3>
          
          <p className="text-vivid-slate/60 text-sm font-medium leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            {project.desc}
          </p>
        </motion.div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-vivid-violet opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-black text-vivid-slate mb-4 tracking-tight"
      >
        Featured <span className="text-vivid-violet">Works.</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-vivid-slate/60 text-lg mb-12 max-w-xl"
      >
        A collection of innovative projects showcasing cutting-edge technology and creative design.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

