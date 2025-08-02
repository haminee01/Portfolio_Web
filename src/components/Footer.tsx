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
      label: "Email",
      icon: Mail,
      href: "mailto:developer@example.com",
    },
    {
      label: "Blog",
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
            Back to Top
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
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Alex Johnson
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;