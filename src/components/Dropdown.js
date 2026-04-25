import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Dropdown.css';

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'pl', label: 'Polski' }
];

const getLanguageCode = (language) => (language || 'en').split('-')[0].toLowerCase();

const Dropdown = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const currentLanguageCode = getLanguageCode(i18n.resolvedLanguage || i18n.language);
  const currentLanguage =
    LANGUAGE_OPTIONS.find((option) => option.code === currentLanguageCode) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (languageCode) => {
    setIsOpen(false);

    if (languageCode !== currentLanguageCode) {
      i18n.changeLanguage(languageCode);
    }
  };

  return (
    <div className="language-dropdown" ref={containerRef}>
      <button
        type="button"
        className={`language-dropdown__toggle${isOpen ? ' is-open' : ''}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('pages.header.LanguageLabel')}
      >
        <span className="language-dropdown__meta">
          <span className="language-dropdown__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.75 12h16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3.75c2.07 2.26 3.14 5.24 3 8.25.14 3.01-.93 5.99-3 8.25-2.07-2.26-3.14-5.24-3-8.25-.14-3.01.93-5.99 3-8.25Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="language-dropdown__copy">
            <span className="language-dropdown__label">{t('pages.header.LanguageLabel')}</span>
            <span className="language-dropdown__value">{currentLanguage.label}</span>
          </span>
        </span>
        <span className="language-dropdown__chevron" aria-hidden="true" />
      </button>

      {isOpen && (
        <ul className="language-dropdown__menu" role="listbox" aria-label={t('pages.header.LanguageLabel')}>
          {LANGUAGE_OPTIONS.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                className={`language-dropdown__option${
                  option.code === currentLanguageCode ? ' is-active' : ''
                }`}
                onClick={() => handleSelect(option.code)}
                role="option"
                aria-selected={option.code === currentLanguageCode}
                lang={option.code}
              >
                <span>{option.label}</span>
                {option.code === currentLanguageCode && (
                  <span className="language-dropdown__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="m5.25 12.75 4.5 4.5 9-10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
