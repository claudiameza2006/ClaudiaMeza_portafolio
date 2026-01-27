"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // Importar Link

const messages = [
  "user@portfolio:~$ connect --now",
  "Connecting to Claudia's network...",
  "Connection established.",
  "Ready to discuss your project or just say hello!",
  "Hope you enjoy learning about me!",
  "user@portfolio:~$ _" // Blinking cursor placeholder
];

const TerminalCallToAction: React.FC = () => {
  const [displayedMessage, setDisplayedMessage] = useState<string[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (messageIndex < messages.length) {
      if (isTyping) {
        if (charIndex < messages[messageIndex].length) {
          const timeout = setTimeout(() => {
            setDisplayedMessage(prev => {
              const newMessages = [...prev];
              if (newMessages[messageIndex] === undefined) {
                newMessages[messageIndex] = "";
              }
              newMessages[messageIndex] += messages[messageIndex][charIndex];
              return newMessages;
            });
            setCharIndex(charIndex + 1);
          }, 50); // Velocidad de escritura
          return () => clearTimeout(timeout);
        } else {
          setIsTyping(false);
          const timeout = setTimeout(() => {
            setMessageIndex(messageIndex + 1);
            setCharIndex(0);
            setIsTyping(true);
          }, 1000); // Retraso antes de la siguiente línea
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [charIndex, messageIndex, isTyping]);

  return (
    <section className="w-full max-w-3xl mx-auto mt-12 p-0 bg-transparent rounded-2xl shadow-xl animate-fadeIn">
      <div className="bg-gray-800 rounded-t-xl p-4 flex items-center space-x-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-auto text-gray-400 text-sm">Terminal - claudia@portfolio</span>
      </div>
      <div className="bg-gray-900 text-green-400 font-mono text-sm p-6 rounded-b-xl min-h-[150px] overflow-auto">
        {displayedMessage.map((line, idx) => (
          <p key={idx} className="mb-1">
            {line}
            {idx === messageIndex && isTyping && charIndex < messages[messageIndex].length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        ))}
        {messageIndex === messages.length && (
          <p className="mb-1">
            user@portfolio:~$ <span className="animate-pulse">|</span>
          </p>
        )}
      </div>
      <div className="p-6 bg-card rounded-b-2xl border-t border-border text-center">
        <p className="text-lg leading-relaxed mb-8 text-foreground">
          Whether you have a project in mind, a question, or just want to say hello, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="w-full sm:w-auto rounded-full px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg bg-primary text-white hover:bg-primary/90 font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <a href="#contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto rounded-full px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg border-primary text-primary hover:bg-primary hover:text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <Link to="/projects"> {/* Cambiado de <a> a Link y href a to */}
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TerminalCallToAction;