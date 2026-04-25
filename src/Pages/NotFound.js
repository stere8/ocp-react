import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StatusPage from '../components/StatusPage';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <StatusPage
      eyebrow={t('pages.error.eyebrow')}
      title={t('pages.error.notFoundTitle')}
      message={t('pages.error.notFoundMessage')}
      className="status-page--not-found"
    >
      <Link to="/" className="btn primary-cta">
        {t('pages.error.homeCta')}
      </Link>
      <Link to="/contact" className="btn btn-outline-primary">
        {t('pages.error.contactCta')}
      </Link>
    </StatusPage>
  );
};

export default NotFound;
