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
              디자인이 의도한 ‘즐거운 경험’이 화면 위에서 멈추지 않고, 사용자의
              손끝에서 완성되기를 바랐습니다. 이것이 제가 마우스를 내려놓고 코드
              작성을 시작한 이유입니다. 산업디자인 학부에서 UX/UI를 전공하며
              체득한 사용자 중심 사고는 제 개발 철학의 근간입니다. 단순히
              시각적으로 아름다운 레이아웃에 머물지 않고, 그 미학이 논리적인
              기능으로 치환되는 순간의 희열에 집중합니다. 정적인 시안이 생동감
              있게 움직이는 인터랙션으로 변하는 과정을 즐기며, 디자인 시스템의
              일관성이 코드의 재사용성으로 이어지는 구조적인 설계를 지향합니다.
              복잡한 데이터를 직관적인 화면으로 치환하고, 사용자의 손끝에 닿는
              모든 반응을 정교하게 제어하는 일. 디자인의 감각과 개발의 논리라는
              두 언어를 자유롭게 오가며, 설계부터 구현까지 일관된 가치를
              전달하는 '꼭 사용하고 싶은 도구'를 만들겠습니다.
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
