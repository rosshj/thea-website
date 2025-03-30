"use client";

import React from 'react';

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
  offset?: number;
}

export default function ScrollButton({ targetId, className, children, offset = 64 }: ScrollButtonProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleScroll}
      className={className}
    >
      {children}
    </a>
  );
} 