import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const experiences = [
  {
    title: "DevOps Intern",
    company: "BBraun Medical Inc.",
    date: "May 2025 - Present",
    location: "Allentown, PA",
    bullets: [
      "Automate secure backup workflows using Bash and BorgBackup, ensuring data integrity and compliance across Linux servers.",
      "Remediate CI/CD pipeline misconfigurations, reducing deployment vulnerabilities and attack surface by 25% while enhancing system hardening.",
      "Authore risk and compliance documentation detailing control gaps and remediation steps to support audit readiness and threat intelligence reporting."
    ]
  },
  {
    title: "IT Help Desk Student Technician",
    company: "Alvernia University",
    date: "Aug 2024 - May 2025",
    location: "Reading, PA",
    bullets: [
      "Investigated and triaged account security incidents (phishing, anomalous logins), escalating security risks to SOC teams and reducing resolution time by 30%, improving incident response efficiency.",
      "Executed patch management and system updates, reinforcing secure baselines and strengthening overall network defense posture.",
      "Delivered clear, actionable briefings to non-technical stakeholders, enhancing security awareness and compliance alignment."
    ]
  },
  {
    title: "Cybersecurity Intern",
    company: "Soluciones Tecnológicas JC S.A.C",
    date: "May - Dec 2024",
    location: "Lima, Peru",
    bullets: [
      "Conducted vulnerability assessments and configuration audits, identifying security gaps and prioritizing remediation to strengthen enterprise risk posture.",
      "Analyzed high-priority firewall logs and monitored SIEM dashboards for anomalous activity, enabling real-time threat detection, incident escalation, and faster response coordination.",
      "Prepared weekly compliance and threat intelligence reports, synthesizing monitoring findings, control checks, and emerging risk trends to support audit readiness and executive decision making."
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-10 text-center animate-fadeIn">
          Technology Experience
        </h1>
        <section className="w-full max-w-5xl mx-auto grid gap-8 py-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white/80 rounded-2xl shadow-lg border border-primary p-8 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                  <span className="text-base text-foreground font-semibold">{exp.company}</span>
                </div>
                <div className="text-sm text-muted-foreground text-right">
                  <div>{exp.date}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2 pl-2">
                {exp.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Experience;
