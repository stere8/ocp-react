import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';
import translationPL from './locales/pl/translation.json';

const supportedLanguages = ['en', 'es', 'fr', 'pl'];

const normalizeLanguage = (language) => {
  const normalized = (language || 'en').split('-')[0].toLowerCase();
  return supportedLanguages.includes(normalized) ? normalized : 'en';
};

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const storedLanguage = window.localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      return normalizeLanguage(storedLanguage);
    }
  }

  if (typeof navigator !== 'undefined') {
    return normalizeLanguage(navigator.language);
  }

  return 'en';
};

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  fr: { translation: translationFR },
  pl: { translation: translationPL },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (language) => {
  const normalized = normalizeLanguage(language);

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('preferredLanguage', normalized);
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalized;
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = normalizeLanguage(i18n.resolvedLanguage || i18n.language);
}

export default i18n;
