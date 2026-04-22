import { Helmet } from 'react-helmet-async';
import { useProfileContent } from '../content/profileContent';

const Seo = () => {
  const { site } = useProfileContent();
  const title = `${site.brand} | ${site.seoTitle}`;
  const description = site.seoDescription;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default Seo;
