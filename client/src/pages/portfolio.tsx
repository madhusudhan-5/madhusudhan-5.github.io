import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 theme-transition">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient font-space">
              Madhusudhan M
            </h3>
            <p className="text-gray-400 mb-6">Full Stack Developer & Team Lead</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/madhusudhan-5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/madhusudhan-m-9392761a6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:madhusudhan.smp@outlook.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+918951070251"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">&copy; 2020 Madhusudhan M. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
