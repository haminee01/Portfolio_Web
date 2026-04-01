import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("프론트엔드");
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
    { name: "Cursor AI", category: "프레임워크" },
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

  const categories = ["프론트엔드", "백엔드", "프레임워크", "디자인", "자격증"];
  const activeItems =
    activeCategory === "자격증"
      ? certifications
      : skills
          .filter((skill) => skill.category === activeCategory)
          .map((skill) => skill.name);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="border-t border-border pt-0 pb-0"
    >
      <div
        className={`transition-all duration-700 transform ${
          isVisible
            ? "animate-scale-in opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative left-1/2 w-[calc(100vw-10px)] -translate-x-1/2 rounded-md border border-[#d0d0d0] bg-[#efefef] px-5 py-6 sm:w-[calc(100vw-14px)] sm:px-7 md:w-[calc(100vw-18px)] md:px-8 md:py-7 lg:w-[calc(100vw-24px)]">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="section-title mb-5">기술 스택</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onMouseEnter={() => setActiveCategory(category)}
                      onFocus={() => setActiveCategory(category)}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? "border-black bg-[#E5E5E5] text-[#111111]"
                          : "border-black bg-white text-[#0f2418] hover:bg-[#f3f3f3]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-md border border-black bg-[#f7f7f7] p-4 md:p-5 min-h-[170px]">
                <h3 className="mb-3 border-b border-black/20 pb-2 text-sm font-bold uppercase tracking-wide text-foreground">
                  {activeCategory}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {activeItems.map((item, index) => (
                    <div
                      key={item}
                      className={`transform transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-[-20px]"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 70}ms` : "0ms",
                      }}
                    >
                      <Badge
                        variant="outline"
                        className="rounded-md border-black bg-white px-2.5 py-1 text-[13px] font-semibold text-[#0f2418]"
                      >
                        {item}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
