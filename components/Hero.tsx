import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-base-dark" ref={containerRef}>

      {/* VIDEO BACKGROUND LAYER */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-base-dark/60 z-10" /> {/* Overlay to darken video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* USER: Replace this file in public/videos/ */}
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* TECHNICAL GRIDS / DECORATIONS */}
      <div className="absolute inset-0 z-20 pointer-events-none p-4 md:p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start border-t border-white/20 pt-4">
          <span className="font-mono text-xs text-trend-lime uppercase tracking-widest">Sys.Status: Online</span>
          <span className="font-mono text-xs text-white/50 uppercase tracking-widest">Loc: Earth, RU</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/20 pb-4">
          <span className="font-mono text-xs text-white/50 uppercase tracking-widest">Scroll for data</span>
          <span className="font-mono text-xs text-trend-lime uppercase tracking-widest">V.2.0.24</span>
        </div>

        {/* Crosshairs */}
        <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-trend-lime/50" />
        <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-trend-lime/50" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-trend-lime/50" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-trend-lime/50" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-30 w-full h-full flex flex-col justify-center items-center px-4">

        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={textItem}
              className="font-display text-[15vw] leading-[0.8] font-bold text-white mix-blend-difference tracking-tighter"
            >
              STARUN
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={textItem}
              className="font-display text-[15vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-b from-trend-lime to-transparent tracking-tighter"
            >
              FLOW
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-8 items-center md:items-start max-w-2xl"
        >
          <div className="w-16 h-[1px] bg-trend-lime hidden md:block mt-3" />
          <p className="text-xl md:text-2xl font-light text-white/80 text-center md:text-left text-balance">
            Превращаю <span className="text-trend-lime">хаос логистики</span> в цифровую систему.
            <br /> <span className="text-sm font-mono text-white/40 mt-2 block uppercase tracking-widest">Project Manager • Business Analyst</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;