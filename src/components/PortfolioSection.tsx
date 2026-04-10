import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Download, Github } from "lucide-react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "넷플릭스 클론",
      description:
        "JS->TS 마이그레이션 경험 프로젝트 / 영화 데이터를 검색하고, 탐색하며, 상세 정보를 확인할 수 있는 넷플릭스 클론 웹 애플리케이션",
      technologies: ["React", "JavaScript", "TypeScript", "Bootstrap", "CSS"],
      duration: "3개월",
      teamSize: "개인 프로젝트",
      status: "프론트엔드",
      link: "https://github.com/haminee01/Project_NetflixClone.git",
      deployLink: "https://project-netf-clone.netlify.app/",
      portfolioLink: "/portfolios/netflix-clone.pdf",
      details:
        "넷플릭스 UI/UX를 모방하여 프론트엔드 기술을 심화 학습했다. 상태 관리와 API 연동에 중점을 두었다.",
      image: "/images/NetflixClone.png",
    },
    {
      id: 2,
      title: "BookDam",
      description:
        "CRUD 기능, 검색, 사용자 리뷰를 포함한 협업 도서 관리 시스템. 독서 취향을 기반으로, 익명으로 자유롭게 소통하며 깊이 있는 독서 경험을 만들어가는 커뮤니티 플랫폼",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
        "REST API",
        "JWT Authentication",
      ],
      duration: "3주",
      teamSize: "4명의 개발자",
      status: "백엔드",
      link: "https://github.com/haminee01/Project_BookDam.git",
      deployLink: "/video/BookDam_video.mp4",
      portfolioLink: "/portfolios/BookDam.pdf",
      details:
        "Node.js, TypeScript, Express, Prisma를 기반으로 한 Layered Architecture 설계 및 RESTful API 구현.",
      image: "/images/bookdam_book.png",
    },
    {
      id: 3,
      title: "CafeOn",
      description:
        "상황과 분위기에 맞는 최적의 카페를 추천하고, AI 기반 정보 요약과 실시간 커뮤니티 기능으로 사용자의 탐색 비용을 제로에 가깝게 만들고자하는 지능형 카페 큐레이션 플랫폼",
      technologies: [
        "Next.js & React",
        "TypeScript",
        "React Query",
        "Zustand",
        "STOMP(WebSocket)",
        "Tailwind CSS",
        "Axios",
      ],
      duration: "1개월 2주",
      teamSize: "4명의 개발자",
      status: "프론트엔드",
      link: "https://github.com/haminee01/Project_CafeOn.git",
      deployLink: "/video/CafeOn_video.mp4",
      portfolioLink: "/portfolios/CafeOn.pdf",
      details:
        "Zustand와 STOMP.js를 활용한 실시간 통신 환경에서, Fail-Fast 원칙의 에러 핸들링과 정교한 상태 동기화 로직으로 데이터 정합성을 확보한 견고한 프론트엔드 시스템 구축",
      image: "/images/cafeon_cafe.png",
    },
    {
      id: 4,
      title: "MindGrid",
      description:
        "AI 마인드맵을 화이트보드에서 작성·편집할 수 있는 웹 서비스로, 펜/형광펜/지우개/텍스트 도구를 제공하며 보드 저장·불러오기는 로그인 후 이용 가능하다.",
      technologies: [
        "Next.js & React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "React Query",
        "Konva",
        "Supabase",
        "OpenAI API",
        "Cursor AI",
      ],
      duration: "1개월",
      teamSize: "개인 프로젝트",
      status: "프론트엔드",
      link: "https://github.com/haminee01/AI-board.git",
      deployLink: "https://mindgrid-steel.vercel.app/",
      portfolioLink: null,
      details:
        "AI 마인드맵 기능을 핵심으로 하며, 화이트보드 기반 편집 도구를 제공하고 로그인 상태에서 보드 저장/불러오기를 지원해 데이터 흐름을 안전하게 구성했다.",
      image: "/images/mindgrid.png",
    },
    {
      id: 5,
      title: "BUFF",
      description:
        "데이터 기반 게임 코칭 경험을 UXUI 관점에서 재설계한 포트폴리오 프로젝트로, 핵심 지표를 빠르게 스캔하고 다음 행동으로 이어지도록 정보 구조와 인터랙션을 설계했다.",
      technologies: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
        "Supabase",
        "Google Gemini API",
        "Vercel",
      ],
      duration: "약 3주",
      teamSize: "개인 프로젝트",
      status: "UXUI · 프론트엔드",
      link: "https://github.com/haminee01/Project_Buff.git",
      deployLink: "https://buff-portfolio-nu.vercel.app/",
      portfolioLink: null,
      details:
        "문제 정의 → 정보 우선순위 정렬 → 카드/차트 중심 UI 시스템 구성 → 반응 로그 기반 개선 루프까지 하나의 흐름으로 연결해 코칭 UX를 실전형으로 고도화했다.",
      image: "/images/buff.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "프론트엔드":
        return "bg-[#0f0f0f] text-[#24D164] border-[#24D164]";
      case "백엔드":
        return "bg-[#0f0f0f] text-[#24D164] border-[#24D164]";
      default:
        return "bg-[#0f0f0f] text-[#24D164] border-[#24D164]";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="border-t border-[#6f6f6f] pt-0 pb-10 md:pb-12"
    >
      <div
        className={`transition-all duration-700 transform ${
          isVisible
            ? "animate-scale-in opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative left-1/2 w-[calc(100vw-10px)] -translate-x-1/2 rounded-md border border-[#6f6f6f] bg-[#0b0b0b] px-5 py-6 sm:w-[calc(100vw-14px)] sm:px-7 md:w-[calc(100vw-18px)] md:px-8 md:py-7 lg:w-[calc(100vw-24px)]">
          <div className="mx-auto w-full max-w-6xl">
            <h2
              id="portfolio"
              tabIndex={-1}
              className="pt-4 mb-6 scroll-mt-20 text-center text-3xl font-bold tracking-tight text-white sm:scroll-mt-24 md:scroll-mt-28 md:text-4xl focus:outline-none"
            >
              프로젝트 & 활동
            </h2>

            <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex flex-col overflow-hidden rounded-md border border-[#7a7a7a] bg-[#111111] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
                  }}
                >
                  <div className="aspect-video w-full overflow-hidden border-b border-[#7a7a7a] bg-[#161616]">
                    <img
                      src={project.image}
                      alt={`${project.title} 프로젝트 이미지`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`shrink-0 rounded-md text-xs font-semibold ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-[#d2d2d2] break-keep">
                      {project.description}
                    </p>

                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-xs text-[#b3b3b3]">
                        <Clock className="mr-2 h-3.5 w-3.5 shrink-0" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-xs text-[#b3b3b3]">
                        <Users className="mr-2 h-3.5 w-3.5 shrink-0" />
                        {project.teamSize}
                      </div>
                    </div>

                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="rounded-md border-[#24D164] bg-[#0f0f0f] text-xs font-semibold text-[#24D164]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-2">
                      {project.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-md border-[#7a7a7a] bg-[#0f0f0f] text-white transition-colors hover:border-[#24D164] hover:bg-[#24D164] hover:text-[#0b1a11]"
                          onClick={() => window.open(project.link, "_blank")}
                          disabled={project.link === "#"}
                        >
                          <Github className="mr-2 h-3.5 w-3.5" />
                          {project.link === "#" ? "곧 출시" : "GitHub"}
                        </Button>
                      )}
                      {project.deployLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-md border-[#7a7a7a] bg-[#0f0f0f] text-white transition-colors hover:border-[#24D164] hover:bg-[#24D164] hover:text-[#0b1a11]"
                          onClick={() =>
                            window.open(project.deployLink, "_blank")
                          }
                        >
                          <ExternalLink className="mr-2 h-3.5 w-3.5" />
                          {project.deployLink.endsWith(".mp4")
                            ? "시연 영상"
                            : "배포 사이트"}
                        </Button>
                      )}
                      {project.portfolioLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-md border-[#7a7a7a] bg-[#0f0f0f] text-white transition-colors hover:border-[#24D164] hover:bg-[#24D164] hover:text-[#0b1a11]"
                          onClick={() =>
                            window.open(project.portfolioLink, "_blank")
                          }
                        >
                          <Download className="mr-2 h-3.5 w-3.5" />
                          포트폴리오 PDF
                        </Button>
                      )}
                    </div>
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

export default PortfolioSection;
