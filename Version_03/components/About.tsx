import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-60 bg-transparent text-white relative z-10">
      <div className="max-w-[85vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-12">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-mono text-trend-lime text-[10px] uppercase tracking-[0.5em] block"
              >
                // Profile_Manifesto
              </motion.span>
            </div>

            <h2 className="font-display text-4xl md:text-[6vw] font-bold leading-[0.95] mb-16 tracking-tighter">
              <div className="overflow-hidden-mask">
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
              <div className="overflow-hidden-mask">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block text-white/20"
                >
                  СТРОГИЙ КОД.
                </motion.span>
              </div>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid md:grid-cols-2 gap-16 text-xl font-light text-white/50 leading-relaxed max-w-5xl"
            >
              <p>
                Мой опыт в логистике — это не только склады и машины. Это умение видеть структуру там, где другие видят беспорядок. Я внедряю системы, которые работают незаметно, но безупречно.
              </p>
              <p>
                Сегодня я соединяю этот опыт с современным стеком технологий. Машинное зрение, анализ данных и архитектура процессов — инструменты, которыми я меняю реальность.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] bg-white/5 relative overflow-hidden group"
            >
              <img
                src="/images/About_Portrait.jpg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/starun_portrait/800/1000?grayscale";
                }}
              />
              <div className="absolute inset-0 border border-white/5 group-hover:border-trend-lime/30 transition-colors" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;