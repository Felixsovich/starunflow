import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  return (
    <div className="relative font-sans selection:bg-trend-lime selection:text-black bg-base-cream">
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <main>
        <Hero />
        <Marquee text="LOGISTICS • ANALYTICS • INNOVATION • PROCESS" />
        <About />
        <Projects />
        <Marquee text="SAP EWM • AGILE • MACHINE VISION • WMS" repeat={15} className="bg-trend-lime text-base-dark border-none" />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;