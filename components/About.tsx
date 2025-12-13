import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent text-base-dark relative z-10">
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
               <h2 className="font-display text-5xl md:text-6xl font-bold leading-none mb-8 text-base-dark">
                 ПРИВЕТ. <br/> ЭТО <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-trend-purple to-trend-brown">МИХАИЛ</span>
               </h2>
               <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/50 relative shadow-2xl shadow-trend-purple/10">
                  <div className="absolute inset-0 bg-trend-purple/10 mix-blend-overlay z-10" />
                  <img src="https://picsum.photos/600/800?grayscale" alt="Portrait" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" />
               </div>
             </motion.div>
          </div>

          <div className="lg:w-2/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-xl prose-stone max-w-none"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Меньше теории. <br/>
                <span className="text-trend-purple">Больше практики.</span>
              </h3>
              
              <p className="text-2xl font-light leading-relaxed text-trend-brown mb-8 text-balance">
                Я не рисую красивые графики ради галочки. Я знаю, чем пахнет склад и сколько стоит простой конвейера.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-base-dark/5 hover:border-trend-purple/50 transition-colors">
                  <h4 className="font-bold text-lg mb-3 font-display">Операционный опыт</h4>
                  <p className="text-base text-base-dark/60">
                    Работал на 7 заводах. Внедрял SAP EWM своими руками. Видел, где IT разбивается о реальность.
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-base-dark/5 hover:border-trend-purple/50 transition-colors">
                  <h4 className="font-bold text-lg mb-3 font-display">IT Трансформация</h4>
                  <p className="text-base text-base-dark/60">
                    Внедрил машинное зрение для безопасности людей. Не ради хайпа, а чтобы никто не пострадал.
                  </p>
                </div>
              </div>

              <p className="text-base-dark/80">
                Сейчас я использую свой опыт в Project Management и Business Analysis. Моя цель — создавать продукты, которые работают в жизни, а не только на презентации.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;