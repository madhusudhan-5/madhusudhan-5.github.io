import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
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

  const skills = [
    { name: "React JS & JavaScript", level: 90 },
    { name: "Python & Django", level: 85 },
    { name: "AWS & Cloud", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "Team Management", level: 85 },
    { name: "AI Integration", level: 70 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in ${isVisible ? 'visible' : ''} font-space`}>
            About Me
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
            Passionate about creating digital solutions that bridge technology and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Developer & Team Lead
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With 3+ years of experience in software development, I currently lead a team at a finance solutions company, 
              focusing on creating robust banking applications for UAE markets including National Bank of Fujairah and First Abu Dhabi Bank.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a freelancer, I specialize in developing and designing websites, applications, and providing architectural 
              solutions for SaaS products. I'm passionate about integrating AI technologies to create innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React JS", "Python", "Django", "Fast API", "JavaScript", "AWS", "Team Leadership"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern development workspace"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center fade-in ${isVisible ? 'visible' : ''} font-space`}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`space-y-2 fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="skill-bar h-2 rounded-full"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
