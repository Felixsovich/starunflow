import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          
          {/* Floating Glass Dock */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
            
            <div 
              className="cursor-pointer group flex items-center gap-2 mr-4" 
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-2 h-2 bg-trend-lime rounded-full group-hover:animate-ping" />
              <span className="font-display font-bold tracking-tight text-white group-hover:text-trend-lime transition-colors">
                STARUN<span className="text-white/50">FLOW</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-mono font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-trend-lime transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-trend-lime transition-colors hidden md:block"
            >
              Hire Me
            </button>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 w-full z-40 px-4 md:hidden"
          >
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col space-y-2">
                 {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 text-sm font-mono uppercase text-white/80 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;