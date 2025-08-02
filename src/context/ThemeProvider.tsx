import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { ThemeName } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>('theme1');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeName;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Save theme to localStorage on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
