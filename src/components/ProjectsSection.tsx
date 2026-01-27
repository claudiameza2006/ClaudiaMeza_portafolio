"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderGit2 } from 'lucide-react'; // Importing an icon for visual appeal

interface Project {
  title: string;
  overview: string;
  contributions: string[];
  tools: string[];
  demonstrates: string[];
  github?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-8">
        <FolderGit2 className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-3xl font-bold text-foreground">My Projects</h3>
      </div>
      <div className="grid gap-8">
        {projects
          .slice() // copy array
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((project, index) => (
            <Card key={index} className="rounded-xl shadow-lg border-border hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Overview:</h4>
                  <p className="text-foreground leading-relaxed">{project.overview}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Key Contributions:</h4>
                  <ul className="list-disc list-inside text-foreground space-y-1">
                    {project.contributions.map((contribution, i) => (
                      <li key={i}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Demonstrates:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.demonstrates.map((demonstration, i) => (
                      <Badge key={i} className="px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
                        {demonstration}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 px-5 py-2 bg-primary text-primary-foreground rounded-xl shadow hover:bg-primary/90 transition-colors text-base font-bold border-2 border-primary/70 text-center"
                  >
                    View on GitHub
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;