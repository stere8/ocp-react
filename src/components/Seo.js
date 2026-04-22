import { Helmet } from 'react-helmet-async';
import profileContent from '../content/profileContent';

const Seo = () => {
  const { site } = profileContent;
  const title = `${site.brand} | Backend systems consulting by ${site.founder}`;
  const description =
    'Founder-led backend systems consulting for inventory, reservation, integration, reporting, and workflow-heavy software, backed by production .NET experience and systems thinking.';

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
