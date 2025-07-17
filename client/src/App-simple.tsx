import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Sun, Moon, ExternalLink } from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=sf_link";

  const handleContactClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Madhusudhan M
            </h1>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-purple-600 text-lg mb-4">Hello, I'm</h2>
              <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Madhusudhan M
              </h1>
              <div className="text-3xl text-gray-600 dark:text-gray-300 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  Team Lead
                </span> at Finance Solutions &{" "}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I craft responsive websites and applications where technologies meet creativity. 
                Specializing in web development, product design for SaaS, and AI integration with 3+ years of experience.
              </p>
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium"
                >
                  Learn More
                </button>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/madhusudhan-5" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://linkedin.com/in/madhusudhan-m-9392761a6" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="mailto:madhusudhan.smp@outlook.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="tel:+918951070251" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-2xl">
                <img
                  src="/attached_assets/image_1752346295675.png"
                  alt="Madhusudhan M"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Passionate about creating digital solutions that bridge technology and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Full Stack Developer & Team Lead
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                With 3+ years of experience in software development, I currently lead a team at a finance solutions company, 
                focusing on creating robust banking applications for UAE markets including National Bank of Fujairah and First Abu Dhabi Bank.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As a freelancer, I specialize in developing and designing websites, applications, and providing architectural 
                solutions for SaaS products. I'm passionate about integrating AI technologies to create innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React JS", "Python", "Django", "Fast API", "JavaScript", "AWS", "Team Leadership"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Development workspace"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in software development and team leadership
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                title: "Senior Software Engineer",
                company: "i-exceed technology solutions private limited",
                period: "April 2024 - Present",
                description: "Led end-to-end application development for UAE banking sector, managed VAPT improvements, and collaborated with cross-functional teams."
              },
              {
                title: "Software Engineer",
                company: "i-exceed technology solutions private limited",
                period: "April 2022 - March 2024",
                description: "Developed core banking modules, handled authentication systems, and provided product-level support for Appzillon IDE."
              },
              {
                title: "Software Developer",
                company: "Gaugework Technologies",
                period: "November 2021 - April 2022",
                description: "Developed multi-brand car service platform and e-commerce sites, created 10+ corporate websites across various industries."
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-purple-600 font-semibold">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive development and design solutions for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Full-stack web applications using modern technologies like React, Python, and Django with responsive design."
              },
              {
                title: "Application Design",
                description: "Custom application development and redesign with focus on user experience and modern UI principles."
              },
              {
                title: "Product Design for SaaS",
                description: "Strategic product design and architectural solutions for SaaS platforms with scalable design systems and user-centric approach."
              },
              {
                title: "AI Integration",
                description: "Innovative AI solutions and integrations to enhance your applications with intelligent features."
              },
              {
                title: "Team Management",
                description: "Technical leadership and project management for development teams with agile methodologies."
              },
              {
                title: "Cloud Solutions",
                description: "AWS cloud architecture and deployment solutions with security and scalability in mind."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">madhusudhan.smp@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91 8951070251</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Ready to discuss your project? Click the button below to fill out a contact form and I'll get back to you soon.
              </p>
              
              <button
                onClick={handleContactClick}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Contact Me via Form
              </button>
              
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>To set up your form:</strong> Create a Google Form and replace the URL in the code with your form's link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Madhusudhan M
          </h3>
          <p className="text-gray-400 mb-6">Full Stack Developer & Team Lead</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/madhusudhan-5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/madhusudhan-m-9392761a6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:madhusudhan.smp@outlook.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+918951070251" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">&copy; 2024 Madhusudhan M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;