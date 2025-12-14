import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-base-cream text-base-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-trend-lime z-0" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-trend-lime z-0" />

                <div className="aspect-[3/4] overflow-hidden bg-base-dark relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src="/images/About_Portrait.jpg"
                    alt="Mikhail Starun"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/600/800?grayscale";
                    }}
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                </div>
              </div>

              <div className="mt-6 flex justify-between font-mono text-xs uppercase tracking-widest text-base-dark/50">
                <span>Fig. 01 — Portrait</span>
                <span>SPB / RU</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-6xl md:text-8xl font-bold leading-[0.85] mb-12 text-base-dark">
                HELLO. <br /> I AM <span className="text-trend-purple">MIKHAIL.</span>
              </h2>

              <div className="border-l-4 border-trend-lime pl-8 py-2 mb-12">
                <p className="text-2xl md:text-3xl font-light leading-tight text-base-dark/90 text-balance">
                  Я не рисую графики ради галочки. Я знаю, чем пахнет склад и сколько стоит минута простоя.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="group p-6 border border-base-dark/10 hover:bg-base-dark hover:text-white transition-colors duration-300">
                  <h4 className="font-mono text-xs text-trend-lime uppercase mb-4 tracking-widest">01 / Operations</h4>
                  <p className="text-lg font-medium leading-relaxed">
                    Работал на 7 заводах. Внедрял SAP EWM своими руками. Видел, где IT разбивается о реальность.
                  </p>
                </div>
                <div className="group p-6 border border-base-dark/10 hover:bg-base-dark hover:text-white transition-colors duration-300">
                  <h4 className="font-mono text-xs text-trend-lime uppercase mb-4 tracking-widest">02 / Transformation</h4>
                  <p className="text-lg font-medium leading-relaxed">
                    Внедрил машинное зрение для безопасности людей. Не ради хайпа, а чтобы спасти жизни.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;