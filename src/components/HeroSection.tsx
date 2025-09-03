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
              <span className="text-green-600">김민준</span>입니다.
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8">
              주니어 프론트엔드 개발자
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              사용자에게 즐거움을 주는 인터랙티브하고 반응형 웹 애플리케이션을
              만드는 것에 열정을 가지고 있습니다. 사용자 중심의 디자인과 최신
              기술을 결합하여, 단순히 기능하는 것을 넘어, 아름답고 직관적인
              경험을 제공하는 것을 목표로 합니다.
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
