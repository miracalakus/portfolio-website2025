'use client';

import { useEffect, useState } from 'react';

type Theme = 'auto' | 'light' | 'dark' | 'party';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('auto');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme || 'auto';
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (localStorage.getItem('theme') === 'auto') {
        applyTheme('auto');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (mode: Theme) => {
    const html = document.documentElement;
    html.removeAttribute('data-theme');

    if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      html.setAttribute('data-theme', mode);
    }
  };

  const handleChange = (value: Theme) => {
    localStorage.setItem('theme', value);
    setTheme(value);
    applyTheme(value);
  };

  return (
    <select
      value={theme}
      onChange={(e) => handleChange(e.target.value as Theme)}
      className="btn"
    >
      <option value="auto">🌓</option>
      <option value="light">🔆</option>
      <option value="dark">🌛</option>
      <option value="party">🎉</option>
    </select>
  );
};

export default ThemeToggle;
