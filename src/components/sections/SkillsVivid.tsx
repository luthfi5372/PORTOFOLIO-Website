"use client";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Database, BarChart3, Settings, MessageSquareText, Target } from "lucide-react";

const skillList = [
  { id: 1, label: "Microsoft Office", icon: BriefcaseBusiness, color: "bg-vivid-violet/20 border-vivid-violet/40", iconColor: "text-vivid-violet" },
  { id: 2, label: "Data Entry", icon: Database, color: "bg-vivid-cyan/20 border-vivid-cyan/40", iconColor: "text-vivid-cyan" },
  { id: 3, label: "Research", icon: BarChart3, color: "bg-vivid-violet/20 border-vivid-violet/40", iconColor: "text-vivid-violet" },
  { id: 4, label: "Administration", icon: Settings, color: "bg-vivid-cyan/20 border-vivid-cyan/40", iconColor: "text-vivid-cyan" },
  { id: 5, label: "Communication", icon: MessageSquareText, color: "bg-vivid-rose/20 border-vivid-rose/40", iconColor: "text-vivid-rose" },
  { id: 6, label: "Project Management", icon: Target, color: "bg-vivid-violet/20 border-vivid-violet/40", iconColor: "text-vivid-violet" },
];

export default function SkillsVivid() {
  return (
    <section className="relative px-6 py-20 bg-slate-50 flex flex-col items-center gap-12 overflow-hidden">
      {/* Background Blobs - High Saturation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-vivid-violet/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vivid-cyan/30 rounded-full blur-[120px]" />
      </div>

      <h2 className="text-4xl font-black text-vivid-slate z-10">Skills</h2>

      {/* Skills Grid - Responsive Flex Wrap */}
      <div className="flex flex-wrap justify-center gap-6 z-10 max-w-7xl">
        {skillList.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.id}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                flex items-center gap-4 px-8 py-4 rounded-full
                bg-white backdrop-blur-md shadow-glass-heavy
                border-2 ${skill.color}
                shadow-[0_0_20px_rgba(0,0,0,0.03)]
              `}
            >
              {/* Bold Icon with Neon Color */}
              <Icon className={`w-7 h-7 ${skill.iconColor}`} strokeWidth={2.5} />
              
              {/* High Contrast Text - Vivid Slate */}
              <span className="text-lg font-extrabold text-vivid-slate tracking-tight">
                {skill.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

