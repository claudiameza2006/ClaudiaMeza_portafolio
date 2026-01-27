import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

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
  },
  {
    title: "Computer Science Tutor / Academic Support",
    company: "Alvernia University",
    date: "Sept 2024 - Present", // Fechas actualizadas
    location: "Reading, PA",
    bullets: [
      "Provided structured academic support in Computer Science courses, such as Introduction to Programming and Data Structures.",
      "Assisted students in strengthening programming fundamentals, problem-solving abilities, and analytical thinking.",
      "Explained complex concepts clearly and effectively in a professional academic setting."
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <div className="flex items-center justify-center mb-10 animate-fadeIn">
          <Briefcase className="h-10 w-10 text-primary mr-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground text-center">
            Technology Experience
          </h1>
        </div>
        <section className="w-full max-w-3xl mx-auto grid gap-8 py-8">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="rounded-2xl shadow-xl border border-border bg-card animate-fadeIn hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-primary">{exp.title}</CardTitle>
                <span className="text-lg text-foreground font-semibold">{exp.company}</span>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <div>{exp.date}</div>
                  <div>{exp.location}</div>
                </div>
                <ul className="list-disc list-inside text-base text-foreground space-y-1 pl-4">
                  {exp.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Experience;