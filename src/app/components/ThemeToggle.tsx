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
      className="border-3 dark:border-white checked:hidden md:bg-[#D35400] text-white dark:bg-[#CDAA7D] dark:text-black 
      font-secondtitle appearance-none hover:opacity-80 cursor-pointer rounded-full px-5 py-3"
    >
      <option value="auto">🌓</option>
      <option value="light">🔆</option>
      <option value="dark">🌛</option>
      <option value="party">🎉</option>
    </select>
  );
};

export default ThemeToggle;
