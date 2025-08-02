import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "HTML", category: "프론트엔드", level: "고급" },
    { name: "CSS", category: "프론트엔드", level: "고급" },
    { name: "JavaScript", category: "프론트엔드", level: "중급" },
    { name: "TypeScript", category: "프론트엔드", level: "중급" },
    { name: "React", category: "프레임워크", level: "중급" },
    { name: "Next.js", category: "프레임워크", level: "초급" },
    { name: "Figma", category: "디자인", level: "중급" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 스크롤 위치에 따라 실시간으로 상태 변경
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "프론트엔드":
        return "bg-primary/10 text-primary border-primary/20";
      case "프레임워크":
        return "bg-accent/10 text-accent border-accent/20";
      case "디자인":
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
          className={`transition-all duration-700 transform ${
            isVisible 
              ? "animate-fade-in opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
            기술 스택
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["프론트엔드", "프레임워크", "디자인"].map((category) => (
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
                          className={`transform transition-all duration-500 ${
                            isVisible 
                              ? "opacity-100 translate-x-0" 
                              : "opacity-0 translate-x-[-20px]"
                          }`}
                          style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
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
                                skill.level === "고급"
                                  ? "w-5/6 bg-primary"
                                  : skill.level === "중급"
                                  ? "w-2/3 bg-accent"
                                  : "w-1/2 bg-secondary"
                              } ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                              style={{ 
                                transformOrigin: "left",
                                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                              }}
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