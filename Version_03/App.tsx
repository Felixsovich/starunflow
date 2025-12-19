import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import VideoBackground from './components/VideoBackground';
import GenerativeBackground from './components/GenerativeBackground';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const App: React.FC = () => {
  const { scrollY } = useScroll();

  // Fade in generative background after Hero (approx 800px)
  const genBgOpacity = useTransform(scrollY, [400, 1000], [0, 0.5]);
  const videoBgOpacity = useTransform(scrollY, [600, 1200], [0.8, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative font-sans selection:bg-trend-lime selection:text-black bg-base-dark text-white">

      {/* BACKGROUND ORCHESTRATION */}
      <motion.div style={{ opacity: videoBgOpacity }}>
        <VideoBackground />
      </motion.div>

      <motion.div style={{ opacity: genBgOpacity }}>
        <GenerativeBackground />
      </motion.div>

      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />

        <Marquee
          text="SYSTEMS • LOGIC • GROWTH • AUTOMATION • ANALYSIS"
          className="bg-transparent border-t border-b border-white/10 py-12"
          repeat={4}
        />

        <About />

        {/* Generative Background is fully visible from here onwards */}
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;