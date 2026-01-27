"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-3xl mx-auto mt-12 p-8 sm:p-12 bg-card rounded-2xl shadow-xl border border-border text-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-50 rounded-2xl"></div>
      <div className="relative z-10 animate-fadeIn">
        <Avatar className="w-36 h-36 mx-auto mb-6 border-4 border-primary shadow-lg ring-4 ring-secondary ring-offset-4 ring-offset-white">
          <AvatarImage src="/placeholder.svg" alt="Your Profile Picture" /> {/* IMPORTANT: Replace with your actual image path, e.g., /images/your-photo.jpg */}
          <AvatarFallback className="bg-muted text-primary text-5xl font-bold">JP</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Cybersecurity & Automation Engineer
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
          AIS R&D Digital Technology Intern at B. Braun Medical Inc.
          <br />
          Computer Science Major & Business Management Minor at Alvernia University
        </h2>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
          Building secure, automated, and resilient systems across cloud, DevOps, and enterprise environments.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild className="rounded-full px-6 py-3 bg-primary hover:bg-primary/90 text-white text-lg font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <a href="https://www.linkedin.com/in/claudiamezasilva/?locale=es_ES" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 py-3 border-primary text-primary hover:bg-muted hover:text-primary/90 text-lg font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;