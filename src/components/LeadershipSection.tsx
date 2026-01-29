"use client";

import React from 'react';
import { Users } from 'lucide-react'; // Icon for leadership
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LeadershipSection: React.FC = () => {
  return (
    <section 
      id="leadership" 
      className="w-full max-w-3xl mx-auto mt-12 p-8 bg-card rounded-2xl shadow-xl border border-border animate-fadeIn 
                 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300
                 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background"
    >
      {/* Subtle circuit pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0zM9 0h1v40H9zM0 9h40v1H0zM19 0h1v40H19zM0 19h40v1H0zM29 0h1v40H29zM0 29h40v1H0zM39 0h1v40H39zM0 39h40v1H0z' fill='%23b3dee2' fill-opacity='0.05'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3Ccircle cx='30' cy='10' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3Ccircle cx='10' cy='30' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3Ccircle cx='30' cy='30' r='1' fill='%23b3dee2' opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '40px 40px'
           }}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Users className="h-8 w-8 text-primary mr-3" />
          <h3 className="text-3xl font-bold text-foreground">Leadership</h3>
        </div>
        <Card className="rounded-xl shadow-lg border-border bg-card hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-primary">CyberWolves | Vice President</CardTitle>
            <span className="text-lg text-foreground font-semibold">May 2025 - Present</span>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-row items-center gap-6">
            <a
              href="https://www.instagram.com/cyberwolves_au/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img src="https://se-images.campuslabs.com/clink/images/f2744ca0-953b-4478-abee-f07b7d711221630be0-b2e6-418e-be6a-ef936fba0883.png?preset=med-sq" alt="CyberWolves Instagram" className="w-24 h-24 object-cover rounded shadow hover:scale-105 transition-transform duration-200" />
            </a>
            <div>
              <ul className="list-disc list-inside text-foreground space-y-1 pl-4">
                <li>Led a team of 11 members, organizing collaborative meetings, workshops, and fundraising initiatives.</li>
                <li>Supported cybersecurity skill development, certification attainment, and access to career opportunities and career fairs.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-lg border-border bg-card hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-primary">Esports Team Member – Valorant, Alvernia University</CardTitle>
            <span className="text-lg text-foreground font-semibold">2024 - Present</span>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc list-inside text-foreground space-y-1 pl-4">
              <li>Collaborated with team members to organize and compete in esports tournaments.</li>
              <li>Assisted in planning and executing a charity event to raise funds for children, demonstrating initiative and community involvement.</li>
              <li>Developed teamwork, strategic thinking, and event coordination skills.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadershipSection;