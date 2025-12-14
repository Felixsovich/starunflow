import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "", repeat = 10 }) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap border-y border-white/10 bg-base-dark py-3 ${className}`}>
      {/* First copy of content */}
      <div className="animate-marquee flex items-center gap-8 min-w-full flex-shrink-0">
        {[...Array(repeat)].map((_, i) => (
          <span key={i} className="text-xl md:text-2xl font-display font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
            {text} <span className="text-trend-lime mx-4">•</span>
          </span>
        ))}
      </div>
      {/* Second copy of content for seamless loop */}
      <div className="animate-marquee flex items-center gap-8 min-w-full flex-shrink-0" aria-hidden="true">
        {[...Array(repeat)].map((_, i) => (
          <span key={i} className="text-xl md:text-2xl font-display font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
            {text} <span className="text-trend-lime mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;