import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              About Me
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.open("https://github.com", "_blank")}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              GitHub
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => scrollToSection("about")}
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;