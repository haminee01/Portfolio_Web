import { Button } from "@/components/ui/button";
import { Github, Mail, Heart, ArrowUp } from "lucide-react";
import NaverBlogIcon from "@/components/icons/NaverBlogIcon";

const Footer = () => {
  const socialLinks = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/haminee01",
    },
    {
      label: "이메일",
      icon: Mail,
      href: "mailto:gkmin22@gmail.com",
    },
    {
      label: "블로그",
      icon: NaverBlogIcon,
      href: "https://blog.naver.com/higkmin",
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
                <link.icon className="h-10 w-10" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
