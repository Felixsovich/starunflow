import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "", repeat = 4 }) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap bg-base-dark ${className}`}>
      {/* First copy */}
      <div className="animate-marquee flex items-center gap-12 min-w-full flex-shrink-0">
        {[...Array(repeat)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-display font-bold uppercase text-transparent stroke-text opacity-30">
            {text}
          </span>
        ))}
      </div>
      {/* Second copy */}
      <div className="animate-marquee flex items-center gap-12 min-w-full flex-shrink-0" aria-hidden="true">
        {[...Array(repeat)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-display font-bold uppercase text-transparent stroke-text opacity-30">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;