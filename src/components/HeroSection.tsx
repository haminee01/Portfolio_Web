import { useState } from "react";
import {
  Check,
  Github,
  Mail,
  ExternalLink,
  FileText,
  ArrowUpRight,
} from "lucide-react";
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
        className="relative mx-auto w-full max-w-[calc(100vw-10px)] overflow-hidden rounded-md bg-[#24D164] p-9 sm:max-w-[calc(100vw-14px)] sm:p-12 md:max-w-[calc(100vw-18px)] md:p-16 lg:left-1/2 lg:w-[calc(100vw-24px)] lg:max-w-none lg:-translate-x-1/2 lg:p-20 shadow-[var(--card-shadow)] ring-1 ring-black/[0.04]"
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

          <h2 className="mt-4 max-w-2xl text-left text-lg font-semibold text-[#0b1a11] md:text-xl">
            프론트엔드 개발자 / UXUI 디자이너
          </h2>

          <p className="mt-5 max-w-3xl text-left text-base leading-relaxed text-[#0b1a11] md:text-lg">
            산업디자인 기반의 사용자 중심 사고로, 시각적 미학을 논리적인
            인터페이스로 구현합니다.
            <br className="hidden sm:block" />
            일관된 디자인 시스템과 재사용 가능한 구조를 통해 신뢰할 수 있는
            경험을 만듭니다.
          </p>

          {/* <div className="mt-6 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-md border border-[#0f1f14]/20 bg-white/40 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#19402b]">
                Focus
              </p>
              <p className="mt-1 text-sm font-bold text-[#0b1a11]">UX 전략</p>
            </div>
            <div className="rounded-md border border-[#0f1f14]/20 bg-white/40 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#19402b]">
                Strength
              </p>
              <p className="mt-1 text-sm font-bold text-[#0b1a11]">UI 시스템</p>
            </div>
            <div className="rounded-md border border-[#0f1f14]/20 bg-white/40 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#19402b]">
                Process
              </p>
              <p className="mt-1 text-sm font-bold text-[#0b1a11]">
                데이터 기반 개선
              </p>
            </div>
            <div className="rounded-md border border-[#0f1f14]/20 bg-white/40 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#19402b]">
                Goal
              </p>
              <p className="mt-1 text-sm font-bold text-[#0b1a11]">
                신뢰 가능한 경험
              </p>
            </div>
          </div> */}

          <div className="relative mt-5">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#24D164] to-transparent md:hidden" />
            <p className="mb-2 text-right text-[11px] font-semibold tracking-wide text-[#0f1f14] md:hidden">
              좌우로 스와이프
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0 md:pr-0 [&::-webkit-scrollbar]:hidden">
            {contactLinks.map((link, index) => {
              const active = index === activeContact;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveContact(index)}
                  className={`glow-card-hover group relative min-w-[156px] snap-center rounded-md border px-5 py-5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1a11] focus-visible:ring-offset-2 focus-visible:ring-offset-[#24D164] md:min-w-0 ${
                    active
                      ? "border-black bg-[#E5E5E5] text-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.16)]"
                      : "border-[#0b1a11] bg-transparent text-[#0b1a11] hover:-translate-y-0.5 hover:border-black hover:bg-white/35"
                  }`}
                  aria-label={`${link.label} 열기 (새 탭)`}
                >
                  {active ? (
                    <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#24D164] text-white shadow-sm">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  ) : null}
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1f1f1f]">
                    {link.sub}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-current">
                    <link.icon
                      className="h-4 w-4 shrink-0 text-current"
                      aria-hidden
                    />
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
