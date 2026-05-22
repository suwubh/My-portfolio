import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const finePointer =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const spring = { stiffness: 180, damping: 20, mass: 0.5 };

// 3D tilt that follows the cursor, with a moving sheen on top.
function Tilt({ children, className = "", max = 9 }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  if (!finePointer) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e) => {
    const box = ref.current.getBoundingClientRect();
    px.set((e.clientX - box.left) / box.width);
    py.set((e.clientY - box.top) / box.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileHover={{ scale: 1.025 }}
      transition={{ scale: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <motion.span
        className="tilt-glare"
        style={{ "--glare-x": glareX, "--glare-y": glareY }}
      />
    </motion.div>
  );
}

export default Tilt;
