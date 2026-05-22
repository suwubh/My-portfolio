import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Counts up to `value`. Triggers on scroll-into-view, or after
// `startDelay` ms if given (the hero stats use that so they animate
// on load instead of waiting for a scroll).
function Counter({ value, suffix = "", decimals = 0, duration = 1.9, startDelay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [autoStarted, setAutoStarted] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (startDelay == null) return;
    const t = setTimeout(() => setAutoStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  const go = startDelay == null ? inView : autoStarted;

  useEffect(() => {
    if (!go) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [go, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default Counter;
