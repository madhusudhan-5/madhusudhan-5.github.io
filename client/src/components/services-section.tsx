import { useEffect, useRef, useState } from "react";
import { Code, Smartphone, Palette, Brain, Users, Cloud } from "lucide-react";

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Python, and Django with responsive design.",
      features: ["React JS & JavaScript Development", "Python & Django Backend", "Responsive Design", "Database Integration"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Application Design",
      description: "Custom application development and redesign with focus on user experience and modern UI principles.",
      features: ["UI/UX Design", "Application Redesign", "Cross-platform Development", "Performance Optimization"],
      color: "secondary"
    },
    {
      icon: Palette,
      title: "Product Design for SaaS",
      description: "Strategic product design and architectural solutions for SaaS platforms with scalable design systems and user-centric approach.",
      features: ["SaaS Product Architecture", "Design System Creation", "User Journey Mapping", "Scalable Solutions", "UI/UX Research", "Prototype Development"],
      color: "accent"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Innovative AI solutions and integrations to enhance your applications with intelligent features.",
      features: ["AI-powered Features", "Machine Learning Integration", "Automation Solutions", "Data Analytics"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Technical leadership and project management for development teams with agile methodologies.",
      features: ["Technical Leadership", "Project Management", "Code Reviews", "Agile Methodologies"],
      color: "secondary"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS cloud architecture and deployment solutions with security and scalability in mind.",
      features: ["AWS Deployment", "Cloud Architecture", "Security Implementation", "Performance Optimization"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      case "accent":
        return "bg-accent/10 text-accent";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in ${isVisible ? 'visible' : ''} font-space`}>
            Services
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
            Comprehensive development and design solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${getColorClasses(service.color)} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                {service.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
