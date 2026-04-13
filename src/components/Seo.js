import { Helmet } from 'react-helmet-async';

const Seo = () => {
  const title = 'Backend & Systems Engineering Consulting | Oreste Twizeyimana';
  const description =
    'Backend and systems engineering consulting for APIs, integrations, data flows, SQL-backed systems, and workflow-heavy software, backed by 2.5+ years of production .NET experience.';

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
