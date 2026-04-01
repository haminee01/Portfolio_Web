import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();

    media.addEventListener("change", updateEnabled);
    return () => media.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      mouseRef.current = next;
      setMouse(next);
      const target = event.target as Element | null;
      setHoveringInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const animateRing = () => {
      setRing((prev) => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.2,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.2,
      }));
      rafRef.current = window.requestAnimationFrame(animateRing);
    };

    document.body.classList.add("cursor-fancy");
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("cursor-fancy");
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <span
        className={`cursor-ring ${hoveringInteractive ? "is-active" : ""}`}
        style={{ transform: `translate3d(${ring.x}px, ${ring.y}px, 0)` }}
      />
      <span
        className={`cursor-dot ${hoveringInteractive ? "is-active" : ""}`}
        style={{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }}
      />
    </>
  );
};

export default CustomCursor;
