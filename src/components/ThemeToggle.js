import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import '../Styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { t } = useTranslation();
  const { isDarkTheme, theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle${isDarkTheme ? ' is-dark' : ''}`}
      onClick={toggleTheme}
      aria-label={t('pages.header.ThemeToggleLabel')}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__text">
        {t('pages.header.ThemeLabel')}: {theme === 'dark'
          ? t('pages.header.ThemeDark')
          : t('pages.header.ThemeLight')}
      </span>
    </button>
  );
};

export default ThemeToggle;
