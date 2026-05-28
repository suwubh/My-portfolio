import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FiMapPin, FiAward, FiZap, FiBriefcase } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { about } from "../data";

const FACT_ICONS = [FiMapPin, FiAward, FiZap, FiBriefcase];

const calendarTheme = {
  light: ["#e4e4e7", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"],
  dark: ["#18181b", "#1e3a5f", "#2563eb", "#60a5fa", "#93c5fd"],
};

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">01 — About</span>
            <h2 className="section-title">
              The developer <span className="gradient-text">behind the code</span>
            </h2>
            <p className="section-sub">
              A snapshot of who I am, what I build, and where I&apos;m headed.
            </p>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-bio glass">
            <p className="about-lead">{about.intro}</p>
            {about.paragraphs.map((para, i) => (
              <p className="about-para" key={i}>
                {para}
              </p>
            ))}

            <div className="about-facts">
              {about.quickFacts.map((fact, i) => {
                const Icon = FACT_ICONS[i % FACT_ICONS.length];
                return (
                  <div className="about-fact" key={fact.label}>
                    <span className="about-fact-icon">
                      <Icon />
                    </span>
                    <span className="about-fact-text">
                      <span className="about-fact-label">{fact.label}</span>
                      <span className="about-fact-value">{fact.value}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="about-side" delay={0.12}>
            <div className="about-edu glass">
              <h3 className="about-edu-title">Education</h3>
              <div className="edu-timeline">
                {about.education.map((edu) => (
                  <div className="edu-item" key={edu.school}>
                    <span className="edu-dot" />
                    <span className="edu-period">{edu.period}</span>
                    <h4 className="edu-school">{edu.school}</h4>
                    <p className="edu-detail">{edu.detail}</p>
                    <span className="edu-score">{edu.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-quote glass">
              <span className="about-quote-mark">&ldquo;</span>
              <p>
                Strive to build things that make a difference — and measure
                whether they actually did.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="about-github glass" delay={0.1}>
          <div className="about-github-head">
            <h3>
              Days I <span className="gradient-text">code</span>
            </h3>
            <span className="about-github-sub">
              Contribution activity · @suwubh
            </span>
          </div>
          <div className="about-github-cal">
            <GitHubCalendar
              username="suwubh"
              blockSize={12}
              blockMargin={4}
              fontSize={13}
              colorScheme="dark"
              theme={calendarTheme}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
