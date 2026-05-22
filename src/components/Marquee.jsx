import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  wrap,
} from "framer-motion";
import { marqueeTech } from "../data";

const BASE_SPEED = -2.4; // percent per second

// Tech ticker that drifts on its own and speeds up / flips
// direction with the page scroll velocity.
function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const direction = useRef(1);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 380,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * BASE_SPEED * (delta / 1000);
    if (velocityFactor.get() < 0) direction.current = -1;
    else if (velocityFactor.get() > 0) direction.current = 1;
    move += direction.current * move * velocityFactor.get();
    baseX.set(baseX.get() + move);
  });

  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-fade marquee-fade--l" />
      <motion.div className="marquee-track" style={{ x }}>
        {items.map((tech, i) => (
          <span className="marquee-item" key={i}>
            {tech}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </motion.div>
      <div className="marquee-fade marquee-fade--r" />
    </div>
  );
}

export default Marquee;
