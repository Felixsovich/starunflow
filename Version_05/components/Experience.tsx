import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-transparent text-white py-40 relative z-10 border-t border-white/10">
      <div className="max-w-[90vw] mx-auto">

        <div className="mb-24 flex items-baseline gap-8">
          <h2 className="font-display text-5xl md:text-[8vw] font-bold leading-none">ОПЫТ</h2>
          <span className="font-mono text-xs text-trend-lime uppercase tracking-widest hidden md:block">/// Timeline 2014-2025</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Skills */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h3 className="font-mono text-[10px] text-white/30 uppercase mb-8 tracking-[0.4em] border-b border-white/10 pb-4">
                Стек технологий
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-white/5 text-[10px] font-mono text-white/60 hover:text-trend-lime transition-colors uppercase border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="flex flex-col border-l border-white/5">
              {EXPERIENCE.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group py-12 pl-8 md:pl-16 relative hover:bg-white/[0.02] transition-colors"
                >
                  {/* Dot */}
                  <div className="absolute left-[-4.5px] top-16 w-2 h-2 rounded-full bg-trend-lime shadow-[0_0_10px_#dbf246] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4">
                    <h3 className="font-display text-3xl md:text-4xl font-bold uppercase group-hover:text-trend-lime transition-colors">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-sm text-white/40">{exp.period}</span>
                  </div>

                  <h4 className="text-lg text-white/60 mb-8 font-mono tracking-tight">{exp.company}</h4>

                  <p className="text-lg text-white/50 font-light max-w-2xl mb-8 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-[11px] text-white/30 font-mono flex items-start">
                        <span className="text-trend-lime mr-2">/</span> {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;