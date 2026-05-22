import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import resumeUrl from "./assets/Subhankar_Satpathy.pdf?url";
import "./style.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", loading);
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <Background />
      <ScrollProgress />
      <Navbar resumeUrl={resumeUrl} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact resumeUrl={resumeUrl} />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
