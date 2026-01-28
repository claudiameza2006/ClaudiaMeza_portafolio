"use client";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TerminalCallToAction from "@/components/TerminalCallToAction";
import CallToActionSection from "@/components/CallToActionSection";
import LeadershipSection from "@/components/LeadershipSection";
import AwardsSection from "@/components/AwardsSection"; // Import the new component

const Index = () => {
  const skills = [
    "Cybersecurity", "Automation", "DevOps", "SIEM", "CI/CD",
    "Threat Detection", "Compliance Automation", "Cloud Security",
    "Network Security", "Incident Response", "Python", "Bash",
    "Linux", "AWS", "Azure", "Docker", "Kubernetes", "Git"
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />

      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <HeroSection />
        <TerminalCallToAction />
        
        <div id="about">
          <AboutSection />
        </div>
        <div id="leadership">
          <LeadershipSection />
        </div>
        <div id="awards"> {/* New section for awards */}
          <AwardsSection />
        </div>
        <div id="skills">
          <SkillsSection skills={skills} />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <CallToActionSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;