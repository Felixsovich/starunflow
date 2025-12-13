import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-base-dark text-base-cream">
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title pinned */}
        <div className="absolute top-12 left-8 md:left-16 z-20 mix-blend-difference pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white"
          >
            КЛЮЧЕВЫЕ <br /> ПРОЕКТЫ
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 pl-8 md:pl-16 pr-16 items-center">
          {/* Introductory block */}
          <div className="w-[80vw] md:w-[30vw] flex-shrink-0 pt-20 md:pt-0">
             <p className="text-xl md:text-3xl font-light leading-tight text-white/80">
               Связываю <span className="text-trend-lime">бизнес-задачи</span> и <span className="text-trend-purple">инженерные решения</span>.
             </p>
             <div className="mt-8 text-sm font-mono text-white/50 uppercase tracking-widest">Листайте вправо →</div>
          </div>

          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-500 backdrop-blur-sm"
            >
              {/* Image Top Half */}
              <div className="h-[40vh] overflow-hidden relative">
                <div className="absolute inset-0 bg-trend-purple/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="p-8 md:p-10 flex flex-col justify-between h-[35vh]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs text-trend-lime uppercase tracking-widest border border-trend-lime/30 px-2 py-1 rounded-full">
                      Кейс 0{index + 1}
                    </span>
                    <button className="p-3 bg-white/10 rounded-full hover:bg-trend-lime hover:text-black transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-4xl font-bold mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-white/40 uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* End Card */}
          <div className="w-[80vw] md:w-[30vw] flex-shrink-0 flex items-center justify-center">
             <div className="text-center">
               <h3 className="font-display text-4xl font-bold mb-4">Интересно?</h3>
               <a href="mailto:starunflow@gmail.com" className="inline-block border-b-2 border-trend-lime text-xl pb-1 hover:text-trend-lime transition-colors">
                 Запросить полное портфолио
               </a>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;