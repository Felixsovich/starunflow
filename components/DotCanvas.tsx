import React, { useEffect, useRef } from 'react';

const DotCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let time = 0;

    const dots: {x: number, y: number, basePath: number}[] = [];
    const spacing = 40; // Расстояние между точками

    // Инициализация точек
    const initDots = () => {
      dots.length = 0;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            basePath: Math.sin(i * 0.1) + Math.cos(j * 0.1) // Базовая фаза для волны
          });
        }
      }
    };

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initDots();
    };

    window.addEventListener('resize', resize);
    initDots();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      ctx.fillStyle = '#dbf246'; // trend-lime color

      dots.forEach(dot => {
        // Вычисляем размер точки на основе синусоиды (эффект дыхания/волны)
        const wave = Math.sin(dot.basePath + time) * 0.5 + 0.5; // от 0 до 1
        const size = wave * 2.5; // Максимальный размер 2.5px
        const opacity = wave * 0.5 + 0.1; // Прозрачность от 0.1 до 0.6

        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(dot.x + spacing/2, dot.y + spacing/2, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default DotCanvas;