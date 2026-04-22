import { useTranslation } from 'react-i18next';
import en from './profileContent.en';
import es from './profileContent.es';
import fr from './profileContent.fr';
import pl from './profileContent.pl';

const CONTENT_BY_LANGUAGE = {
  en,
  es,
  fr,
  pl
};

const normalizeLanguage = (language) => (language || 'en').split('-')[0].toLowerCase();

export const getProfileContent = (language = 'en') => {
  const normalizedLanguage = normalizeLanguage(language);
  return CONTENT_BY_LANGUAGE[normalizedLanguage] || en;
};

export const useProfileContent = () => {
  const { i18n } = useTranslation();
  return getProfileContent(i18n.resolvedLanguage || i18n.language);
};

export default getProfileContent;
