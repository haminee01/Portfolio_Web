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
      href: "/resume/resume.pdf",
      variant: "outline" as const,
    },
    {
      label: "자기소개서",
      icon: FileText,
      href: "/resume/self-introduction.pdf",
      variant: "outline" as const,
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white relative overflow-hidden pt-28 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              디자인의 언어를 논리적인 인터페이스로 완결짓는 개발자
              <br />
              <span className="text-green-600">이하민</span>입니다.
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-8">
              프론트엔드 개발자 / UXUI 디자이너
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              산업디자인 전공의 사용자 중심 사고를 바탕으로, 시각적 미학을
              논리적인 코드로 구현하는 데 가치를 둡니다. 디자인 시스템의
              일관성을 재사용 가능한 구조로 설계하며, 감각과 논리를 연결해
              사용자가 신뢰하고 즐길 수 있는 도구를 지향합니다.
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
