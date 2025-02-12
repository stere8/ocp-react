import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Seo = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t('meta.ogTitle')}</title>
      <meta name="description" content={t('meta.description')} />
      <meta property="og:title" content={t('meta.ogTitle')} />
    </Helmet>
  );
};

export default Seo;