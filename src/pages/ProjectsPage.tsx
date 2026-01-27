import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const projects = [
  {
    title: "Performance Testing Automation Project – DoseTrac® Enterprise (DTE)",
    overview: "Designed and implemented a custom performance test automation framework for the Reports module of the DoseTrac® Enterprise (DTE) web application.",
    contributions: [
      "Automated critical user workflows to improve testing efficiency, reliability, and consistency across application releases.",
      "Utilized Gherkin for behavior-driven feature file design and TypeScript to manage data transitions and optimize click-path execution.",
      "Developed automation scripts to validate data consistency, navigation flows, and UI rendering across multiple pages.",
      "Created a robust safety net for new releases and code changes, enabling early detection of performance and data-related defects.",
      "Improved software quality by identifying issues that could impact data accuracy, user experience, and system performance.",
    ],
    tools: ["Gherkin", "TypeScript", "Playwright", "Jira", "Azure DevOps"],
    demonstrates: ["Performance Testing", "Test Automation", "BDD", "Software Quality Assurance", "DevOps"],
  },
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
  {
    title: "Rails of Peru – Train Travel Database",
    overview: "Relational database simulating a train travel reservation system in Peru, managing customers, reservations, stations, routes, and pricing.",
    contributions: [
      "Database Design: ERD, primary & foreign keys, normalization",
      "SQL Queries: JOINs, aggregates, and calculations for reservations and pricing",
      "Data Population: 30+ rows per table, manually inserted",
      "Version Control: GitHub"
    ],
    tools: ["PostgreSQL", "SQL", "pgAdmin"],
    demonstrates: ["Database Design", "SQL", "Data Modeling"],
    github: "https://github.com/claudiameza2006/DataBase-Project"
  },
];

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-10 text-center animate-fadeIn">
          My Projects
        </h1>
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectsPage;