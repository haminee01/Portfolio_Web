import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChartNoAxesCombined } from "lucide-react";

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
    <section ref={sectionRef} className="border-t border-border pt-0 pb-0">
      <div
        className={`transition-all duration-700 transform ${
          isVisible
            ? "animate-scale-in opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative mx-auto w-full max-w-[calc(100vw-10px)] rounded-md border border-[#d0d0d0] bg-[#efefef] px-5 py-8 sm:max-w-[calc(100vw-14px)] sm:px-7 md:max-w-[calc(100vw-18px)] md:px-8 md:py-10 lg:left-1/2 lg:w-[calc(100vw-24px)] lg:max-w-none lg:-translate-x-1/2">
          <div className="pointer-events-none absolute -left-16 top-6 h-44 w-44 rounded-full bg-[#24D164]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-6 h-52 w-52 rounded-full bg-white/70 blur-3xl" />
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-3 flex items-center justify-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-1 text-xs font-semibold text-[#12271b]">
                <Sparkles className="h-3.5 w-3.5" />
                Skill Architecture
              </p>
            </div>
            <h2
              id="skills"
              tabIndex={-1}
              className="section-title mb-5 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 focus:outline-none"
            >
              기술 스택
            </h2>
            {/* <p className="mx-auto mb-5 max-w-2xl text-center text-sm leading-relaxed text-[#38433d]">
              단순 나열보다 실제 프로젝트 적용 맥락을 기준으로 스택을 분류해
              탐색성과 이해도를 높였습니다.
            </p> */}
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
                      className={`rounded-md border px-4 py-2 text-sm font-semibold transition-all ${
                        isActive
                          ? "border-black bg-[#E5E5E5] text-[#111111] shadow-sm"
                          : "border-black bg-white text-[#0f2418] hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[170px] rounded-md border border-black bg-[#f7f7f7] px-4 py-5 md:px-5 md:py-6">
                <div className="mb-3 flex items-center justify-between border-b border-black/20 pb-2">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                    {activeCategory}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4a4a4a]">
                    <ChartNoAxesCombined className="h-3.5 w-3.5" />
                    {activeItems.length}개 항목
                  </span>
                </div>
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
                        className="rounded-md border-black bg-white px-2.5 py-1 text-[13px] font-semibold text-[#0f2418] transition-colors hover:bg-[#24D164]/10"
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
