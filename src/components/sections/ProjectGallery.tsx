"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  { 
    title: "MindMate+", 
    category: "TECH", 
    desc: "AI-Powered Mood Tracker & Health Monitor", 
    size: "md:col-span-2",
    color: "from-vivid-violet/20"
  },
  { 
    title: "Budget App", 
    category: "RESEARCH", 
    desc: "Precision Financial Analysis for Institutions", 
    size: "md:col-span-1",
    color: "from-vivid-cyan/20"
  },
  { 
    title: "NCC Dashboard", 
    category: "MANAGEMENT", 
    desc: "Leadership Control System for NCC 2026", 
    size: "md:col-span-1",
    color: "from-vivid-rose/20"
  },
  { 
    title: "PIKIR Portal", 
    category: "INNOVATION", 
    desc: "Research & Entrepreneurship Ecosystem", 
    size: "md:col-span-2",
    color: "from-vivid-violet/20"
  }
];

export default function ProjectGallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-5xl font-black text-vivid-slate tracking-tighter">
          Featured <span className="text-vivid-violet">Works.</span>
        </h2>
        <p className="text-vivid-slate/60 mt-4 font-medium">Selected projects from NCC, PIKIR, and Research Lab.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`${project.size} relative h-[450px] rounded-[45px] transition-all duration-200 group`}
    >
      {/* Dasar Kaca */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-white/5 backdrop-blur-3xl border border-white/20 rounded-[45px] shadow-glass-heavy group-hover:border-vivid-violet/50 transition-colors duration-500`} />
      
      {/* Konten dengan efek Floating */}
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 p-12 flex flex-col justify-end"
      >
        <span className="text-xs font-black tracking-[0.3em] text-vivid-violet mb-3 opacity-80 uppercase">
          {project.category}
        </span>
        <h3 className="text-4xl font-black text-vivid-slate mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-vivid-slate/50 text-base font-medium leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {project.desc}
        </p>
      </div>

      {/* Efek Cahaya Neon */}
      <div className="absolute inset-0 bg-gradient-to-tr from-vivid-violet/10 via-transparent to-vivid-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[45px]" />
    </motion.div>
  );
}

