"use client";

import React, { useEffect } from 'react'; // Importar useEffect
import { useLocation } from 'react-router-dom'; // Importar useLocation
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TerminalCallToAction from "@/components/TerminalCallToAction"; // Importar el nuevo componente
import CertificatesSection from "@/components/CertificatesSection";

const Index = () => {
  const skills = [
    "Cybersecurity", "Automation", "DevOps", "SIEM", "CI/CD",
    "Threat Detection", "Compliance Automation", "Cloud Security",
    "Network Security", "Incident Response", "Python", "Bash",
    "Linux", "AWS", "Azure", "Docker", "Kubernetes", "Git"
  ];

  const certificates = [
    {
      title: "Mastercard Cybersecurity Virtual Experience Program",
      institution: "Forage",
      date: "January 2026",
      link: "https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_697504144414d52c3e70be0e_1769279914143_completion_certificate.pdf",
      description: [
        "Completed a job simulation where I served as an analyst on Mastercard’s Security Awareness Team",
        "Helped identify and report security threats such as phishing",
        "Analyzed and identified which areas of the business needed more robust security training and implemented training courses and procedures for those teams"
      ]
    }
  ];

  const location = useLocation(); // Obtener la ubicación actual

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Eliminar '#' del hash
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si no hay hash, asegurar que la página se desplace al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]); // Ejecutar este efecto cuando el hash de la URL cambie

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />

      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <HeroSection />
        <TerminalCallToAction /> {/* Usando el nuevo componente */}
        
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection skills={skills} />
        </div>
        <div id="certificates">
          <CertificatesSection certificates={certificates} />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;