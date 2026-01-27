import React from 'react';
import { Award } from 'lucide-react'; // Importando un icono para la sección de certificados
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Importar Card para usar sus estilos base

interface Certificate {
  title: string;
  institution: string;
  date?: string;
  link?: string;
  description?: string[];
  skills: string[];
  icon: string;
}

interface CertificatesSectionProps {
  certificates: Certificate[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => {
  return (
    <section id="certificates" className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-8">
        <Award className="h-8 w-8 text-primary mr-3" /> {/* Icono para la sección */}
        <h3 className="text-3xl font-bold text-foreground">Certificates</h3>
      </div>
      <div className="grid gap-8">
        {certificates
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((cert, index) => (
            <Card key={index} className="p-8 min-h-[10rem] rounded-2xl border border-border bg-card shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between hover:scale-[1.02] transition-transform duration-300 gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src={cert.icon} alt={`${cert.institution} Certificate Icon`} className="w-36 h-36 object-contain shadow-md hover:scale-105 transition-transform duration-200 bg-background p-2 rounded-lg" />
                </a>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-primary mb-1">{cert.title}</h4> {/* Usar text-primary */}
                  <p className="text-foreground font-semibold text-base mb-1">{cert.institution}</p>
                  <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                  <ul className="list-disc list-inside text-foreground text-sm mb-2 pl-2">
                    {cert.description?.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary-foreground border border-secondary/30"> {/* Usar bg-secondary/20 y text-secondary-foreground */}
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full shadow hover:bg-primary/90 transition-colors text-base font-bold border-2 border-primary/70"> {/* Usar bg-primary y text-primary-foreground */}
                    View Certificate
                  </a>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default CertificatesSection;