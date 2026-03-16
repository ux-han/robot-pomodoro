import { useState, useEffect } from 'react';

const STORAGE_KEY = 'theme-preference';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        // Initialize from localStorage or default to 'light'
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'light' || stored === 'dark' || stored === 'pink' || stored === 'blue' || stored === 'purple') {
                return stored;
            }
        }
        return 'light';
    });

    // Apply theme class to document.documentElement
    useEffect(() => {
        const root = document.documentElement;

        // Remove all theme classes
        root.classList.remove('light', 'dark', 'pink', 'blue', 'purple');

        // Add the current theme class
        root.classList.add(theme);

        // Persist to localStorage
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return { theme, setTheme };
}