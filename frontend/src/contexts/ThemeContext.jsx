import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../data/themes";

const ThemeContext = createContext(null);

const STORAGE_KEY = "pomodoro-theme";
const DEFAULT_THEME = "monster";

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && themes[saved] ? saved : DEFAULT_THEME;
  });

  const theme = themes[themeId];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeId);
  }, [themeId]);

  useEffect(() => {
    if (theme?.colors) {
      const root = document.documentElement;
      root.style.setProperty("--color-primary", theme.colors.primary);
      root.style.setProperty("--color-secondary", theme.colors.secondary);
      root.style.setProperty("--color-background", theme.colors.background);
      root.style.setProperty("--color-accent", theme.colors.accent);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}