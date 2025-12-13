import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-cream/70 backdrop-blur-md border-b border-base-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <span className="font-display font-bold text-xl tracking-tighter text-base-dark group-hover:text-trend-purple transition-colors">
              STARUN<span className="text-trend-purple group-hover:text-base-dark transition-colors">FLOW</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {['Обо мне', 'Проекты', 'Опыт'].map((item, index) => {
              const ids = ['about', 'projects', 'experience'];
              return (
                <button 
                  key={item}
                  onClick={() => scrollToSection(ids[index])}
                  className="text-sm font-medium text-base-dark/70 hover:text-trend-purple transition-colors uppercase tracking-wide"
                >
                  {item}
                </button>
              );
            })}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-base-dark text-base-cream px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-trend-lime hover:text-base-dark transition-all duration-300"
            >
              Связаться
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-base-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-cream border-b border-base-dark/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {['Обо мне', 'Проекты', 'Опыт', 'Контакты'].map((item, index) => {
              const ids = ['about', 'projects', 'experience', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(ids[index])}
                  className="block w-full text-left px-3 py-4 text-base font-medium border-b border-base-dark/5 last:border-0 text-base-dark"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;