import React from "react";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import Magnetic from "../components/Magnetic";
import { projects, profile } from "../data";
import scriblioImg from "../assets/Projects/scriblio.png";
import chessImg from "../assets/Projects/chess.png";
import readhavenImg from "../assets/Projects/readhaven.png";

const IMAGES = {
  scriblio: scriblioImg,
  chess: chessImg,
  readhaven: readhavenImg,
};

function browserLabel(project) {
  if (project.demo) return project.demo.replace(/^https?:\/\//, "");
  return `github.com/suwubh/${project.name}`;
}

function Projects() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">03 — Selected Work</span>
            <h2 className="section-title">
              Things I&apos;ve <span className="gradient-text">built &amp; shipped</span>
            </h2>
            <p className="section-sub">
              Three production-grade projects — each load-tested, CI-gated and
              measured. Real numbers, not just screenshots.
            </p>
          </div>
        </Reveal>

        <div className="work-list">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              className={`project-card glass ${
                i % 2 === 1 ? "project-card--reverse" : ""
              }`}
              y={48}
            >
              <div className="project-visual">
                <div
                  className="project-glow"
                  style={{ background: project.accent }}
                />
                <Tilt className="browser-tilt">
                  <div className="browser">
                    <div className="browser-bar">
                      <span className="browser-dot" />
                      <span className="browser-dot" />
                      <span className="browser-dot" />
                      <span className="browser-url">
                        {browserLabel(project)}
                      </span>
                    </div>
                    <div className="browser-screen">
                      <img
                        src={IMAGES[project.image]}
                        alt={`${project.name} screenshot`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Tilt>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span
                    className="project-index"
                    style={{ color: project.accent }}
                  >
                    0{i + 1} <span>/ 03</span>
                  </span>
                  <span className="project-period">{project.period}</span>
                </div>

                <h3 className="project-name">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-highlights">
                  {project.highlights.map((point, idx) => (
                    <li key={idx}>
                      <HiOutlineSparkles
                        className="project-bullet"
                        style={{ color: project.accent }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div className="project-metric" key={metric.label}>
                      <strong style={{ color: project.accent }}>
                        {metric.value}
                      </strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FiGithub /> Source code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      <FiExternalLink /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="work-more" delay={0.1}>
          <p>More experiments, tools and side-projects live on my GitHub.</p>
          <Magnetic>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Browse all repositories <FiArrowUpRight />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
