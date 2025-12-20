import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-60 bg-transparent text-white relative z-10">
      <div className="max-w-[85vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-12">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-mono text-trend-lime text-[11px] uppercase tracking-[0.6em] block"
              >
                // PROFILE_MANIFESTO
              </motion.span>
            </div>

            <h2 className="font-display text-4xl md:text-[6.5vw] font-bold leading-[0.9] mb-16 tracking-tighter text-white">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block"
                >
                  ПРЕВРАЩАЮ ХАОС В
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block text-white/30"
                >
                  БИЗНЕС-ЦЕННОСТЬ.
                </motion.span>
              </div>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid md:grid-cols-2 gap-16 text-xl font-light text-white/60 leading-relaxed max-w-5xl"
            >
              <p>
                15+ лет я занимаюсь анализом процессов и оптимизацией операций. Мой опыт — это умение видеть закономерности в данных и находить неэффективности там, где другие видят привычный порядок вещей.
              </p>
              <p>
                Я создаю решения, которые дают измеримый результат: будь то разработка системы KPI, внедрение AI-мониторинга или сбор требований для доработки WMS. Я говорю на языке бизнеса и на языке кода.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] overflow-hidden group glass-panel rounded-sm relative shadow-2xl">
              <motion.div
                className="w-full h-full relative overflow-hidden"
                initial={{
                  x: "30%",
                  y: "20%",
                  rotate: 12,
                  opacity: 0
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1
                }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="/images/About_Portrait.jpg"
                  alt="Михаил Старун"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000";
                  }}
                />
                <div className="absolute inset-0 border border-white/10 group-hover:border-trend-lime/40 transition-colors" />
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-trend-lime opacity-40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;