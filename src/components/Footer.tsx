import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowUpRight, Github, Mail, Sparkles } from "lucide-react";
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
    <footer className="relative overflow-hidden border-t border-[#d9d9d9] bg-[#f7f7f7] pt-8 pb-14 md:pt-10 md:pb-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#24D164]/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-white/80 blur-3xl" />
      <div className="section-shell">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-2xl border border-[#d4d4d4] bg-white/90 px-6 py-8 text-center backdrop-blur-sm md:px-8 md:py-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-1 text-xs font-semibold text-[#12271b]">
            <Sparkles className="h-3.5 w-3.5" />
            Thanks for visiting
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
            함께 성장하는 제품을 만들고 싶습니다
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4f4f4f] md:text-base">
            사용자에게 신뢰를 주는 경험을 목표로, 문제 정의부터 인터랙션
            디테일까지 일관된 품질로 구현합니다.
          </p>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                onClick={() => window.open(link.href, "_blank")}
                className="h-10 rounded-full border-[#24D164]/45 bg-[#f6fff9] px-4 text-[#14452c] transition-all hover:-translate-y-0.5 hover:border-[#24D164] hover:bg-[#24D164] hover:text-[#0b1a11]"
                aria-label={link.label}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-1 h-11 w-11 rounded-full border-[#cfcfcf] bg-white text-[#2d2d2d] hover:border-[#24D164] hover:bg-[#eafff1] hover:text-[#11432a]"
            aria-label="맨 위로"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          <p className="text-xs text-[#6f6f6f]">
            © {new Date().getFullYear()} 이하민
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
