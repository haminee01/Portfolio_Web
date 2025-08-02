import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Download } from "lucide-react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "넷플릭스 클론",
      description: "사용자 인증, 영화 탐색, 비디오 스트리밍 기능을 갖춘 완전 반응형 넷플릭스 클론입니다.",
      technologies: ["React", "TypeScript", "Firebase", "CSS3"],
      duration: "3개월",
      teamSize: "개인 프로젝트",
      status: "완료",
      link: "https://github.com/example/netflix-clone"
    },
    {
      id: 2,
      title: "도서 관리 시스템",
      description: "CRUD 기능, 검색 기능, 사용자 리뷰를 포함한 협업 도서 관리 애플리케이션입니다.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "2개월",
      teamSize: "4명의 개발자",
      status: "완료",
      link: "https://github.com/example/book-management"
    },
    {
      id: 3,
      title: "전자상거래 플랫폼",
      description: "장바구니, 결제 연동, 관리자 대시보드를 갖춘 현대적인 전자상거래 솔루션입니다 (곧 출시).",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      duration: "1개월",
      teamSize: "개인 프로젝트",
      status: "진행중",
      link: "#"
    }
  ];

  const activities = [
    {
      title: "UX/UI 디자인 팀 프로젝트",
      description: "대학 재학 중 디자인 팀과 협업하여 다양한 클라이언트 프로젝트를 위한 사용자 중심 디자인 솔루션을 제작했습니다.",
      achievements: ["사용자 리서치 및 테스트 수행", "와이어프레임 및 프로토타입 제작", "반응형 인터페이스 디자인"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 스크롤 위치에 따라 실시간으로 상태 변경
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
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
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-section-gradient"
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
            포트폴리오 & 프로젝트
          </h2>

          {/* Portfolio PDF Download */}
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              포트폴리오 PDF 다운로드
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 transform ${
                  isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-[-20px]"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge
                    variant="outline"
                    className={getStatusColor(project.status)}
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    기간: {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    팀: {project.teamSize}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(project.link, "_blank")}
                  disabled={project.link === "#"}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  {project.link === "#" ? "곧 출시" : "프로젝트 보기"}
                </Button>
              </div>
            ))}
          </div>

          {/* Activities Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              추가 활동
            </h3>
            
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 transform ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? `${600 + index * 200}ms` : '0ms' }}
              >
                <h4 className="text-xl font-semibold mb-4">{activity.title}</h4>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activity.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-center p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
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

export default PortfolioSection;