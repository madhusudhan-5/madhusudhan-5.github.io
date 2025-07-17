import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  // Replace this with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeKxcF2ASOlpuCeDpKCzYIlVKZtcJ-vwZQE2zD8fvsWAhQ7IA/viewform";
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in ${isVisible ? 'visible' : ''} font-space`}>
            Get In Touch
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">madhusudhan.smp@outlook.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91 8951070251</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/madhusudhan-5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/madhusudhan-m-9392761a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:madhusudhan.smp@outlook.com"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="tel:+918951070251"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Ready to discuss your project? Click the button below to fill out a contact form and I'll get back to you soon.
              </p>
              <Button
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Contact Me via Form
              </Button>

              {/* <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>To set up your form:</strong> Create a Google Form and replace the URL in the code with your form's link.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
