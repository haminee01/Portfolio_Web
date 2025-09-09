import { Button } from "@/components/ui/button";
import { Mail, Github, FileText, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const contactLinks = [
    {
      label: "이메일",
      icon: Mail,
      href: "mailto:gkmin22@gmail.com",
      variant: "outline" as const,
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/haminee01",
      variant: "outline" as const,
    },
    {
      label: "블로그",
      icon: ExternalLink,
      href: "https://blog.naver.com/higkmin",
      variant: "outline" as const,
    },
    {
      label: "이력서",
      icon: FileText,
      href: "/resume.pdf",
      variant: "outline" as const,
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white relative overflow-hidden pt-28 pb-8">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4">
              안녕하세요, 저는
              <br />
              <span className="text-green-600">이하민</span>입니다.
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8">
              프론트엔드 개발자 / UXUI 디자이너
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              디자인을 통해 '진정한 즐거움'을 전달하는 것에 깊이 매료되어,
              미적인 아름다움을 넘어 사용자와 상호작용하는 웹 개발 분야에
              도전했습니다. 산업 디자인과에서 UX/UI를 전공하며 쌓은 사용자 중심
              사고와 디자인적 시각에, 프론트엔드 개발 지식을 더해 시너지를
              창출하고 있습니다. 대학 진학 도중 독학으로 Html, CSS, JavaScript,
              React를 공부했고, 비전공자라는 벽을 깨기 위해 2개의 자격증을
              취득했습니다. 매일 꾸준히 학습하고 기록하며 성장하는 습관을 통해,
              부트캠프에서도 기초를 탄탄히 다지며 실력을 향상시킬 수 있었습니다.
              현재는 디자인적 감각과 논리적 개발 지식을 결합한 실전형
              포트폴리오를 제작하고 있습니다. 사용자의 경험을 디자인하고, 이를
              기술로 구현하는 프론트엔드 개발자로서 꾸준히 배우고 성장하며
              긍정적인 영향력을 만들어나가고 싶습니다.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {contactLinks.map((link) => (
                <Button
                  key={link.label}
                  variant={link.variant}
                  size="lg"
                  onClick={() => window.open(link.href, "_blank")}
                  className="group rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-500 hover:text-white"
                >
                  <link.icon className="mr-2 h-5 w-5" />
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 animate-float">
            <img 
                src="/path/to/your-portrait-image.jpg" 
                alt="김민준 개발자 초상화" 
                className="w-full h-full object-cover" 
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
