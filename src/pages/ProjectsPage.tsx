import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectsPage;
