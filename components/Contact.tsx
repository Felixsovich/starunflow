import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-base-dark text-base-cream relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          
          <div>
            <motion.h2 
              initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl font-bold leading-none mb-8"
            >
              ПИШИТЕ <br/>
              <span className="text-trend-lime">МНЕ.</span>
            </motion.h2>
            
            <p className="text-xl font-light text-white/60 mb-12 max-w-md">
              Нужен PM или Аналитик с реальным производственным опытом? Я готов.
            </p>

            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:bg-trend-purple hover:border-trend-purple hover:text-white transition-all duration-300"
                >
                  <link.icon size={18} />
                  <span className="uppercase text-sm font-bold tracking-wider">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/40">Имя</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:outline-none focus:border-trend-lime transition-colors"
                    placeholder="Как вас зовут?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/40">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:outline-none focus:border-trend-lime transition-colors"
                    placeholder="@gmail.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/40">Сообщение</label>
                <textarea 
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:outline-none focus:border-trend-lime transition-colors resize-none"
                  placeholder="Опишите задачу..."
                />
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className="px-8 py-4 bg-white text-black font-display font-bold text-lg rounded-full hover:bg-trend-lime transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Отправка...' : status === 'success' ? 'Отправлено!' : 'Отправить'}
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Mikhail Starun</p>
          <p>Design: Modern High Fashion</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;