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

    const num = 20;
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
      pulseSpeed: number;
    }

    const getRandomColor = () => {
      const h = Math.floor(Math.random() * 360);
      const s = Math.floor(Math.random() * 30) + 50;
      const l = Math.floor(Math.random() * 20) + 50;
      return `hsl(${h}, ${s}%, ${l}%)`;
    };

    let rects: Rect[] = [];

    const init = () => {
      rects = [];
      for (let i = 0; i < num; i++) {
        rects.push({
          x: Math.random() * width * 1.5 - width * 0.25,
          y: Math.random() * height * 1.5 - height * 0.25,
          w: Math.random() * 1000 + 1000,
          h: Math.random() * 15 + 3,      // Very thin elegant lines
          speed: Math.random() * 3.5 + 2.0, // High speed for energy
          color: getRandomColor(),
          blend: 'screen',
          opacity: Math.random() * 0.18 + 0.12,
          pulseSpeed: Math.random() * 0.03 + 0.01
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
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() / 1000;

      rects.forEach(rect => {
        rect.x += Math.cos(angle) * rect.speed;
        rect.y += Math.sin(angle) * rect.speed;

        const dynamicOpacity = rect.opacity + Math.sin(time * rect.pulseSpeed * 10) * 0.06;

        const bound = 2000;
        if (rect.x < -bound) rect.x = width + bound;
        if (rect.x > width + bound) rect.x = -bound;
        if (rect.y < -bound) rect.y = height + bound;
        if (rect.y > height + bound) rect.y = -bound;

        drawSkewedRect(rect.x, rect.y, rect.w, rect.h, rect.color, dynamicOpacity, rect.blend);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />;
};

export default GenerativeBackground;