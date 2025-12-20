import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down for deep perspective
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.05]);
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Mikhail: Clockwise rotation on scroll (0 -> 45 degrees)
  const rotateZ1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  // Starun: Counter-clockwise rotation on scroll (0 -> -45 degrees)
  const rotateZ2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.8], [0, 15]);

  return (
    <div ref={containerRef} id="hero" className="relative w-full h-[100vh] flex flex-col justify-center items-center bg-transparent overflow-hidden perspective-container">

      <motion.div
        style={{
          scale,
          y: yMove,
          opacity,
          filter: `blur(${blur}px)`
        }}
        className="relative z-20 w-full px-4 md:px-12 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="flex flex-col items-center leading-[0.75]">

          <div className="overflow-hidden-mask">
            <motion.h1
              initial={{ y: "130%", rotateZ: 20, opacity: 0 }}
              animate={{ y: 0, rotateZ: 0, opacity: 1 }}
              style={{ rotateZ: rotateZ1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-[18vw] md:text-[16vw] tracking-tighter text-white"
            >
              МИХАИЛ
            </motion.h1>
          </div>

          <div className="overflow-hidden-mask -mt-[1vw]">
            <motion.h1
              initial={{ y: "130%", rotateZ: -20, opacity: 0 }}
              animate={{ y: 0, rotateZ: 0, opacity: 1 }}
              style={{ rotateZ: rotateZ2 }}
              transition={{ duration: 1.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-[18vw] md:text-[16vw] tracking-tighter stroke-text text-transparent"
            >
              СТАРУН
            </motion.h1>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="glass-panel px-10 py-4 rounded-full border-trend-lime/30 relative group overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 skew-x-12"
            />
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-trend-lime relative z-10 text-center">
              Business Analyst | Process Optimization | Data Analytics
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-12">
        <div className="flex justify-between items-start opacity-60">
          <div className="font-mono text-[10px] uppercase tracking-widest leading-relaxed">
            <span className="text-trend-lime animate-pulse">●</span> ANALYTICS.LIVE<br />
            v.2025_CORE
          </div>
          <div className="font-mono text-[10px] text-right uppercase tracking-widest">
            St.Petersburg, RU<br />
            Status: Open_to_Work
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;