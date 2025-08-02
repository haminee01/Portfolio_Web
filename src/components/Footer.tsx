import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com",
    },
    {
      label: "이메일",
      icon: Mail,
      href: "mailto:developer@example.com",
    },
    {
      label: "블로그",
      icon: ExternalLink,
      href: "https://blog.example.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to top */}
          <Button
            variant="outline"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              맨 위로
            </Button>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.href, "_blank")}
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center">
              <Heart className="h-4 w-4 mx-1 text-red-500" />와 함께 김민준이 제작
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} 모든 권리 보유.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;