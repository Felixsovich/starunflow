import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-base-dark text-white py-40 relative z-10 border-t border-white/10">
      <div className="max-w-[90vw] mx-auto">

        <div className="mb-24">
          <h2 className="font-display text-[10vw] font-bold leading-none">
            CAREER <span className="text-trend-lime">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Skills Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-12">
              <h3 className="font-mono text-sm text-white/40 uppercase mb-8 tracking-widest border-b border-white/10 pb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <span key={index} className="px-3 py-2 bg-[#1a1a1a] text-sm font-mono text-white/80 hover:text-trend-lime transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {EXPERIENCE.map((exp, index) => (
                <div
                  key={exp.id}
                  className="group py-16 border-t border-white/10 transition-colors hover:bg-white/5 px-4 md:px-8"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-start mb-6">
                    <h3 className="font-display text-4xl md:text-5xl font-bold mb-2 md:mb-0 group-hover:translate-x-4 transition-transform duration-300">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-lg text-trend-lime">{exp.period}</span>
                  </div>

                  <h4 className="text-xl text-white/50 mb-8 font-mono">{exp.company}</h4>

                  <p className="text-xl text-white/80 font-light max-w-2xl mb-8">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center text-sm text-white/40 font-mono">
                        <span className="w-1.5 h-1.5 bg-trend-lime rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;