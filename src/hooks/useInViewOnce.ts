import { type RefObject, useEffect, useState } from "react";

export function useInViewOnce(
  ref: RefObject<Element | null>,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, seen, threshold, rootMargin]);

  return seen;
}
