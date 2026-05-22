import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiChessdotcom } from "react-icons/si";
import { profile } from "../data";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="nav-logo footer-logo">
              <span className="nav-logo-brk">&lt;</span>
              <span className="nav-logo-name">SS</span>
              <span className="nav-logo-brk">/&gt;</span>
            </a>
            <p>
              Building fast, real-time, well-tested products on the modern web.
              Always up for an interesting problem.
            </p>
            <div className="footer-socials">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter">
                <FaXTwitter />
              </a>
              <a href={profile.socials.chess} target="_blank" rel="noreferrer" aria-label="Chess.com">
                <SiChessdotcom />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.socials.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Subhankar Satpathy. All rights reserved.</span>
          <span className="footer-built">
            Designed &amp; built with React, Vite &amp; Framer Motion.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
