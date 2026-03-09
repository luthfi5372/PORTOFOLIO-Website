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

const ProjectGallery = dynamic(() => import("@/components/sections/ProjectGallery"), {
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
        
        {/* Project Gallery - Bento Grid with 3D Tilt */}
        <ProjectGallery />
        
        {/* Glass Gallery */}
        <GlassGallery />
        
        {/* Contact Section */}
        <ContactSection />
        <Footer />
      </LiquidBackground>
    </main>
  );
}
