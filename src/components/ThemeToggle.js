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
      aria-pressed={isDarkTheme}
    >
      <span className="theme-toggle__meta">
        <span className="theme-toggle__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M20.25 14.25A8.25 8.25 0 0 1 9.75 3.75a8.25 8.25 0 1 0 10.5 10.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="theme-toggle__copy">
          <span className="theme-toggle__label">{t('pages.header.ThemeLabel')}</span>
          <span className="theme-toggle__value">
            {theme === 'dark'
              ? t('pages.header.ThemeDark')
              : t('pages.header.ThemeLight')}
          </span>
        </span>
      </span>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
};

export default ThemeToggle;
