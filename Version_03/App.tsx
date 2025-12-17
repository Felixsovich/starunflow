import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import GenerativeBackground from './components/GenerativeBackground';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const App: React.FC = () => {
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
      {/* New Generative Canvas Background */}
      <GenerativeBackground />

      {/* Global Noise Overlay */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Marquee text="SYSTEMS • LOGIC • GROWTH • AUTOMATION" className="bg-transparent border-t border-b border-white/10 py-10" repeat={3} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;