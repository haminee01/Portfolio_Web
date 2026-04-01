import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Mail } from "lucide-react";
import NaverBlogIcon from "@/components/icons/NaverBlogIcon";

const Footer = () => {
  const socialLinks = [
    { label: "GitHub", icon: Github, href: "https://github.com/haminee01" },
    { label: "이메일", icon: Mail, href: "mailto:gkmin22@gmail.com" },
    {
      label: "블로그",
      icon: NaverBlogIcon,
      href: "https://blog.naver.com/higkmin",
    },
  ];

  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="section-shell">
        <div className="flex flex-col items-center gap-6 text-center">
          <Button
            variant="ghost"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="h-11 w-11 rounded-full border border-border bg-muted/40 text-foreground hover:bg-muted"
            aria-label="맨 위로"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.href, "_blank")}
                className="h-11 w-11 rounded-xl border border-border bg-muted/30 text-foreground transition-transform hover:-translate-y-0.5 hover:bg-muted"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 이하민
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
