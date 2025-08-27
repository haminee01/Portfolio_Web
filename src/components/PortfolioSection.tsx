import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Download } from "lucide-react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
    null
  );

  const projects = [
    {
      id: 1,
      title: "넷플릭스 클론",
      description:
        "사용자 인증, 영화 탐색, 비디오 스트리밍 기능을 갖춘 반응형 웹 애플리케이션입니다.",
      technologies: ["React", "TypeScript", "Firebase", "CSS3"],
      duration: "3개월",
      teamSize: "개인 프로젝트",
      status: "완료",
      link: "https://github.com/example/netflix-clone",
      details:
        "넷플릭스 UI/UX를 모방하여 프론트엔드 기술을 심화 학습했습니다. 상태 관리와 API 연동에 중점을 두었습니다.",
      image: "/path/to/netflix-clone-image.png",
    },
    {
      id: 2,
      title: "도서 관리 시스템",
      description:
        "CRUD 기능, 검색, 사용자 리뷰를 포함한 협업 도서 관리 시스템입니다.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "2개월",
      teamSize: "4명의 개발자",
      status: "완료",
      link: "https://github.com/example/book-management",
      details:
        "백엔드 개발자와 협업하여 RESTful API를 설계하고, 사용자들이 도서 정보를 공유할 수 있는 플랫폼을 만들었습니다. 사용자 경험을 개선하기 위한 디자인 시스템을 구축했습니다.",
      image: "/path/to/book-management-image.png",
    },
    {
      id: 3,
      title: "전자상거래 플랫폼",
      description:
        "장바구니, 결제 연동, 관리자 대시보드를 갖춘 현대적인 솔루션입니다.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      duration: "1개월",
      teamSize: "개인 프로젝트",
      status: "진행중",
      link: "#",
      details:
        "Next.js의 서버 컴포넌트와 SSR 기능을 활용하여 SEO 친화적인 플랫폼을 개발 중입니다. 특히 결제 시스템 연동과 보안에 초점을 맞추고 있습니다.",
      image: "/path/to/e-commerce-image.png",
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
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "완료":
        return "bg-green-100 text-green-800 border-green-200";
      case "진행중":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
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
                className={`bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-500 transform border border-gray-200 ${
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
                      className="bg-green-100 text-green-700 border-green-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.link, "_blank")}
                  disabled={project.link === "#"}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {project.link === "#" ? "곧 출시" : "프로젝트 보기"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
