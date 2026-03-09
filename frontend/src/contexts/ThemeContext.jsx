import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../data/themes';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const saved = localStorage.getItem('pomodoro-theme');
    return saved || 'monster';
  });

  const theme = themes[themeId] || themes.monster;

  useEffect(() => {
    localStorage.setItem('pomodoro-theme', themeId);
  }, [themeId]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-accent', theme.colors.accent);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}