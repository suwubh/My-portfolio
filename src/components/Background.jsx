import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ShaderBackground from "./ShaderBackground";
import ParticleLayer from "./ParticleLayer";

// shader nebula + particles + scroll tints + grid/grain — pinned behind everything.
// As the user scrolls, a blue bloom at the top fades out and a violet bloom
// at the bottom fades in, tying each section to a distinct mood.
function Background() {
  const { scrollYProgress } = useScroll();

  // smooth out the raw scroll value so the tint transitions feel organic
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const blueOp   = useTransform(smooth, [0,   0.55], [1, 0]);
  const purpleOp = useTransform(smooth, [0.4, 1   ], [0, 1]);

  return (
    <div className="bg-layer" aria-hidden="true">
      <ShaderBackground />
      <ParticleLayer />
      {/* scroll-driven colour tint overlays */}
      <motion.div className="bg-tint bg-tint--blue"   style={{ opacity: blueOp   }} />
      <motion.div className="bg-tint bg-tint--purple" style={{ opacity: purpleOp }} />
      <div className="bg-grid" />
      <div className="bg-grain" />
    </div>
  );
}

export default Background;