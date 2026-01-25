"use client";

import React from 'react';
import { Info } from 'lucide-react'; // Importing an icon for visual appeal

const AboutSection: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn">
      <div className="flex items-center justify-center mb-6"> {/* Centered icon and title */}
        <Info className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-3xl font-bold text-foreground">About Me</h3>
      </div>
      <p className="text-lg text-foreground leading-relaxed text-left mb-4"> {/* Changed to text-left */}
        I’m a cybersecurity and automation engineer with hands‑on experience in DevOps, security operations, vulnerability management, and compliance. My work focuses on building secure, efficient systems while improving detection, response, and audit readiness across enterprise environments.
      </p>
      <p className="text-lg text-foreground leading-relaxed text-left mb-4"> {/* Changed to text-left */}
        I currently serve as an AIS R&D Digital Technology Intern at B. Braun Medical Inc., where I automate secure workflows, remediate CI/CD vulnerabilities, and support risk and compliance initiatives. My background spans the U.S. and Peru, giving me strong adaptability, bilingual communication skills, and experience supporting diverse technical teams.
      </p>
      <p className="text-lg text-foreground leading-relaxed text-left"> {/* Changed to text-left */}
        I’m completing my B.S. in Computer Science with a Business Management minor at Alvernia University. My long‑term goal is to become a cybersecurity & automation consultant, helping organizations strengthen resilience through secure architecture, automation, and data‑driven decision‑making.
      </p>
    </section>
  );
};

export default AboutSection;