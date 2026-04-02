import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.focus({ preventScroll: true });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-shell py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-xl px-1 py-1 text-left transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Link2 className="h-4 w-4" aria-hidden />
            </span>
            <span className="hidden text-sm font-bold leading-tight text-foreground sm:block">
              포트폴리오
              <span className="block text-[11px] font-medium text-muted-foreground">
                이하민
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full text-[hsl(var(--glow-ink))] hover:bg-[hsl(var(--glow-lime))]/10"
            >
              자기소개
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="rounded-full text-[hsl(var(--glow-ink))] hover:bg-[hsl(var(--glow-lime))]/10"
            >
              기술 스택
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="rounded-full text-[hsl(var(--glow-ink))] hover:bg-[hsl(var(--glow-lime))]/10"
            >
              포트폴리오
            </Button>
            <Button
              className="ml-1 rounded-full border-0 bg-[hsl(var(--glow-ink))] text-[hsl(var(--glow-cream))] shadow-md transition-transform hover:bg-[hsl(var(--glow-ink))]/90 active:scale-[0.98]"
              onClick={() =>
                window.open("https://github.com/haminee01", "_blank")
              }
            >
              GitHub
            </Button>
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <Menu className="mr-1 h-4 w-4" />
                  메뉴
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="min-w-[12rem] rounded-2xl"
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
