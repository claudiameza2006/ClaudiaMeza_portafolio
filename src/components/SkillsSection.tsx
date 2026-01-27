"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles } from 'lucide-react'; // Importing an icon for visual appeal

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section 
      id="skills" 
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
          <Sparkles className="h-8 w-8 text-primary mr-3" />
          <h3 className="text-3xl font-bold text-foreground">My Skills</h3>
        </div>
        <p className="text-lg text-foreground leading-relaxed text-center mb-8">
          Here are some of the key technologies and areas I specialize in, driving secure and efficient solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              className="px-4 py-2 text-base rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200 ease-in-out shadow-md"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;