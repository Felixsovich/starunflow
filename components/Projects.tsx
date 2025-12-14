import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-base-cream text-base-dark">

      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Background Grid Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-base-dark/10 z-0" />

        <motion.div style={{ x }} className="flex gap-0 pl-0 items-center h-full">

          {/* Intro Title Block */}
          <div className="w-[100vw] h-full flex-shrink-0 flex flex-col justify-center px-8 md:px-24 border-r border-base-dark/10 bg-base-cream relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] mb-4 text-trend-brown">Selected Works 2019-2025</span>
            <h2 className="font-display text-[12vw] leading-none font-bold tracking-tighter mb-8">
              REAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-trend-purple to-trend-lime">CASES</span>
            </h2>
            <div className="flex gap-4 text-sm font-mono uppercase">
              <span>SCROLL</span>
              <span className="animate-bounce">→</span>
            </div>
          </div>

          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="relative w-[100vw] md:w-[80vw] h-full flex-shrink-0 border-r border-base-dark/10 flex flex-col bg-base-cream"
            >
              {/* Header Info */}
              <div className="h-[15vh] p-8 flex justify-between items-end border-b border-base-dark/10">
                <span className="font-display text-4xl font-bold">0{index + 1}</span>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-base-dark/20 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Visual */}
              <div className="flex-1 relative group overflow-hidden bg-base-dark">
                <div className="absolute inset-0 bg-trend-purple/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/1600/900?grayscale`;
                  }}
                />

                {/* Floating Metrics */}
                <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-2">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-white/90 backdrop-blur px-4 py-2 text-sm font-mono font-bold uppercase border-l-4 border-trend-lime">
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Info */}
              <div className="h-[25vh] p-8 flex flex-col justify-center bg-white relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight uppercase max-w-2xl">
                    {project.title}
                  </h3>
                  <button className="w-16 h-16 rounded-full border border-base-dark/10 flex items-center justify-center hover:bg-trend-lime hover:border-transparent transition-all">
                    <ArrowUpRight size={32} />
                  </button>
                </div>
                <p className="text-base-dark/60 text-lg max-w-3xl line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {/* End CTA Block */}
          <div className="w-[100vw] h-full flex-shrink-0 flex items-center justify-center bg-trend-lime text-base-dark">
            <div className="text-center">
              <h3 className="font-display text-[10vw] font-bold leading-none mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                LET'S <br /> WORK
              </h3>
              <a href="mailto:starunflow@gmail.com" className="font-mono text-xl border-b-2 border-base-dark pb-1 uppercase tracking-widest">
                Contact Me
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;