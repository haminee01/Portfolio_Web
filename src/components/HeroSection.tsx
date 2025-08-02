import { Button } from "@/components/ui/button";
import { Mail, Github, FileText, ExternalLink } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const HeroSection = () => {
  const contactLinks = [
    {
      label: "Email",
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
      label: "Blog",
      icon: ExternalLink,
      href: "https://blog.example.com",
      variant: "outline" as const,
    },
    {
      label: "Resume",
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
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Junior Front-End Developer passionate about creating beautiful,
              responsive web experiences with modern technologies.
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