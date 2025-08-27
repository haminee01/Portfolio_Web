import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, Heart, ArrowUp } from "lucide-react";

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
    <footer className="bg-green-100/50 border-t border-green-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 p-0 text-green-600 border border-green-300 hover:bg-green-200 transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-6 h-6" />
          </Button>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.href, "_blank")}
                className="text-green-600 rounded-full hover:bg-green-200 transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>

          <div className="text-center text-green-700">
            <p className="flex items-center justify-center">
              <Heart className="h-4 w-4 mx-1 text-red-500" />와 함께 이하민이
              제작
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
