import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Github, Mail, ExternalLink, FileText } from "lucide-react";
const HeroSection = () => {
  const [activeContact, setActiveContact] = useState(0);

  const contactLinks = [
    {
      label: "이메일",
      sub: "Contact",
      icon: Mail,
      href: "mailto:gkmin22@gmail.com",
    },
    {
      label: "GitHub",
      sub: "Code",
      icon: Github,
      href: "https://github.com/haminee01",
    },
    {
      label: "블로그",
      sub: "Naver",
      icon: ExternalLink,
      href: "https://blog.naver.com/higkmin",
    },
    { label: "이력서", sub: "PDF", icon: FileText, href: "/resume/resume.pdf" },
    {
      label: "자기소개서",
      sub: "PDF",
      icon: FileText,
      href: "/resume/self-introduction.pdf",
    },
  ];

  return (
    <section className="relative animate-fade-in">
      <div
        className="relative left-1/2 w-[calc(100vw-10px)] -translate-x-1/2 overflow-hidden rounded-md bg-[#24D164] p-9 sm:w-[calc(100vw-14px)] sm:p-12 md:w-[calc(100vw-18px)] md:p-16 lg:w-[calc(100vw-24px)] lg:p-20 shadow-[var(--card-shadow)] ring-1 ring-black/[0.04]"
        style={{ animationDuration: "0.85s" }}
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[hsl(var(--glow-cream))]/25 blur-3xl animate-pulse"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
          aria-hidden
        />

        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-left text-sm font-semibold uppercase tracking-[0.2em] text-[#0f1f14]">
            이하민 · 포트폴리오
          </p>

          <h1 className="max-w-4xl text-left text-[clamp(1.1rem,2.8vw,2.15rem)] font-extrabold leading-[1.18] tracking-tight text-[#0b1a11]">
            디자인의 언어를 논리적인 인터페이스로 완결짓는 개발자{" "}
            <span className="whitespace-nowrap">이하민입니다.</span>
          </h1>

          <h2 className="mt-4 max-w-2xl text-left text-lg font-semibold text-[#102317] md:text-xl">
            프론트엔드 개발자 / UXUI 디자이너
          </h2>

          <p className="mt-5 max-w-none text-left text-base leading-relaxed text-[#153021] md:text-lg">
            산업디자인 전공의 사용자 중심 사고를 바탕으로, 시각적 미학을
            논리적인 코드로 구현하는 데 가치를 둡니다.
            <br />
            디자인 시스템의 일관성을 재사용 가능한 구조로 설계하며, 감각과
            논리를 연결해 사용자가 신뢰하고 즐길 수 있는 도구를 지향합니다.
          </p>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
            {contactLinks.map((link, index) => {
              const active = index === activeContact;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    setActiveContact(index);
                    window.open(link.href, "_blank");
                  }}
                  className={`glow-card-hover group relative min-w-[156px] snap-center rounded-md border px-5 py-5 text-left transition-colors duration-200 md:min-w-0 ${
                    active
                      ? "border-black bg-[#E5E5E5] text-[#111111] shadow-sm"
                      : "border-black bg-transparent text-[#0f2418] hover:border-black/80"
                  }`}
                >
                  {active ? (
                    <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#24D164] text-white shadow-sm">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  ) : null}
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2a2a2a]">
                    {link.sub}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-current">
                    <link.icon
                      className="h-4 w-4 shrink-0 text-current"
                      aria-hidden
                    />
                    {link.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
