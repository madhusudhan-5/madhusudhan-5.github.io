import { useEffect, useRef, useState } from "react";

export const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "Team Leader",
      company: "i-exceed technology solutions private limited",
      period: "April 2025 - Present",
      location: "Bangalore, India",
      borderColor: "border-primary",
      companyColor: "text-accent",
      description: [
        "Directed cross-functional teams in resolving critical production issues and conducting in-depth root cause analyses, contributing to the stability and reliability of banking systems.",
        "Championed architectural design for application scalability and ensured rigorous compliance with banking security standards and regulatory frameworks, guaranteeing long-term solution viability."
      ],
      technologies: ["Team Management", "Application System Design", "Business Techno Functional Analysis", "React JS", "Python", "Django"]
    },
    {
      title: "Senior Software Engineer",
      company: "i-exceed technology solutions private limited",
      period: "April 2024 - April 2025",
      location: "Bangalore, India",
      borderColor: "border-primary",
      companyColor: "text-primary",
      description: [
        "Led end-to-end application development for UAE banking sector, from client requirement gathering to deployment",
        "Managed and improved security by implementing VAPT enhancements for banking applications",
        "Collaborated with cross-functional teams to resolve production issues and conduct root cause analysis",
        "Ensured application scalability and compliance with banking security standards"
      ],
      technologies: ["React JS", "Java", "Python", "Team Leadership"]
    },
    {
      title: "Software Engineer",
      company: "i-exceed technology solutions private limited",
      period: "April 2022 - March 2024",
      location: "Bangalore, India",
      borderColor: "border-secondary",
      companyColor: "text-secondary",
      description: [
        "Developed and enhanced core banking modules including authentication and CRUD operations",
        "Handled key application modules independently, ensuring performance and reliability",
        "Developed BIRT reports using Java, Eclipse, and SQL Server",
        "Provided product-level support and debugging for Appzillon IDE"
      ],
      technologies: ["JavaScript", "Python", "Django", "Java", "SQL", "BIRT Reports"]
    },
    {
      title: "Software Developer",
      company: "Gaugework Technologies",
      period: "November 2021 - April 2022",
      location: "Bangalore, India",
      borderColor: "border-accent",
      companyColor: "text-accent",
      description: [
        "Developed multi-brand car service platform and e-commerce sites",
        "Created 10+ corporate, portfolio, and WordPress sites across various industries",
        "Implemented authentication, session management, and dynamic UI components",
        "Worked on projects spanning retail, medical, education, travel, and jewelry sectors"
      ],
      technologies: ["Django", "WordPress", "E-commerce", "UI/UX"]
    },
    {
      title: "Trainee",
      company: "EmuPro Consulting Private Limited",
      period: "February 2021 - October 2021",
      location: "Bangalore, India",
      borderColor: "border-primary",
      companyColor: "text-primary",
      description: [
        "Developed company website and internal career portal",
        "Built internal IDE project using Python Tkinter and PyQt5",
        "Created file handling tasks and data visualization tools",
        "Designed application workflows for efficient data processing"
      ],
      technologies: ["Python", "Tkinter", "PyQt5", "Django"]
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in ${isVisible ? 'visible' : ''} font-space`}>
            Experience
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
            My journey in software development, design and team leadership
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border-l-4 ${exp.borderColor}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className={`${exp.companyColor} font-semibold`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <p className="font-medium">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <p key={i}>• {item}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
