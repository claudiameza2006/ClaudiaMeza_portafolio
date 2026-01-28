import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificatesSection from "@/components/CertificatesSection";
import UpcomingCertificationsSection from "@/components/UpcomingCertificationsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Award } from "lucide-react";

const certificates = [
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
    title: "Cisco Networking Academy – Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    date: "August 2024",
    link: "https://www.credly.com/badges/10223b54-61e3-459e-abf4-685b05241448/linked_in_profile",
    description: [
      "Verified completion of cybersecurity fundamentals, including network security, threat detection, and risk awareness.",
      "Earned Course Final Exam Badge, demonstrating practical understanding of core cybersecurity concepts."
    ],
    skills: [
      "CYBERSECURITY FUNDAMENTALS",
      "NETWORK SECURITY",
      "THREAT DETECTION",
      "RISK AWARENESS"
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png"
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

const upcomingCertificates = [
  {
    title: "Microsoft Cybersecurity Analyst Professional Scholarship",
    expectedDate: "July 2025",
    status: "Awarded - Program in Progress",
    notes: "Selected among 1500+ recipients for a fully funded $6500 cybersecurity certification program (Women’s in Cybersecurity / Microsoft).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
  },
  {
    title: "Google Career Certificate Scholarship",
    expectedDate: "July 2025",
    status: "Awarded - Program in Progress",
    notes: "Awarded through NCRF for demonstrated commitment to cybersecurity education and hands-on training in threat detection, risk management, and security best practices (National College Resources Foundation (NCRF) / Google).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
  },
  {
    title: "CompTIA Security+",
    expectedDate: "April 2026",
    status: "Studying",
    notes: "Currently studying for the CompTIA Security+ certification exam."
    // No specific icon URL for CompTIA, will use default BookOpen
  },
];

const CertificatesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4 sm:p-8 w-full max-w-5xl mx-auto bg-pattern">
        <div className="flex items-center justify-center mb-10 animate-fadeIn">
          <Award className="h-10 w-10 text-primary mr-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground text-center">
            My Certificates
          </h1>
        </div>
        <CertificatesSection certificates={certificates} />
        <UpcomingCertificationsSection upcomingCertificates={upcomingCertificates} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default CertificatesPage;