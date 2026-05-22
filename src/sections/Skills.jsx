import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase, FiCpu } from "react-icons/fi";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiLinux,
  SiCplusplus,
  SiSocketdotio,
  SiGithubactions,
} from "react-icons/si";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data";

const ICONS = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  cpu: FiCpu,
};

const TOOLBELT = [
  { Icon: SiCplusplus, name: "C++" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiSocketdotio, name: "Socket.io" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiRedis, name: "Redis" },
  { Icon: SiPrisma, name: "Prisma" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiGithubactions, name: "GitHub Actions" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiLinux, name: "Linux" },
];

const chipParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const chipChild = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">02 — Skills</span>
            <h2 className="section-title">
              My <span className="gradient-text">technical toolkit</span>
            </h2>
            <p className="section-sub">
              The languages, frameworks and infrastructure I use to ship
              production-grade software.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] || FiCode;
            return (
              <Reveal
                key={group.title}
                className={`skill-card glass ${
                  i >= 3 ? "skill-card--wide" : ""
                }`}
                delay={i * 0.08}
                lift
              >
                <div className="skill-card-head">
                  <span className="skill-card-icon">
                    <Icon />
                  </span>
                  <h3>{group.title}</h3>
                  <span className="skill-card-count">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <motion.div
                  className="skill-chips"
                  variants={chipParent}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {group.items.map((item) => (
                    <motion.span
                      className="chip"
                      key={item}
                      variants={chipChild}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="toolbelt" delay={0.1}>
          <span className="toolbelt-label">Daily drivers</span>
          <div className="toolbelt-grid">
            {TOOLBELT.map(({ Icon, name }) => (
              <div className="toolbelt-item" key={name} title={name}>
                <Icon />
                <span className="toolbelt-tip">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
