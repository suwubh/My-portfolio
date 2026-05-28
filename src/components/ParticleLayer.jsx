import React, { useEffect, useRef } from "react";

// Soft glowing particles drifting slowly across the fixed background.
// 2D canvas only — no WebGL, no deps.
// Pauses on hidden tabs, respects prefers-reduced-motion, halves
// particle count on narrow viewports for mobile perf.
function ParticleLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let raf;
    let running = true;

    const COUNT = window.innerWidth < 680 ? 26 : 52;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Each particle: position, velocity, radius, base alpha, pulse phase + speed
    const particles = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.28,
      vy:    (Math.random() - 0.5) * 0.28,
      r:     Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.20 + 0.06,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.018 + 0.006,
    }));

    let frame = 0;

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (const p of particles) {
        // drift
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -12) p.x = canvas.width  + 12;
        else if (p.x > canvas.width  + 12) p.x = -12;
        if (p.y < -12) p.y = canvas.height + 12;
        else if (p.y > canvas.height + 12) p.y = -12;

        // pulsing opacity
        const pulse = 0.55 + 0.45 * Math.sin(frame * p.speed + p.phase);
        const a     = p.alpha * pulse;

        // outer glow halo
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(96,165,250,${a})`);
        g.addColorStop(1,  "rgba(96,165,250,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // hard core dot (slightly cooler blue-white)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(191,219,254,${Math.min(a * 2.2, 0.9)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onResize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}

export default ParticleLayer;