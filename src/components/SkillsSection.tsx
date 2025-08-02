import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "HTML", category: "Frontend", level: "Advanced" },
    { name: "CSS", category: "Frontend", level: "Advanced" },
    { name: "JavaScript", category: "Frontend", level: "Intermediate" },
    { name: "TypeScript", category: "Frontend", level: "Intermediate" },
    { name: "React", category: "Framework", level: "Intermediate" },
    { name: "Next.js", category: "Framework", level: "Beginner" },
    { name: "Figma", category: "Design", level: "Intermediate" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-primary/10 text-primary border-primary/20";
      case "Framework":
        return "bg-accent/10 text-accent border-accent/20";
      case "Design":
        return "bg-secondary text-secondary-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Frontend", "Framework", "Design"].map((category) => (
                <div
                  key={category}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {category}
                  </h3>
                  
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`transform transition-all duration-300 delay-${index * 100} ${
                            isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-20px]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <Badge
                              variant="outline"
                              className={getCategoryColor(category)}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                          
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 delay-${index * 150} ${
                                skill.level === "Advanced"
                                  ? "w-5/6 bg-primary"
                                  : skill.level === "Intermediate"
                                  ? "w-2/3 bg-accent"
                                  : "w-1/2 bg-secondary"
                              } ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                              style={{ transformOrigin: "left" }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;