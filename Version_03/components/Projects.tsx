import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], i: number }> = ({ project, i }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  return (
    <div ref={containerRef} className="relative min-h-[100vh] w-full flex items-center justify-center py-40 border-t border-white/10">
      <div className="w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        <motion.div
          style={{ opacity, y: textY }}
          className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2 lg:pl-20'}`}
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="w-12 h-[1px] bg-trend-lime" />
            <span className="font-mono text-trend-lime text-[11px] tracking-[0.4em] uppercase">
              // CASE_REF_0{project.id}
            </span>
          </div>

          <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-8 leading-none tracking-tighter text-white">
            {project.title}
          </h3>

          <p className="text-xl text-white/50 mb-12 max-w-md font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-5 py-2 glass-panel rounded-sm text-[10px] font-mono uppercase text-white/70">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 glass-panel p-8 rounded-sm glitch-border group">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-trend-lime transition-colors">{m}</span>
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest mt-1">Data_Value</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative aspect-[4/5] overflow-hidden group rounded-sm shadow-2xl`}>
          <motion.div
            className="w-full h-full relative"
            initial={{
              x: i % 2 === 0 ? "30%" : "-30%",
              y: "15%",
              rotate: i % 2 === 0 ? 10 : -10,
              opacity: 0,
              scale: 1.2
            }}
            whileInView={{
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              scale: 1
            }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{ y: yImage, scale: scaleImage }}
              className="w-full h-[120%] -top-[10%] relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                onError={(e) => {
                  const fallback = i === 0 ? '1518770660439-4636190af475' : i === 1 ? '1506012733048-59160397c371' : '1581091226825-a6a2a5aee158';
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${fallback}?auto=format&fit=crop&q=80&w=1000&h=1300`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-dark/60 via-transparent to-transparent opacity-40" />
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-trend-lime/20 transition-colors" />
        </div>

      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-transparent py-20 overflow-hidden">
      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} i={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;