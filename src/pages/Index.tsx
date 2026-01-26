"use client";

import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CallToActionSection from "@/components/CallToActionSection";
import CertificatesSection from "@/components/CertificatesSection";

const Index = () => {
  const skills = [
    "Cybersecurity", "Automation", "DevOps", "SIEM", "CI/CD",
    "Threat Detection", "Compliance Automation", "Cloud Security",
    "Network Security", "Incident Response", "Python", "Bash",
    "Linux", "AWS", "Azure", "Docker", "Kubernetes", "Git"
  ];

  const projects = [
    {
      title: "Network Traffic Analysis Dashboard (Python + Streamlit)",
      overview: "Developed an interactive dashboard to analyze network traffic, detect anomalies, and visualize suspicious patterns for security teams.",
      contributions: [
        "Parsed and normalized log data using Python",
        "Built interactive dashboards with Streamlit",
        "Implemented anomaly detection logic",
        "Designed visualizations to support threat analysis",
      ],
      tools: ["Python", "Streamlit", "Pandas", "Regex"],
      demonstrates: ["Security analytics", "automation", "dashboard design"],
    },
    {
      title: "CI/CD Compliance & Hardening Automation (B. Braun)",
      overview: "Improved CI/CD reliability and security by automating backup workflows and remediating pipeline misconfigurations.",
      contributions: [
        "Automated secure backup workflows using Bash and BorgBackup",
        "Reduced deployment vulnerabilities and attack surface by 25%",
        "Authored risk and compliance documentation for audits",
        "Strengthened system hardening and deployment reliability",
      ],
      tools: ["Jenkins", "GitHub", "Bash", "PowerShell"],
      demonstrates: ["DevSecOps", "compliance", "automation"],
    },
    {
      title: "Vulnerability Assessment & Firewall Log Analysis (Peru Internship)",
      overview: "Conducted vulnerability assessments and analyzed firewall logs to identify threats and improve remediation workflows.",
      contributions: [
        "Performed Tenable vulnerability scans",
        "Analyzed firewall logs for high‑priority threats",
        "Monitored SIEM dashboards for anomalous activity",
        "Prepared weekly compliance and threat intelligence reports",
      ],
      tools: ["Tenable", "Linux", "SIEM"],
      demonstrates: ["Vulnerability management", "log analysis", "threat detection"],
    },
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />

      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <HeroSection />
        <CallToActionSection />
        
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection skills={skills} />
        </div>
        <div id="projects">
          <ProjectsSection projects={projects} />
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