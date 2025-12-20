import React, { useEffect, useRef } from 'react';

const DotCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationId: number;

    // Configuration
    const baseColor = { r: 182, g: 186, b: 197 }; // #b6bac5 (Trend Gray)
    const dotDensity = 12000; // Higher number = fewer dots (Performance optim)

    interface Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;
      phase: number; // For breathing offset
      speed: number; // For breathing speed
    }

    let dots: Dot[] = [];

    const init = () => {
      dots = [];
      const dotCount = Math.floor((width * height) / dotDensity);

      for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 0.5, // 0.5 to 2.5px
          density: (Math.random() * 20) + 1,
          color: `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}`,
          phase: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.04
        });
      }
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    init();

    const animate = () => {
      // Clear with slight trail effect for smoothness
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      const time = Date.now() / 1000;

      dots.forEach(dot => {
        // Breathing Logic (Sine wave)
        // Opacity oscillates between 0.1 and 0.6
        const alpha = Math.abs(Math.sin(time * dot.speed + dot.phase)) * 0.5 + 0.1;

        // Slight organic movement (Floating)
        dot.x = dot.baseX + Math.sin(time * 0.5 + dot.phase) * 10;
        dot.y = dot.baseY + Math.cos(time * 0.5 + dot.phase) * 10;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `${dot.color}, ${alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
};

export default DotCanvas;