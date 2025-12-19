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

    const num = 18; // Slightly fewer for better focus on content
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
      '#111111'  // Subtle dark
    ];

    let rects: Rect[] = [];

    const init = () => {
      rects = [];
      for (let i = 0; i < num; i++) {
        rects.push({
          x: Math.random() * width,
          y: Math.random() * height,
          w: Math.random() * 800 + 400,
          h: Math.random() * 20 + 2,
          speed: Math.random() * 1.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          blend: 'screen',
          opacity: Math.random() * 0.15 + 0.05
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

      rects.forEach(rect => {
        rect.x += Math.cos(angle) * rect.speed;
        rect.y += Math.sin(angle) * rect.speed;

        // Wrap around with large margins
        if (rect.x < -1000) rect.x = width + 500;
        if (rect.x > width + 1000) rect.x = -500;
        if (rect.y < -1000) rect.y = height + 500;
        if (rect.y > height + 1000) rect.y = -500;

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

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />;
};

export default GenerativeBackground;