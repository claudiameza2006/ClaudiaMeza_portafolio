"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles } from 'lucide-react'; // Importing an icon for visual appeal

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn hover:shadow-2xl transition-shadow duration-300">
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
    </section>
  );
};

export default SkillsSection;