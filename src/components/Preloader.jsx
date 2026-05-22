import React from "react";
import { motion } from "framer-motion";

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="preloader-inner">
        <motion.div
          className="preloader-mark"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="preloader-bracket">&lt;</span>
          <span className="preloader-mono gradient-text">SS</span>
          <span className="preloader-bracket">/&gt;</span>
        </motion.div>
        <div className="preloader-track">
          <motion.div
            className="preloader-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
        <motion.span
          className="preloader-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading portfolio
        </motion.span>
      </div>
    </motion.div>
  );
}

export default Preloader;
