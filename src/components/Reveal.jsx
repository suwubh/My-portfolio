import React from "react";
import { motion } from "framer-motion";

// Fades + slides children in the first time they scroll into view.
// `lift` adds a hover raise — done via Framer so it doesn't fight
// the inline transform the reveal leaves behind.
function Reveal({
  children,
  delay = 0,
  y = 30,
  duration = 0.7,
  className = "",
  as = "div",
  lift = false,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={
        lift
          ? {
              y: -7,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
