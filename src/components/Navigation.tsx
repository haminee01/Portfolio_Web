import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Menu, ArrowUpRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const skillsEl = document.getElementById("skills");
      const portfolioEl = document.getElementById("portfolio");

      if (!skillsEl || !portfolioEl) {
        setActiveSection("intro");
        return;
      }

      // 기기별 네브 높이에 맞춰 기준선을 동적으로 계산한다.
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 72;
      const anchorY = navHeight + 16;
      const skillsRect = skillsEl.getBoundingClientRect();
      const portfolioRect = portfolioEl.getBoundingClientRect();

      if (portfolioRect.top <= anchorY) {
        setActiveSection("portfolio");
        return;
      }
      if (skillsRect.top <= anchorY) {
        setActiveSection("skills");
        return;
      }
      setActiveSection("intro");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.focus({ preventScroll: true });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#24D164]/20 shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-b border-transparent backdrop-blur-[2px]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0b0b]/84"
            : "bg-gradient-to-b from-black/28 via-black/8 to-transparent"
        }`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-12 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-70"
        } bg-gradient-to-b from-transparent to-black/12`}
        aria-hidden
      />

      <div className="relative section-shell py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 rounded-xl px-1 py-1 text-left transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl border shadow-sm ${
                isScrolled
                  ? "border-[#24D164]/45 bg-[#132018]/80 text-[#95f5b8]"
                  : "border-[#2f3a33] bg-black/22 text-[#1f3026] backdrop-blur-md"
              }`}
            >
              <Link2 className="h-4 w-4" aria-hidden />
            </span>
            <span
              className={`hidden text-sm font-bold leading-tight sm:block ${
                isScrolled ? "text-white" : "text-[#172019]"
              }`}
            >
              포트폴리오
              <span
                className={`block text-[11px] font-medium ${
                  isScrolled ? "text-[#8d8d8d]" : "text-[#4f5d52]"
                }`}
              >
                이하민
              </span>
            </span>
          </button>

          <div
            className={`hidden items-center gap-1 rounded-full p-1 transition-all duration-300 md:flex ${
              isScrolled
                ? "border border-[#2d2d2d] bg-[#101010]/85"
                : "border border-white/20 bg-black/22 backdrop-blur-md"
            }`}
          >
            <Button
              variant="ghost"
              onClick={() => {
                setActiveSection("intro");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`rounded-full px-4 ${
                activeSection === "intro"
                  ? isScrolled
                    ? "bg-[#24D164]/15 text-[#98f6ba]"
                    : "bg-[#24D164]/20 text-[#103723]"
                  : isScrolled
                    ? "text-[#d0d0d0] hover:bg-[#24D164]/10 hover:text-[#a4f8c3]"
                    : "text-[#39453e] hover:bg-[#24D164]/12 hover:text-[#143d28]"
              }`}
            >
              자기소개
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setActiveSection("skills");
                scrollToSection("skills");
              }}
              className={`rounded-full px-4 ${
                activeSection === "skills"
                  ? isScrolled
                    ? "bg-[#24D164]/15 text-[#98f6ba]"
                    : "bg-[#24D164]/20 text-[#103723]"
                  : isScrolled
                    ? "text-[#d0d0d0] hover:bg-[#24D164]/10 hover:text-[#a4f8c3]"
                    : "text-[#39453e] hover:bg-[#24D164]/12 hover:text-[#143d28]"
              }`}
            >
              기술 스택
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setActiveSection("portfolio");
                scrollToSection("portfolio");
              }}
              className={`rounded-full px-4 ${
                activeSection === "portfolio"
                  ? isScrolled
                    ? "bg-[#24D164]/15 text-[#98f6ba]"
                    : "bg-[#24D164]/20 text-[#103723]"
                  : isScrolled
                    ? "text-[#d0d0d0] hover:bg-[#24D164]/10 hover:text-[#a4f8c3]"
                    : "text-[#39453e] hover:bg-[#24D164]/12 hover:text-[#143d28]"
              }`}
            >
              포트폴리오
            </Button>
            <Button
              className={`ml-1 rounded-full border shadow-md transition-all active:scale-[0.98] ${
                isScrolled
                  ? "border-[#24D164]/70 bg-[#24D164]/15 text-[#d8ffe7] hover:bg-[#24D164] hover:text-[#0b1a11]"
                  : "border-[#2d9f56]/70 bg-[#d8f8e4]/90 text-[#103723] hover:bg-[#24D164] hover:text-[#0b1a11]"
              }`}
              onClick={() =>
                window.open("https://github.com/haminee01", "_blank")
              }
            >
              GitHub
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  className="rounded-full border border-[#24D164]/60 bg-[#102117] text-[#d8ffe7] hover:bg-[#163422]"
                >
                  <Menu className="mr-1 h-4 w-4" />
                  메뉴
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="min-w-[12rem] rounded-2xl border-[#2f2f2f] bg-[#111111] text-[#f5f5f5]"
              >
                <DropdownMenuItem
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  자기소개
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("skills")}>
                  기술 스택
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("portfolio")}>
                  포트폴리오
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    window.open("https://github.com/haminee01", "_blank")
                  }
                >
                  GitHub
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
