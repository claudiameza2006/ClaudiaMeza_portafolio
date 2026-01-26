import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom"; // Importar useLocation

const Navbar: React.FC = () => {
  const location = useLocation(); // Obtener la ubicación actual

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Si no estamos en la página principal, navegamos a ella con el hash
      window.location.href = `/#${sectionId}`;
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-b-2xl p-4 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/" // Este enlace ya apunta a la página principal
          className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors duration-200 ease-in-out"
        >
          My Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/#about"
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full hover:bg-muted"
          >
            About
          </Link>
          <Link
            to="/#skills"
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full hover:bg-muted"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full hover:bg-muted"
          >
            Projects
          </Link>
          <Link
            to="/#certificates"
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full hover:bg-muted"
          >
            Certificates
          </Link>
          <Link
            to="/#contact"
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full hover:bg-muted"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gradient-to-b from-background to-card p-6 rounded-l-2xl">
              <div className="flex flex-col space-y-6 pt-8">
                <Link
                  to="/#about"
                  className="text-xl text-foreground hover:text-primary"
                >
                  About
                </Link>
                <Link
                  to="/#skills"
                  className="text-xl text-foreground hover:text-primary"
                >
                  Skills
                </Link>
                <Link
                  to="/projects"
                  className="text-xl text-foreground hover:text-primary"
                >
                  Projects
                </Link>
                <Link
                  to="/#certificates"
                  className="text-xl text-foreground hover:text-primary"
                >
                  Certificates
                </Link>
                <Link
                  to="/#contact"
                  className="text-xl text-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;