"use client";

import dynamic from 'next/dynamic';
import { LiquidBackground } from "@/components/animations";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import { SoundToggle } from "@/components/ui";
import SkillsVivid from "@/components/sections/SkillsVivid";

// Lazy load heavy components
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-white/10 rounded-3xl m-6" />
});

const ProjectCard = dynamic(() => import("@/components/sections/ProjectCard"), {
  ssr: false
});

const GlassGallery = dynamic(() => import("@/components/sections/GlassGallery"), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-white/10 rounded-3xl m-6" />
});

const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  ssr: false
});

const Footer = dynamic(() => import("@/components/ui/Footer"), {
  ssr: false
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SoundToggle />
      <LiquidBackground>
        <Navbar />
        <Hero />
        
        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Skills Vivid Section */}
        <section id="skills">
          <SkillsVivid />
        </section>
        
        {/* Project Cards */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="MindMate+" category="Tech" />
            <ProjectCard title="Budget App" category="Research" />
            <ProjectCard title="Brand Design" category="Design" />
          </div>
        </section>
        
        {/* Glass Gallery */}
        <GlassGallery />
        
        {/* Contact Section */}
        <ContactSection />
        <Footer />
      </LiquidBackground>
    </main>
  );
}
