import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={containerRef} id="hero" className="relative w-full h-[100vh] flex flex-col justify-center items-center bg-base-dark overflow-hidden">

      {/* Cinematic Text Block */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full px-4 md:px-12 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="flex flex-col items-center leading-[0.8]">

          <div className="overflow-hidden-mask">
            <motion.h1
              initial={{ y: "100%", rotate: 5 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-[18vw] md:text-[16vw] tracking-tighter text-white"
            >
              МИХАИЛ
            </motion.h1>
          </div>

          <div className="overflow-hidden-mask -mt-[2vw]">
            <motion.h1
              initial={{ y: "100%", rotate: -5 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-[18vw] md:text-[16vw] tracking-tighter stroke-text text-transparent"
            >
              СТАРУН
            </motion.h1>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.8em] text-trend-lime opacity-80">
            Project Architect / System Analyst
          </p>
        </motion.div>
      </motion.div>

      {/* Subtle UI Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-8 md:p-12">
        <div className="flex justify-between items-start opacity-30">
          <div className="font-mono text-[9px] uppercase tracking-widest">
            Status: Operational<br />
            Core: Starun_02
          </div>
          <div className="font-mono text-[9px] text-right uppercase tracking-widest">
            Location: SPB, RU<br />
            Est: 2025
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            animate={{ height: [40, 80, 40] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-white/20 to-transparent"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;