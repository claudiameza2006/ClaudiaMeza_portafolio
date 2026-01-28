"use client";

import React from 'react';
import { Trophy } from 'lucide-react'; // Icon for awards
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string[];
  link?: string;
  icon?: string;
}

const awards: Award[] = [
  {
    title: "Microsoft Cybersecurity Analyst Professional Scholarship Recipient",
    issuer: "Women’s in Cybersecurity / Microsoft",
    date: "July 2025",
    description: [
      "Selected among 1500+ recipients for a fully funded $6500 cybersecurity certification program."
    ],
    link: "#", // Placeholder link
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
  },
  {
    title: "Google Career Certificate Scholarship",
    issuer: "National College Resources Foundation (NCRF) / Google",
    date: "July 2025",
    description: [
      "Awarded through NCRF for demonstrated commitment to cybersecurity education and hands-on training in threat detection, risk management, and security best practices."
    ],
    link: "#", // Placeholder link
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
  },
];

const AwardsSection: React.FC = () => {
  return (
    <section 
      id="awards" 
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

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Trophy className="h-8 w-8 text-primary mr-3" />
          <h3 className="text-3xl font-bold text-foreground">Awards & Scholarships</h3>
        </div>
        <div className="grid gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="p-6 rounded-xl border border-border bg-card shadow-lg flex flex-col sm:flex-row sm:items-center gap-6 hover:scale-[1.02] transition-transform duration-300">
              {award.icon && (
                <a href={award.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src={award.icon} alt={`${award.issuer} Icon`} className="w-24 h-24 object-contain shadow-md hover:scale-105 transition-transform duration-200 bg-background p-2 rounded-lg" />
                </a>
              )}
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-primary mb-1">{award.title}</h4>
                <p className="text-foreground font-semibold text-base mb-1">{award.issuer}</p>
                <p className="text-xs text-muted-foreground mb-2">{award.date}</p>
                <ul className="list-disc list-inside text-foreground text-sm mb-2 pl-2">
                  {award.description?.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {award.link && award.link !== "#" && (
                  <a href={award.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full shadow hover:bg-primary/90 transition-colors text-base font-bold border-2 border-primary/70">
                    Learn More
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;