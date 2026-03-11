import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowUp } from "lucide-react";
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
    <footer className="border-t border-gray-200/80 bg-gray-50/80 py-12 md:py-16">
      <div className="section-content">
        <div className="flex flex-col items-center gap-8">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="rounded-full h-11 w-11 p-0 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
            aria-label="맨 위로"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.href, "_blank")}
                className="h-10 w-10 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
