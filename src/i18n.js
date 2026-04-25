import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';
import translationPL from './locales/pl/translation.json';

const supportedLanguages = ['en', 'es', 'fr', 'pl'];
const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
const LANGUAGE_COOKIE_NAME = 'preferredLanguage';
const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const normalizeLanguage = (language) => {
  const normalized = (language || 'en').split('-')[0].toLowerCase();
  return supportedLanguages.includes(normalized) ? normalized : 'en';
};

const readStoredLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    return null;
  }
};

const readCookieLanguage = () => {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookies = document.cookie ? document.cookie.split(';') : [];
  const languageCookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`${LANGUAGE_COOKIE_NAME}=`)
  );

  if (!languageCookie) {
    return null;
  }

  return decodeURIComponent(languageCookie.split('=').slice(1).join('='));
};

const persistLanguage = (language) => {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      // Ignore storage failures and fall back to the cookie.
    }
  }

  if (typeof document !== 'undefined') {
    document.cookie =
      `${LANGUAGE_COOKIE_NAME}=${encodeURIComponent(language)}; ` +
      `max-age=${LANGUAGE_COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
  }
};

const getInitialLanguage = () => {
  const storedLanguage = readStoredLanguage();
  if (storedLanguage) {
    return normalizeLanguage(storedLanguage);
  }

  const cookieLanguage = readCookieLanguage();
  if (cookieLanguage) {
    return normalizeLanguage(cookieLanguage);
  }

  if (typeof navigator !== 'undefined') {
    const preferredLanguage = navigator.languages?.[0] || navigator.language;
    return normalizeLanguage(preferredLanguage);
  }

  return 'en';
};

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  fr: { translation: translationFR },
  pl: { translation: translationPL }
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
      escapeValue: false
    }
  });

i18n.on('languageChanged', (language) => {
  const normalized = normalizeLanguage(language);
  persistLanguage(normalized);

  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalized;
  }
});

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key !== LANGUAGE_STORAGE_KEY || !event.newValue) {
      return;
    }

    const normalized = normalizeLanguage(event.newValue);
    if (normalized !== normalizeLanguage(i18n.resolvedLanguage || i18n.language)) {
      i18n.changeLanguage(normalized);
    }
  });
}

if (typeof document !== 'undefined') {
  document.documentElement.lang = normalizeLanguage(i18n.resolvedLanguage || i18n.language);
}

export default i18n;
