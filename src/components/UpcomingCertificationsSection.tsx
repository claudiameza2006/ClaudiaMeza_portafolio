"use client";

import React from 'react';
import { Clock, BookOpen } from 'lucide-react'; // Icons for upcoming/in progress
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UpcomingCertificate {
  title: string;
  expectedDate: string;
  status: string; // e.g., "In Progress", "Studying"
  notes?: string; // Additional notes
}

interface UpcomingCertificationsSectionProps {
  upcomingCertificates: UpcomingCertificate[];
}

const UpcomingCertificationsSection: React.FC<UpcomingCertificationsSectionProps> = ({ upcomingCertificates }) => {
  return (
    <section 
      id="upcoming-certificates" 
      className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-center mb-8">
        <Clock className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-3xl font-bold text-foreground">Upcoming Certifications</h3>
      </div>
      <div className="grid gap-8">
        {upcomingCertificates.map((cert, index) => (
          <Card key={index} className="p-6 rounded-xl border border-border bg-card shadow-lg flex flex-col sm:flex-row sm:items-center gap-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex-shrink-0">
              <BookOpen className="w-16 h-16 text-accent" /> {/* Generic icon for studying */}
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-primary mb-1">{cert.title}</h4>
              <p className="text-foreground font-semibold text-base mb-1">Expected: {cert.expectedDate}</p>
              <Badge className="mt-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
                {cert.status}
              </Badge>
              {cert.notes && (
                <p className="text-sm text-muted-foreground mt-2">{cert.notes}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UpcomingCertificationsSection;