import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-transparent min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sticky Title */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-base-dark mb-8"
              >
                ОПЫТ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-trend-purple to-trend-lilac">
                  & НАВЫКИ
                </span>
              </motion.h2>
              <p className="text-trend-brown text-lg leading-relaxed mb-8">
                От логистики к IT архитектуре. Каждый этап — это новый инструмент в моём арсенале.
              </p>
              
              {/* Decorative line */}
              <div className="w-12 h-1 bg-trend-lime rounded-full" />
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Timeline */}
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="group relative pl-8 border-l-2 border-base-dark/10 hover:border-trend-purple transition-colors duration-500"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-base-cream border-2 border-base-dark/20 group-hover:border-trend-purple group-hover:bg-trend-purple transition-colors duration-500" />
                  
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <span className="font-mono text-sm text-trend-purple font-bold tracking-widest">{exp.period}</span>
                    <h3 className="font-display text-2xl font-bold text-base-dark">{exp.role}</h3>
                  </div>
                  
                  <h4 className="text-lg font-medium text-trend-brown mb-4">{exp.company}</h4>
                  
                  <p className="text-base-dark/70 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start text-sm text-base-dark/60">
                        <span className="mr-2 text-trend-lime">➔</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Skills Cloud */}
            <div className="pt-16 border-t border-base-dark/10">
              <h3 className="font-display text-3xl font-bold mb-8">Технологический стек</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-base-dark/5 shadow-sm hover:shadow-md hover:border-trend-lime hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <span className="font-medium text-base-dark">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;