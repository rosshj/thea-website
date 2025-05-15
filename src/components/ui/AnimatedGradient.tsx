'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradient({ children, className = '' }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    // Adjusted dark grey colors for more contrast
    const colors = [
      { r: 45, g: 55, b: 70 },   // Lighter grey
      { r: 10, g: 15, b: 25 },   // Darker grey
      { r: 45, g: 55, b: 70 },   // Lighter grey (to loop smoothly)
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      time += 0.001;
      const width = canvas.width;
      const height = canvas.height;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Create a gradient that spans the entire width
      const gradient = ctx.createLinearGradient(0, 0, width, 0);

      // Add color stops with animation
      const numStops = 5;
      for (let i = 0; i < numStops; i++) {
        const stop = i / (numStops - 1);
        const colorIndex = Math.floor((stop + time) % 1 * (colors.length - 1));
        const colorPercent = ((stop + time) % 1 * (colors.length - 1)) % 1;

        const r = Math.floor(
          colors[colorIndex].r * (1 - colorPercent) +
          colors[colorIndex + 1].r * colorPercent
        );
        const g = Math.floor(
          colors[colorIndex].g * (1 - colorPercent) +
          colors[colorIndex + 1].g * colorPercent
        );
        const b = Math.floor(
          colors[colorIndex].b * (1 - colorPercent) +
          colors[colorIndex + 1].b * colorPercent
        );

        gradient.addColorStop(stop, `rgb(${r}, ${g}, ${b})`);
      }

      // Fill the entire canvas with the gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 