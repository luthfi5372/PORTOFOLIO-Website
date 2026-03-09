"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  { 
    title: "MindMate+", 
    category: "TECH", 
    desc: "AI-Powered Mood Tracker & Health Monitor", 
    size: "md:col-span-2",
    gradient: "from-violet-600 via-purple-600 to-indigo-700"
  },
  { 
    title: "Budget App", 
    category: "RESEARCH", 
    desc: "Precision Financial Analysis for Institutions", 
    size: "md:col-span-1",
    gradient: "from-cyan-600 via-teal-600 to-emerald-700"
  },
  { 
    title: "NCC Dashboard", 
    category: "MANAGEMENT", 
    desc: "Leadership Control System for NCC 2026", 
    size: "md:col-span-1",
    gradient: "from-rose-600 via-pink-600 to-fuchsia-700"
  },
  { 
    title: "PIKIR Portal", 
    category: "INNOVATION", 
    desc: "Research & Entrepreneurship Ecosystem", 
    size: "md:col-span-2",
    gradient: "from-violet-600 via-purple-600 to-indigo-700"
  }
];

export default function ProjectGallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-5xl font-black text-vivid-slate tracking-tighter">
          Featured <span className="text-vivid-violet">Works.</span>
        </h2>
        <p className="text-vivid-slate/60 mt-4 font-medium">Selected projects from NCC, PIKIR, and Research Lab.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  // Motion values untuk posisi mouse
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Gunakan useSpring untuk menghaluskan transisi (Inovasi: Smooth Animation)
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transformasi untuk rotasi 3D (Tilt)
  const rotateX = useTransform(mouseYSpring, [0, 1], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-12deg", "12deg"]);

  // Transformasi untuk pergeseran gradient (Parallax Effect)
  const gradientX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const gradientY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width;
    const yPct = (e.clientY - rect.top) / height;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`${project.size} relative h-[450px] rounded-[45px] group cursor-pointer overflow-hidden`}
    >
      {/* Dasar Kaca dengan Gradien Dinamis */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} to-black/30 z-0 rounded-[45px]`}
        style={{ x: gradientX, y: gradientY }}
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[45px] z-1" />
      
      {/* Abstract Shapes - Dynamic Liquid Effect */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden rounded-[45px]"
        style={{ x: gradientX, y: gradientY }}
      >
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Konten dengan efek Floating (Teks & Deskripsi) */}
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 p-12 flex flex-col justify-end z-20"
      >
        <span className="text-xs font-black tracking-[0.3em] text-white/80 mb-3 uppercase backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full w-fit">
          {project.category}
        </span>
        <h3 className="text-4xl font-black text-white mb-3 tracking-tight drop-shadow-lg">
          {project.title}
        </h3>
        <p className="text-white/70 text-base font-medium leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {project.desc}
        </p>
      </div>

      {/* Efek Cahaya Neon (Glow) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[45px] z-10" />
      
      {/* Shine Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-[45px] z-10"
        style={{ transform: "translateZ(1px)" }}
      />
    </motion.div>
  );
}

