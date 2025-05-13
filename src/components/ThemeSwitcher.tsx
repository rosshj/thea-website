'use client';

import { useEffect } from 'react';

export default function ThemeSwitcher() {
  useEffect(() => {
    const updateFavicon = () => {
      const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const sizes = ['16x16', '32x32', '48x48', '96x96'];
      
      sizes.forEach(size => {
        const iconLinks = document.querySelectorAll(`link[sizes="${size}"]`);
        iconLinks.forEach(link => {
          if (link instanceof HTMLLinkElement) {
            link.href = darkMode ? `/icon-dark-${size}.png` : `/icon-light-${size}.png`;
          }
        });
      });
    };
    
    // Run initially
    updateFavicon();
    
    // Set up event listener for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', updateFavicon);
  }, []);
  
  return null; // This component doesn't render anything
} 