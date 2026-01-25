"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-t-2xl p-6 border-t border-border mt-16">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm mb-2">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;