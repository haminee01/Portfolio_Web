import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = ["SQLD", "정보처리기사"];

  const skills = [
    // 프론트엔드
    { name: "TypeScript", category: "프론트엔드" },
    { name: "JavaScript", category: "프론트엔드" },
    { name: "TanStack Query", category: "프론트엔드" },
    { name: "Zustand", category: "프론트엔드" },
    { name: "STOMP (WebSocket)", category: "프론트엔드" },
    { name: "Tailwind CSS", category: "프론트엔드" },
    { name: "Bootstrap", category: "프론트엔드" },
    { name: "Axios", category: "프론트엔드" },
    { name: "CSS", category: "프론트엔드" },
    // 백엔드
    { name: "Prisma", category: "백엔드" },
    { name: "MySQL", category: "백엔드" },
    { name: "REST API", category: "백엔드" },
    { name: "JWT Authentication", category: "백엔드" },
    // 프레임워크
    { name: "Next.js", category: "프레임워크" },
    { name: "React", category: "프레임워크" },
    { name: "Node.js", category: "프레임워크" },
    { name: "Express", category: "프레임워크" },
    // 디자인
    { name: "Figma", category: "디자인" },
    { name: "XD", category: "디자인" },
    { name: "Photoshop", category: "디자인" },
    { name: "Illustrator", category: "디자인" },
    { name: "Rhino", category: "디자인" },
    { name: "KeyShot", category: "디자인" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
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
      case "자격증":
        return "bg-violet-100 text-violet-800 border-violet-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const categories = ["프론트엔드", "백엔드", "프레임워크", "디자인", "자격증"];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-gray-50/80"
    >
      <div className="section-content">
        <div
          className={`transition-all duration-700 transform ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title">기술 스택</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((category) => (
              <div
                key={category}
                className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-5 text-center">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category === "자격증"
                    ? certifications.map((cert, index) => (
                        <div
                          key={cert}
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
                            className={getCategoryColor("자격증")}
                          >
                            {cert}
                          </Badge>
                        </div>
                      ))
                    : skills
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
    </section>
  );
};

export default SkillsSection;
