// src/components/Navigation.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

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
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-xl font-bold text-green-700">
            <Link className="w-6 h-6" />
            <span>포트폴리오</span>
          </div>

          <div className="hidden md:flex space-x-1">
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors"
            >
              자기소개
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors"
            >
              기술 스택
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors"
            >
              포트폴리오
            </Button>
            <Button
              onClick={() => window.open("https://github.com", "_blank")}
              className="bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              GitHub
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            메뉴
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
