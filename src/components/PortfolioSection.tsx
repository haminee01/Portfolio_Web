import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Download, Github } from "lucide-react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
    null,
  );

  const projects = [
    {
      id: 1,
      title: "넷플릭스 클론",
      description:
        "영화 데이터를 검색하고, 탐색하며, 상세 정보를 확인할 수 있는 넷플릭스 클론 웹 애플리케이션",
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
      portfolioLink: "/portfolios/bookdam_pf.pdf",
      details:
        "Node.js, TypeScript, Express, Prisma를 기반으로 한 Layered Architecture 설계 및 RESTful API 구현.",
      image: "/images/bookdam_book.png",
    },
    {
      id: 3,
      title: "CafeOn",
      description:
        "상황과 분위기에 맞는 최적의 카페를 추천하고, AI 기반 정보 요약과 실시간 커뮤니티 기능으로 사용자의 탐색 비용을 제로에 가깝게 만들고자하는 지능형 카페 큐레이션 플랫폼",
      technologies: ["Next.js", "TypeScript", "STOMP", "Tailwind CSS", "Axios"],
      duration: "1개월 2주",
      teamSize: "4명의 개발자",
      status: "프론트엔드",
      link: "https://github.com/haminee01/Project_CafeOn.git",
      deployLink: "/video/CafeOn_video.mp4",
      portfolioLink: "/portfolios/cafeon_pf.pdf",
      details:
        "Zustand와 STOMP.js를 활용한 실시간 통신 환경에서, Fail-Fast 원칙의 에러 핸들링과 정교한 상태 동기화 로직으로 데이터 정합성을 확보한 견고한 프론트엔드 시스템 구축",
      image: "/images/cafeon_cafe.png",
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
        return "bg-green-100 text-green-800 border-green-200";
      case "백엔드":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-700 transform ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
            프로젝트 & 활동
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-500 transform border border-gray-200 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[-20px]"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                }}
              >
                <div className="bg-white rounded-xl overflow-hidden mb-4 shadow-sm">
                  <img
                    src={project.image}
                    alt={`${project.title} 프로젝트 이미지`}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className={getStatusColor(project.status)}
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-2 h-4 w-4" />
                    기간: {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="mr-2 h-4 w-4" />
                    팀: {project.teamSize}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={
                        project.status === "백엔드"
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-green-100 text-green-700 border-green-200"
                      }
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.link && (
                  <Button
                    variant="outline"
                    className={
                      project.status === "백엔드"
                        ? "w-full group rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                        : "w-full group rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                    }
                    onClick={() => window.open(project.link, "_blank")}
                    disabled={project.link === "#"}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {project.link === "#"
                      ? "곧 출시"
                      : "GitHub 리포지토리 보기"}
                  </Button>
                )}

                {project.deployLink && (
                  <Button
                    variant="outline"
                    className={
                      project.status === "백엔드"
                        ? "w-full group rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 mt-2"
                        : "w-full group rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 mt-2"
                    }
                    onClick={() => window.open(project.deployLink, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.deployLink.endsWith(".mp4")
                      ? "시연 영상 보기"
                      : "배포 사이트 보기"}
                  </Button>
                )}

                {project.portfolioLink && (
                  <Button
                    variant="outline"
                    className={
                      project.status === "백엔드"
                        ? "w-full group rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 mt-2"
                        : "w-full group rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 mt-2"
                    }
                    onClick={() => window.open(project.portfolioLink, "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    포트폴리오 보기
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
