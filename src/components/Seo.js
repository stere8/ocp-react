import { Helmet } from 'react-helmet-async';

const Seo = () => {
  const title = 'Oreste Twizeyimana | Backend Engineer | .NET, Python, Systems';
  const description =
    'Backend engineer with 2.5+ years of commercial .NET experience, practical Python tooling work, and a systems mindset grounded in real operational software.';

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
