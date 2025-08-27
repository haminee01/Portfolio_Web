import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = ["SQLD", "정보처리기사"];

  const skills = [
    { name: "HTML5", category: "프론트엔드" },
    { name: "CSS3", category: "프론트엔드" },
    { name: "JavaScript", category: "프론트엔드" },
    { name: "TypeScript", category: "프론트엔드" },
    { name: "React", category: "프레임워크" },
    { name: "Next.js", category: "프레임워크" },
    { name: "Tailwind CSS", category: "프레임워크" },
    { name: "Figma", category: "디자인" },
    { name: "Node.js", category: "백엔드" },
    { name: "Prisma", category: "백엔드" },
    { name: "MySQL", category: "백엔드" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
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
        return "bg-green-100 text-green-800 border-green-200";
      case "프레임워크":
        return "bg-teal-100 text-teal-800 border-teal-200";
      case "디자인":
        return "bg-lime-100 text-lime-800 border-lime-200";
      case "백엔드":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const categories = ["프론트엔드", "백엔드", "프레임워크", "디자인"];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-700 transform ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
              자격증
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 max-w-lg mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="outline"
                    className="bg-gray-100 text-gray-800 border-gray-200"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
            기술 스택
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <div
                  key={category}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
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
                          style={{
                            transitionDelay: isVisible
                              ? `${index * 100}ms`
                              : "0ms",
                          }}
                        >
                          <Badge
                            variant="outline"
                            className={getCategoryColor(category)}
                          >
                            {skill.name}
                          </Badge>
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
