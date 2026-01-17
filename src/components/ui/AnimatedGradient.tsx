'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/ThemeContext';

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradient({ children, className = '' }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    
    // Different colors based on theme
    const lightColors = [
      { r: 124, g: 196, b: 228 },  // Blue
      { r: 255, g: 222, b: 89 },   // Yellow
      { r: 86, g: 204, b: 242 },   // Light blue
    ];
    
    const darkColors = [
      { r: 180, g: 220, b: 250 },  // Lighter blue
      { r: 255, g: 240, b: 150 },  // Lighter yellow
      { r: 150, g: 230, b: 255 },  // Lighter cyan
    ];
    
    const colors = resolvedTheme === 'dark' ? darkColors : lightColors;

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
  }, [resolvedTheme]);

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