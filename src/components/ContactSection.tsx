"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { showSuccess, showError } from "@/utils/toast";
import { Mail } from 'lucide-react'; // Importing an icon for visual appeal

const ContactSection: React.FC = () => {
  // La función handleSubmit ya no es necesaria para el envío directo a Formspree
  // Formspree manejará el envío directamente a través de los atributos 'action' y 'method' del formulario.
  // Sin embargo, podemos mantener la lógica del toast para una mejor experiencia de usuario después del envío.
  const handleFormspreeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el envío por defecto para manejar el toast
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showSuccess("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
        form.reset(); // Limpia el formulario después del envío exitoso
      } else {
        const data = await response.json();
        if (data.errors) {
          showError(data.errors.map((error: any) => error.message).join(", "));
        } else {
          showError("Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showError("Hubo un problema de red. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-6">
        <Mail className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-3xl font-bold text-foreground">Get in Touch</h3>
      </div>
      <form 
        onSubmit={handleFormspreeSubmit} 
        action="https://formspree.io/f/yourformid" // ¡IMPORTANTE! Reemplaza 'yourformid' con tu ID de formulario de Formspree
        method="POST" 
        className="space-y-6"
      >
        <div>
          <Label htmlFor="name" className="text-lg font-medium text-foreground mb-2 block">Name</Label>
          <Input 
            id="name" 
            type="text" 
            name="name" // Añadir el atributo 'name'
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
            name="email" // Añadir el atributo 'name'
            placeholder="your.email@example.com" 
            className="w-full px-4 py-3 rounded-xl border-border focus:border-primary focus:ring-primary text-lg" 
            required 
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-lg font-medium text-foreground mb-2 block">Message</Label>
          <Textarea 
            id="message" 
            name="message" // Añadir el atributo 'name'
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