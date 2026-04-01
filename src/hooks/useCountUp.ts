import { useEffect, useRef, useState } from "react";

export function useCountUp(
  end: number,
  options: { duration?: number; enabled?: boolean; decimals?: number } = {},
) {
  const { duration = 1400, enabled = true, decimals = 0 } = options;
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }

    const step = (now: number) => {
      if (startTimeRef.current === null) startTimeRef.current = now;
      const t = Math.min((now - startTimeRef.current) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Number((eased * end).toFixed(decimals)));
      if (t < 1) frameRef.current = requestAnimationFrame(step);
    };

    startTimeRef.current = null;
    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, enabled, decimals]);

  return value;
}
