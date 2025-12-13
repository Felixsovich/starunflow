import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import DotCanvas from './DotCanvas';

// Animation variants for the blur reveal effect
const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  }
};

const textItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: 'blur(10px)' 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};

const BlurText = ({ text, className = "" }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.h1 
      className={`flex flex-wrap gap-x-4 ${className}`}
      variants={textContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={textItem}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="p-4 md:p-6 lg:p-8 w-full min-h-[110vh] flex flex-col" ref={containerRef}>
      {/* Main Block Card */}
      <section 
        id="hero" 
        className="relative flex-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-base-dark text-base-cream shadow-2xl"
      >
        {/* Animated Background */}
        <DotCanvas />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-base-dark/90 via-base-dark/50 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full h-full flex flex-col justify-center max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Text Section (Left) */}
            <motion.div 
              style={{ opacity }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="mb-6">
                <motion.span 
                   initial={{ opacity: 0, filter: 'blur(5px)' }}
                   animate={{ opacity: 1, filter: 'blur(0px)' }}
                   transition={{ duration: 1 }}
                   className="inline-block py-1 px-3 border border-trend-lime/30 rounded-full font-mono text-xs md:text-sm text-trend-lime uppercase tracking-widest bg-trend-lime/5 backdrop-blur-md"
                 >
                   Михаил Старун
                 </motion.span>
              </div>

              <BlurText 
                text="ЛОГИСТИКА АНАЛИТИКА РЕЗУЛЬТАТ" 
                className="font-display text-[12vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter text-white mix-blend-screen"
              />

              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-12 max-w-lg"
              >
                 <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 text-balance border-l-2 border-trend-lime pl-6">
                   15 лет в реальном секторе. Строил склады и процессы, теперь превращаю хаос логистики в цифровую гармонию.
                 </p>
              </motion.div>
            </motion.div>

            {/* Image Section (Right) */}
            <motion.div 
               className="relative order-1 lg:order-2 flex justify-end items-center h-full"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
            >
               <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-[120%] lg:-mr-32 aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] lg:rounded-l-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                 <img 
                   src="https://picsum.photos/800/1000?grayscale" 
                   alt="Abstract Portrait" 
                   className="object-cover w-full h-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-trend-purple/60 to-transparent mix-blend-overlay" />
                 
                 {/* Floating badge on image */}
                 <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                    <div className="text-xs font-mono text-trend-lime uppercase mb-1">Status</div>
                    <div className="text-white font-bold">Open for projects</div>
                 </div>
               </div>
            </motion.div>

          </div>
          
        </div>
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-white/30"
        >
          SCROLL DOWN
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;