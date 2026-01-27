"use client";

import React from 'react';
import { Info, Code, Shield, Cloud } from 'lucide-react'; // Importing more icons

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn 
                 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300
                 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background"
    >
      {/* Subtle circuit pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0zM9 0h1v40H9zM0 9h40v1H0zM19 0h1v40H19zM0 19h40v1H0zM29 0h1v40H29zM0 29h40v1H0zM39 0h1v40H39zM0 39h40v1H0z' fill='%23b3dee2' fill-opacity='0.05'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3Ccircle cx='30' cy='10' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3Ccircle cx='10' cy='30' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3Ccircle cx='30' cy='30' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '40px 40px'
           }}
      ></div>

      <div className="relative z-10"> {/* Content wrapper to keep text above pattern */}
        <div className="flex items-center justify-center mb-6">
          <Info className="h-8 w-8 text-primary mr-3" />
          <h3 className="text-3xl font-bold text-primary">About Me</h3> {/* Changed title color */}
        </div>
        <p className="text-lg text-foreground leading-relaxed text-left mb-4 flex items-start">
          <Shield className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /> {/* Icon for security focus */}
          I’m a cybersecurity and automation engineer with hands‑on experience in DevOps, security operations, vulnerability management, and compliance. My work focuses on building secure, efficient systems while improving detection, response, and audit readiness across enterprise environments.
        </p>
        <p className="text-lg text-foreground leading-relaxed text-left mb-4 flex items-start">
          <Code className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /> {/* Icon for automation/devops */}
          I currently serve as an AIS R&D Digital Technology Intern at B. Braun Medical Inc., where I automate secure workflows, remediate CI/CD vulnerabilities, and support risk and compliance initiatives. My background spans the U.S. and Peru, giving me strong adaptability, bilingual communication skills, and experience supporting diverse technical teams.
        </p>
        <p className="text-lg text-foreground leading-relaxed text-left flex items-start">
          <Cloud className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /> {/* Icon for future goals/cloud */}
          I’m completing my B.S. in Computer Science with a Business Management minor at Alvernia University. My long‑term goal is to become a cybersecurity & automation consultant, helping organizations strengthen resilience through secure architecture, automation, and data‑driven decision‑making.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;