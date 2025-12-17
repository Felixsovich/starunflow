import React, { useEffect, useRef } from 'react';

const GenerativeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationId: number;

    const num = 25;
    const degrees = -210;
    const angle = (degrees * Math.PI) / 180;

    interface Rect {
      x: number;
      y: number;
      w: number;
      h: number;
      speed: number;
      color: string;
      blend: GlobalCompositeOperation;
      opacity: number;
    }

    const colors = [
      '#dbf246', // Lime
      '#5e17eb', // Purple
      '#ffffff', // White
      '#1a1a1a'  // Dark
    ];

    let rects: Rect[] = [];

    const init = () => {
      rects = [];
      for (let i = 0; i < num; i++) {
        rects.push({
          x: Math.random() * width,
          y: Math.random() * height,
          w: Math.random() * 600 + 200,
          h: Math.random() * 40 + 5,
          speed: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          blend: Math.random() > 0.5 ? 'overlay' : 'source-over',
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const drawSkewedRect = (x: number, y: number, w: number, h: number, color: string, opacity: number, blend: GlobalCompositeOperation) => {
      ctx.save();
      ctx.globalCompositeOperation = blend;
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      
      const rx = Math.cos(angle) * w;
      const ry = Math.sin(angle) * w;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(rx, ry);
      ctx.lineTo(rx, ry + h);
      ctx.lineTo(0, h);
      ctx.closePath();
      
      ctx.fillStyle = color;
      ctx.shadowBlur = 20;
      ctx.shadowColor = color;
      ctx.fill();
      
      ctx.restore();
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    init();

    const animate = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      rects.forEach(rect => {
        rect.x += Math.cos(angle) * rect.speed;
        rect.y += Math.sin(angle) * rect.speed;

        // Wrap around
        if (rect.x < -800) rect.x = width + 200;
        if (rect.x > width + 800) rect.x = -200;
        if (rect.y < -800) rect.y = height + 200;
        if (rect.y > height + 800) rect.y = -200;

        drawSkewedRect(rect.x, rect.y, rect.w, rect.h, rect.color, rect.opacity, rect.blend);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40" />;
};

export default GenerativeBackground;