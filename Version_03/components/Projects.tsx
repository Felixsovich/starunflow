import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], i: number }> = ({ project, i }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Photo Parallax & Scale
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  // Text Reveal Mask Logic
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [50, 0, 0, -50]);

  return (
    <div ref={containerRef} className="relative min-h-[100vh] w-full flex items-center justify-center py-20 border-t border-white/5">
      <div className="w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text Section */}
        <motion.div
          style={{ opacity, y: textY }}
          className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2 lg:pl-16'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-trend-lime" />
            <span className="font-mono text-trend-lime text-[10px] tracking-[0.4em] uppercase">
              0{project.id} // Project_Case
            </span>
          </div>

          <h3 className="font-display text-5xl md:text-7xl font-bold uppercase mb-8 leading-[0.9] tracking-tighter">
            {project.title}
          </h3>

          <p className="text-lg text-white/40 mb-10 max-w-sm font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase text-white/50">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white mb-1">{m}</span>
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Result_Data</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Section - The "Cool" Scroll */}
        <motion.div
          className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-neutral-900 group`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            style={{ y: yImage, scale: scaleImage }}
            className="absolute inset-0 w-full h-[140%] -top-[20%]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 group-hover:grayscale-0 transition-all duration-1000 ease-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id + 777}/1000/1400?grayscale`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-dark/60 to-transparent opacity-60" />
          </motion.div>

          {/* Decorative Corner HUD */}
          <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
            IMG_REF: 0{project.id}<br />
            COORD: 59.93 N
          </div>
        </motion.div>

      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-base-dark py-20">
      <div className="px-4 mb-32 flex flex-col items-center">
        <h2 className="font-display text-[15vw] leading-none font-bold text-white/5 select-none text-center">
          КЕЙСЫ
        </h2>
        <div className="w-[1px] h-24 bg-gradient-to-b from-trend-lime to-transparent -mt-10" />
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} i={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;