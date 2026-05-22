import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function Navbar({ resumeUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "nav--scrolled" : ""}`}
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <nav className="nav-inner container">
          <a
            href="#home"
            className="nav-logo"
            aria-label="Home"
            onClick={() => setOpen(false)}
          >
            <span className="nav-logo-brk">&lt;</span>
            <span className="nav-logo-name">SS</span>
            <span className="nav-logo-brk">/&gt;</span>
          </a>

          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? "is-active" : ""}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      className="nav-underline"
                      layoutId="nav-underline"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <Magnetic>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary nav-cta"
              >
                Résumé <FiArrowUpRight />
              </a>
            </Magnetic>
            <button
              className="nav-burger"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 6%)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.07 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={active === link.id ? "is-active" : ""}
                  >
                    <span className="nav-mobile-idx">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Open Résumé <FiArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
