import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "", repeat = 6 }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-base-dark/50 backdrop-blur-xl border-t border-b border-white/15 py-20 ${className}`}>
      <div className="animate-marquee">
        <div className="flex gap-24 items-center px-12">
          {[...Array(repeat * 2)].map((_, i) => (
            <span key={i} className="text-7xl md:text-[10vw] font-display font-bold uppercase text-transparent stroke-text opacity-60 hover:opacity-100 hover:text-trend-lime hover:stroke-transparent transition-all duration-500 select-none cursor-default tracking-tighter">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;