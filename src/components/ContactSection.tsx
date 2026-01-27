"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { showSuccess, showError } from "@/utils/toast";
import { Mail } from 'lucide-react'; // Importing an icon for visual appeal

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service.
    // For now, we'll just show a success toast.
    showSuccess("Thank you for your message! I'll get back to you soon.");
    // You might want to clear the form fields here
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn">
      <div className="flex items-center justify-center mb-6">
        <Mail className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-3xl font-bold text-foreground">Get in Touch</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-lg font-medium text-foreground mb-2 block">Name</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-primary text-lg" 
            required 
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-lg font-medium text-foreground mb-2 block">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            className="w-full px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-primary text-lg" 
            required 
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-lg font-medium text-foreground mb-2 block">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Your message..." 
            rows={5} 
            className="w-full px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-primary text-lg resize-y" 
            required 
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl text-lg transition-colors duration-200 ease-in-out shadow-md"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default ContactSection;