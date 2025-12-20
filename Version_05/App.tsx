import React, { useEffect, useRef, useState } from 'react';
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
  const [isAudioInitialized, setIsAudioInitialized] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);

  // Background orchestration
  const genBgOpacity = useTransform(scrollY, [100, 600], [0.15, 0.7]);
  const videoBgOpacity = useTransform(scrollY, [400, 800], [0.8, 0]);

  // Audio fade control: Volume is 0.2 (max) at top, fades to 0 by 500px scroll
  const ambientVolume = useTransform(scrollY, [0, 500], [0.2, 0]);

  useEffect(() => {
    const unsubscribe = ambientVolume.on("change", (latest) => {
      if (ambientGainRef.current && audioContextRef.current) {
        ambientGainRef.current.gain.setTargetAtTime(latest, audioContextRef.current.currentTime, 0.1);
      }
    });
    return () => unsubscribe();
  }, [ambientVolume]);

  const initAmbientSound = () => {
    if (isAudioInitialized) return;

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      // Create "Wind/Forest" ambient sound using White Noise + Low Pass Filter
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime); // Start silent
      ambientGainRef.current = gain;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();

      // Fade in initially
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 2);

      setIsAudioInitialized(true);
    } catch (e) {
      console.error("Audio init failed", e);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      initAmbientSound();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

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
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      if (audioContextRef.current) audioContextRef.current.close();
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
          text="АНАЛИЗ ПРОЦЕССОВ • ОПТИМИЗАЦИЯ • БИЗНЕС-ЦЕННОСТЬ • LEAN • ДАННЫЕ • АРХИТЕКТУРА • SAP ERP"
          className="bg-transparent border-t border-b border-white/10 py-12"
          repeat={3}
        />

        <About />

        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Subtle hint for user to interact to enable sound if they just land */}
      {!isAudioInitialized && (
        <div className="fixed bottom-4 left-4 z-50 pointer-events-none opacity-20">
          <span className="text-[8px] font-mono uppercase tracking-widest text-white/50 animate-pulse">
            Click anywhere for immersive audio
          </span>
        </div>
      )}
    </div>
  );
};

export default App;