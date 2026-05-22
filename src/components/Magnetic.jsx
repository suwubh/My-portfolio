import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const finePointer =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Pulls whatever it wraps toward the cursor when you hover near it.
function Magnetic({ children, strength = 0.4 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 230, damping: 17, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 230, damping: 17, mass: 0.4 });

  if (!finePointer) return children;

  const handleMove = (e) => {
    const box = ref.current.getBoundingClientRect();
    x.set((e.clientX - (box.left + box.width / 2)) * strength);
    y.set((e.clientY - (box.top + box.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY, display: "inline-flex" }}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
