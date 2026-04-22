import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const THEME_STORAGE_KEY = 'preferredTheme';
const ThemeContext = createContext({
  isDarkTheme: false,
  theme: 'light',
  toggleTheme: () => {}
});

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }

  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = theme;
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }

    const themeMeta = typeof document !== 'undefined'
      ? document.querySelector('meta[name="theme-color"]')
      : null;

    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#020617' : '#f4f9ff');
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      isDarkTheme: theme === 'dark',
      theme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
