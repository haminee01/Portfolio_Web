import { useEffect, useState } from "react";

type PageLoaderProps = {
  /** 최소 표시 시간(ms) — 깜빡임 완화 */
  minMs?: number;
};

/**
 * Glow 테마 색을 사용한 SVG 로더(태양권 느낌의 호 + 라임 그린).
 */
export function PageLoader({ minMs = 700 }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const done = () => {
      setLeaving(true);
      window.setTimeout(() => setVisible(false), 420);
    };

    const start = performance.now();
    const onLoad = () => {
      const elapsed = performance.now() - start;
      const rest = Math.max(0, minMs - elapsed);
      window.setTimeout(done, rest);
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => window.removeEventListener("load", onLoad);
  }, [minMs]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background transition-opacity duration-500 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="glow-spin text-primary"
        aria-hidden
      >
        <circle
          cx="36"
          cy="36"
          r="28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="44 132"
          className="origin-center opacity-90"
        />
        <circle
          cx="36"
          cy="36"
          r="18"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="28 85"
          className="glow-spin-reverse origin-center opacity-80"
        />
      </svg>
      <p className="text-sm font-medium tracking-wide text-muted-foreground">
        로딩 중…
      </p>
    </div>
  );
}
