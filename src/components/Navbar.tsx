import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, className, ...props }) => (
  <a
    href={href}
    className={cn(
      "text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full",
      "hover:bg-muted", // Added a subtle background on hover
      className
    )}
    {...props}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-b-2xl p-4 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          onClick={e => {
            e.preventDefault();
            window.location.href = "/";
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
          }}
          className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors duration-200 ease-in-out"
        >
          My Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            href="#about"
            onClick={e => {
              e.preventDefault();
              if (window.location.pathname !== "/") {
                window.location.href = "/#about";
              } else {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            About
          </NavLink>
          <NavLink
            href="#skills"
            onClick={e => {
              e.preventDefault();
              window.location.href = "/#skills";
            }}
          >
            Skills
          </NavLink>
          <Link
            to="/projects"
            onClick={e => {
              e.preventDefault();
              window.location.href = "/projects";
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
            }}
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out px-4 py-2 rounded-full hover:bg-muted"
          >
            Projects
          </Link>
          <NavLink
            href="/#certificates"
            onClick={e => {
              e.preventDefault();
              window.location.href = "/#certificates";
            }}
          >
            Certificates
          </NavLink>
          <NavLink
            href="#contact"
            onClick={e => {
              e.preventDefault();
              if (window.location.pathname !== "/") {
                window.location.href = "/#contact";
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact
          </NavLink>
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
                <NavLink
                  href="#about"
                  className="text-xl text-foreground hover:text-primary"
                  onClick={e => {
                    e.preventDefault();
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#about";
                    } else {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  href="#skills"
                  className="text-xl text-foreground hover:text-primary"
                  onClick={e => {
                    e.preventDefault();
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#skills";
                    } else {
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Skills
                </NavLink>
                <Link
                  to="/projects"
                  className="text-xl text-foreground hover:text-primary"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = "/projects";
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                >
                  Projects
                </Link>
                <NavLink
                  href="/#certificates"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = "/#certificates";
                  }}
                  className="text-xl text-foreground hover:text-primary"
                >
                  Certificates
                </NavLink>
                <NavLink
                  href="#contact"
                  className="text-xl text-foreground hover:text-primary"
                  onClick={e => {
                    e.preventDefault();
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#contact";
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

// CertificatesBar component
interface CertificateBarItem {
  title: string;
  institution: string;
  link: string;
  icon: string;
}
<section id="skills" className="...">
  <h3 className="text-3xl font-bold text-foreground">My Skills</h3>
  {/* ...resto del contenido... */}
</section>

export default Navbar;