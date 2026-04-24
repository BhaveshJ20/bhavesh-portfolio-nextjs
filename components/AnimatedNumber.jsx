import { useState, useEffect, useRef } from "react";

// Animates a number from 0 to target when scrolled into view.
// Handles formats like "13+", "70+", "7+", "5★", "↑18%", "↓30%"
export default function AnimatedNumber({ value, style }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !hasRun.current) {
        hasRun.current = true;
        // Handle formats like "↑18%", "↓30%", "13+", "70+", etc.
        const match = value.match(/^([↑↓]?)(\d+)([%+★]?)(.*)$/);
        if (!match) { setDisplay(value); return; }
        const prefix = match[1] || "";
        const target = parseInt(match[2], 10);
        const suffix = match[3] || "";
        const text = match[4] || "";
        const duration = 2200;
        const startTime = performance.now();
        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          setDisplay(prefix + current + suffix + (text ? " " + text : ""));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref} style={style}>{display}</span>;
}
