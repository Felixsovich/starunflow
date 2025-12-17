import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: boolean;
  delay?: number;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

const TextScramble: React.FC<TextScrambleProps> = ({ text, className = "", trigger = true, delay = 0 }) => {
  const [outputText, setOutputText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    // Clear previous timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const startScramble = () => {
      let iteration = 0;
      
      intervalRef.current = window.setInterval(() => {
        setOutputText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }

        iteration += 1/3;
      }, 30);
    };

    if (delay > 0) {
      timeoutRef.current = window.setTimeout(startScramble, delay);
    } else {
      startScramble();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, trigger, delay]);

  return <span className={`font-mono ${className}`}>{outputText}</span>;
};

export default TextScramble;