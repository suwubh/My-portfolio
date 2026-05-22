import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiArrowDown,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import CodeWindow from "../components/CodeWindow";
import Counter from "../components/Counter";
import Magnetic from "../components/Magnetic";
import { profile, heroStats } from "../data";

/* small in-place typewriter that cycles the role list */
function useRoleCycle(words) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () =>
          setText((cur) =>
            deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
          ),
        deleting ? 45 : 85
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  const role = useRoleCycle(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="hero-badge" variants={item}>
            <span className="hero-badge-dot" />
            Available for SDE internships &amp; roles
          </motion.span>

          <motion.h1 className="hero-title" variants={item}>
            Hi, I&apos;m{" "}
            <span className="gradient-text">Subhankar</span>
            <br />
            <span className="hero-title-line2">
              Satpathy<span className="hero-dot">.</span>
            </span>
          </motion.h1>

          <motion.div className="hero-role" variants={item}>
            <span className="hero-role-prefix">&gt;</span>
            <span className="hero-role-text">{role}</span>
            <span className="hero-role-caret" />
          </motion.div>

          <motion.p className="hero-tagline" variants={item}>
            {profile.tagline} I care about systems that stay fast under load —
            load-tested, CI-gated, and measured.
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <Magnetic>
              <a href="#work" className="btn btn-primary">
                View my work <FiArrowRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-ghost">
                Let&apos;s talk
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="hero-socials" variants={item}>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter">
              <FaXTwitter />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
            <span className="hero-socials-line" />
            <span className="hero-socials-label">find me online</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-visual-glow" />
          <div className="hero-float">
            <CodeWindow />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {heroStats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <span className="hero-stat-value gradient-text">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
                startDelay={2300}
              />
            </span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <span>Scroll</span>
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;
