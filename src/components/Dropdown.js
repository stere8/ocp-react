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
  const { i18n } = useTranslation();
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
        aria-label="Choose language"
      >
        <span>{currentLanguage.label}</span>
        <span className="language-dropdown__chevron" aria-hidden="true" />
      </button>

      {isOpen && (
        <ul className="language-dropdown__menu" role="listbox" aria-label="Available languages">
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
                    ✓
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
