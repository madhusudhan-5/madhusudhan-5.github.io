import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className={`text-sm font-medium text-primary mb-4 slide-in-left ${isVisible ? 'visible' : ''}`}>
              Hello, I'm
            </h2>
            <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 slide-in-left ${isVisible ? 'visible' : ''} font-space`} style={{transitionDelay: '0.1s'}}>
              Madhusudhan M
            </h1>
            <div className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 slide-in-left ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              {/* <span className="text-gradient font-semibold">Team Lead</span> at Finance Solutions &{" "} */}
              <span className="text-gradient font-semibold">Full Stack Application Developer</span>
            </div>
            <p className={`text-lg text-gray-600 dark:text-gray-300 mb-8 slide-in-left ${isVisible ? 'visible' : ''} max-w-2xl`} style={{transitionDelay: '0.3s'}}>
              I craft responsive websites and applications where technologies meet creativity. Specializing in web development, product design for SaaS, and AI integration with 3+ years of experience.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 slide-in-left ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.4s'}}>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Learn More
              </button>
            </div>
            <div className={`flex items-center space-x-4 mt-8 slide-in-left ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.5s'}}>
              <a
                href="https://github.com/madhusudhan-5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/madhusudhan-m-9392761a6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:madhusudhan.smp@outlook.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="tel:+918951070251"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative floating">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  src="/attached_assets/image_1752346295675.png"
                  alt="Madhusudhan M - Professional Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
