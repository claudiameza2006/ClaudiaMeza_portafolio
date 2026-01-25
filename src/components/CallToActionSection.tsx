"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareText } from "lucide-react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl text-center text-white animate-fadeIn">
      <div className="flex items-center justify-center mb-4">
        <MessageSquareText className="h-8 w-8 mr-3" />
        <h3 className="text-3xl font-bold">Ready to Connect?</h3>
      </div>
      <p className="text-lg leading-relaxed mb-8 opacity-90">
        Whether you have a project in mind, a question, or just want to say hello, I'd love to hear from you.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild className="w-full sm:w-auto rounded-full px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg bg-white text-primary hover:bg-background font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <a href="#contact">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto rounded-full px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <a href="#projects">
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;