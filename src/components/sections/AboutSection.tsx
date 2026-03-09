"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Sekretaris",
    organization: "PIKIR Organisasi",
    period: "2023 - Sekarang",
    description: "Mengelola administrasi dan koordinasi organisasi",
  },
  {
    icon: Award,
    title: "Praktisi Kewirausahaan",
    organization: " inkir",
    period: "2022 - Sekarang",
    description: "Riset inovasi dan pengembangan bisnis",
  },
  {
    icon: GraduationCap,
    title: "Data Entry",
    organization: "Freelance",
    period: "2021 - Sekarang",
    description: "Pengelolaan data dan dokumentasi",
  },
];

const skills = [
  { name: "Microsoft Office", icon: "📊" },
  { name: "Data Entry", icon: "⌨️" },
  { name: "Research", icon: "🔍" },
  { name: "Administration", icon: "📁" },
  { name: "Communication", icon: "💬" },
  { name: "Project Management", icon: "📋" },
];

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      {/* Experience Timeline */}
      <div className="space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center"
              >
                <exp.icon size={20} className="text-purple-600" />
              </motion.div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-24 bg-purple-200" />
              )}
            </div>
            
            {/* Content */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-1 p-6 bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px] border border-[rgba(255,255,255,0.25)] rounded-[2rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <span className="text-xs text-purple-600 font-semibold">{exp.period}</span>
              <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
              <p className="text-gray-600 font-medium">{exp.organization}</p>
              <p className="text-gray-500 text-sm mt-2">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Skills Cloud */}
      <h3 className="text-2xl font-bold text-center mb-8">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            viewport={{ once: true }}
            className="px-6 py-3 bg-[rgba(255,255,255,0.12)] backdrop-blur-[40px] border border-[rgba(255,255,255,0.25)] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-2 cursor-pointer"
          >
            <span>{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

