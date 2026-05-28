import React from "react";
import {
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiStar,
  FiCode,
} from "react-icons/fi";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { achievements, codingProfiles, statCounters } from "../data";

const TAG_ICON = {
  Hackathon: FiAward,
  Competitive: FiTrendingUp,
  Leadership: FiUsers,
  Honors: FiStar,
};

const PLATFORM = {
  LeetCode: { Icon: SiLeetcode, accent: "#a1a1aa" },
  Codeforces: { Icon: SiCodeforces, accent: "#60a5fa" },
  CodeChef: { Icon: SiCodechef, accent: "#93c5fd" },
};

function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">04 — Achievements</span>
            <h2 className="section-title">
              Wins, ranks &amp; <span className="gradient-text">milestones</span>
            </h2>
            <p className="section-sub">
              Competitive programming, hackathons and leadership — the track
              record behind the code.
            </p>
          </div>
        </Reveal>

        <Reveal className="stat-row glass" delay={0.05}>
          {statCounters.map((stat) => (
            <div className="stat-cell" key={stat.label}>
              <span className="stat-cell-value gradient-text">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stat-cell-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="cp-row">
          {codingProfiles.map((cp, i) => {
            const meta = PLATFORM[cp.platform] || {
              Icon: FiCode,
              accent: "#60a5fa",
            };
            const { Icon, accent } = meta;
            return (
              <Reveal
                key={cp.platform}
                className="cp-card glass"
                delay={i * 0.1}
                lift
              >
                <div className="cp-card-top">
                  <span className="cp-icon" style={{ color: accent }}>
                    <Icon />
                  </span>
                  <span className="cp-platform">{cp.platform}</span>
                </div>
                <span className="cp-rank" style={{ color: accent }}>
                  {cp.rank}
                </span>
                <div className="cp-rating">
                  <strong>{cp.rating}</strong>
                  <span>{cp.note}</span>
                </div>
                <span
                  className="cp-bar"
                  style={{
                    background: `linear-gradient(90deg, ${accent}, transparent)`,
                  }}
                />
              </Reveal>
            );
          })}
        </div>

        <div className="ach-grid">
          {achievements.map((ach, i) => {
            const Icon = TAG_ICON[ach.tag] || FiAward;
            return (
              <Reveal
                key={ach.title}
                className="ach-card glass"
                delay={(i % 3) * 0.08}
                lift
              >
                <div className="ach-card-head">
                  <span className="ach-icon">
                    <Icon />
                  </span>
                  <span className="ach-tag">{ach.tag}</span>
                </div>
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-detail">{ach.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
