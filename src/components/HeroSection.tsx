import { Button } from "@/components/ui/button";
import { Mail, Github, FileText, ExternalLink } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const HeroSection = () => {
  const contactLinks = [
    {
      label: "이메일",
      icon: Mail,
      href: "mailto:developer@example.com",
      variant: "default" as const,
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com",
      variant: "outline" as const,
    },
    {
      label: "블로그",
      icon: ExternalLink,
      href: "https://blog.example.com",
      variant: "outline" as const,
    },
    {
      label: "이력서",
      icon: FileText,
      href: "/resume.pdf",
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-glow-primary animate-float">
              <img
                src={developerPortrait}
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl -z-10" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-right">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              안녕하세요, 저는{" "}
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                김민준
              </span>
              입니다
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              현대적인 기술로 아름답고 반응형 웹 경험을 만드는 것에 열정을 가진
              주니어 프론트엔드 개발자입니다.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {contactLinks.map((link) => (
                <Button
                  key={link.label}
                  variant={link.variant}
                  size="lg"
                  onClick={() => window.open(link.href, "_blank")}
                  className="group transition-all duration-300 hover:scale-105 hover:shadow-glow-accent"
                >
                  <link.icon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;