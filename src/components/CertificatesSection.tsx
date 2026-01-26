import React from 'react';
import { Award } from 'lucide-react'; // Importando un icono para la sección de certificados

interface Certificate {
  title: string;
  institution: string;
  date?: string;
  link?: string;
  description?: string[];
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
        {/* Ordeno los certificados personalizados en orden alfabético por título */}
        {["AIG Shields Up: Cybersecurity on Forage", "Deloitte Australia Cyber Job Simulation on Forage", "Mastercard Cybersecurity Certificate", "Tata Cybersecurity Analyst on Forage"].map(title => {
          const certs = [
            {
              title: "AIG Shields Up: Cybersecurity on Forage",
              institution: "AIG",
              date: "January 2026",
              link: "https://www.theforage.com/completion-certificates/4nAmAbTbHbnGMNSyo/2ZFnEGEDKTQMtEv9C_4nAmAbTbHbnGMNSyo_697504144414d52c3e70be0e_1769287930293_completion_certificate.pdf",
              description: [
                "Completed a cybersecurity threat analysis simulation for the Cyber Defense Unit, staying updated on CISA publications.",
                "Researched and understood reported vulnerabilities, showcasing analytical skills in cybersecurity.",
                "Drafted a clear and concise email to guide teams on vulnerability remediation.",
                "Utilized Python skills to write a script for ethical hacking, avoiding ransom payments by bruteforcing decryption keys."
              ],
              skills: [
                "PROBLEM SOLVING",
                "SECURITY CONSULTING",
                "SECURITY ENGINEERING",
                "SOLUTION ARCHITECTURE",
                "VULNERABILITY MANAGEMENT"
              ],
              icon: "https://cdn.sanity.io/images/mz2hls6g/production/8945461f0709009fdcad9a72a6727012c79ec8d7-1000x1000.png?w=1600&q=75&fit=clip&auto=format"
            },
            {
              title: "Deloitte Australia Cyber Job Simulation on Forage",
              institution: "Deloitte Australia",
              date: "January 2026",
              link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_697504144414d52c3e70be0e_1769288361034_completion_certificate.pdf",
              description: [
                "Completed a job simulation involving reading web activity logs",
                "Supported a client in a cyber security breach",
                "Answered questions to identify suspicious user activity"
              ],
              skills: [
                "CYBERSECURITY BREACH",
                "WEB ACTIVITY LOGS",
                "DATA BREACH",
                "COMPUTER NETWORKING",
                "WEB SECURITY"
              ],
              icon: "https://d3535lqr6sqxto.cloudfront.net/employers/xuo5sAHNaqv4LlkiF3yrzDYb1smXNxyqiBBif0xc.png"
            },
            {
              title: "Mastercard Cybersecurity Certificate",
              institution: "Mastercard",
              date: "January 2026",
              link: "https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_697504144414d52c3e70be0e_1769279914143_completion_certificate.pdf",
              description: [
                "Identity Access Management (IAM) training and certification",
                "Security risk assessment and mitigation",
                "Implementation of IAM solutions",
                "Cybersecurity consulting and best practices"
              ],
              skills: [
                "IDENTITY ACCESS MANAGEMENT (IAM)",
                "SECURITY RISK",
                "IAM SOLUTIONS",
                "IAM IMPLEMENTATION",
                "CYBERSECURITY CONSULTING"
              ],
              icon: "https://static.vecteezy.com/system/resources/previews/069/864/333/non_2x/mastercard-logo-transparent-rounded-app-icon-free-png.png"
            },
            {
              title: "Tata Cybersecurity Analyst on Forage",
              institution: "Tata Consultancy Services",
              date: "January 2026",
              link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_697504144414d52c3e70be0e_1769291361458_completion_certificate.pdf",
              description: [
                "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
                "Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives.",
                "Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively."
              ],
              skills: [
                "IDENTITY ACCESS MANAGEMENT (IAM)",
                "SECURITY RISK",
                "IAM SOLUTIONS",
                "IAM IMPLEMENTATION",
                "CYBERSECURITY CONSULTING"
              ],
              icon: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png"
            }
          ];
          const cert = certs.find(c => c.title === title);
          if (!cert) return null;
          return (
            <div key={cert.title} className="p-8 min-h-[10rem] rounded-2xl border border-primary bg-white/90 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between hover:scale-[1.02] transition-transform duration-300 gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src={cert.icon} alt={`${cert.institution} Certificate Icon`} className="w-36 h-36 object-contain shadow-md hover:scale-105 transition-transform duration-200 bg-white" />
                </a>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-pink-600 mb-1">{cert.title}</h4>
                  <p className="text-primary font-semibold text-base mb-1">{cert.institution}</p>
                  <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                  <ul className="list-disc list-inside text-foreground text-sm mb-2 pl-2">
                    {cert.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold border border-pink-300">{skill}</span>
                    ))}
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-5 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition-colors text-base font-bold border-2 border-pink-400">
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificatesSection;