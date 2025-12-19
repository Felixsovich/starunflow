import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { playClickSound } from '../utils/sounds.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    playClickSound(880, 0.1);

    try {
      // @ts-ignore
      if (typeof emailjs !== 'undefined') {
        // @ts-ignore
        await emailjs.send(
          "service_z6qoxbe",
          "template_2k8d329",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: "starunflow@gmail.com",
          }
        );
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("EmailJS SDK not found");
      }
    } catch (error) {
      console.error("Mail Error:", error);
      setStatus('error');
      // Reset status after a few seconds to allow retry
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-40 bg-base-dark text-white relative overflow-hidden">

      <div className="max-w-[90vw] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-end">

          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-6xl md:text-[10vw] font-bold leading-none mb-12"
            >
              СВЯЗЬ<span className="text-trend-lime">.</span>
            </motion.h2>

            <p className="text-xl font-light text-white/40 mb-16 max-w-sm">
              Готов к новым вызовам в IT-проектах или системном анализе. Пишите, обсудим задачи.
            </p>

            <div className="flex flex-col gap-6">
              {SOCIAL_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playClickSound(440, 0.05)}
                  className="group flex items-center gap-6 text-sm font-mono uppercase tracking-[0.2em] hover:text-trend-lime transition-colors"
                >
                  <span className="text-white/20 group-hover:text-trend-lime transition-colors">0{idx + 1}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] p-8 md:p-12 border border-white/10 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase text-white/30">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-trend-lime transition-colors"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase text-white/30">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-trend-lime transition-colors"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase text-white/30">Сообщение</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-trend-lime transition-colors h-32 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  onMouseEnter={() => playClickSound(660, 0.05)}
                  className="group flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-trend-lime"
                >
                  {status === 'sending' ? 'Отправка...' : status === 'success' ? 'Отправлено' : status === 'error' ? 'Ошибка' : 'Отправить'}
                  <div className="w-12 h-[1px] bg-trend-lime group-hover:w-20 transition-all" />
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-mono uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} MIKHAIL STARUN</p>
          <p>FORGED IN LOGISTICS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;