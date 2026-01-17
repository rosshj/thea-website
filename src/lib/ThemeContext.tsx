'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'system' | 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && ['system', 'light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Update resolved theme and apply to document
  useEffect(() => {
    if (!mounted) return;

    const resolved = theme === 'system' ? getSystemTheme() : theme;
    setResolvedTheme(resolved);

    // Apply theme class to html element
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);

    // Update meta theme-color
    const metaThemeColor = document.querySelectorAll('meta[name="theme-color"]');
    metaThemeColor.forEach((meta) => {
      meta.setAttribute('content', resolved === 'dark' ? '#0a0a0a' : '#ffffff');
    });

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const resolved = getSystemTheme();
      setResolvedTheme(resolved);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(resolved);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  // Prevent flash of incorrect theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
