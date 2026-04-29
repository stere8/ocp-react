import { Helmet } from 'react-helmet-async';
import { matchPath, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProfileContent } from '../content/profileContent';

const DEFAULT_SITE_URL = 'https://oracleconsults.netlify.app';

const compactText = (value = '') => value.replace(/\s+/g, ' ').trim();

const buildTitle = (pageTitle, brand) => `${pageTitle} | ${brand}`;

const getRouteMeta = (pathname, content) => {
  const { site, about, projectsPage, expertise, contact } = content;
  const normalizedPath = pathname.toLowerCase();

  if (normalizedPath === '/' || normalizedPath === '/services') {
    return {
      title: `${site.brand} | ${site.seoTitle}`,
      description: compactText(site.seoDescription),
      type: 'website'
    };
  }

  if (normalizedPath === '/about') {
    return {
      title: buildTitle(about.metaTitle, site.brand),
      description: compactText(about.metaDescription),
      type: 'profile'
    };
  }

  if (normalizedPath === '/projects') {
    return {
      title: buildTitle(projectsPage.eyebrow, site.brand),
      description: compactText(projectsPage.intro),
      type: 'website'
    };
  }

  if (normalizedPath === '/expertise') {
    return {
      title: buildTitle(expertise.eyebrow, site.brand),
      description: compactText(expertise.intro),
      type: 'website'
    };
  }

  if (normalizedPath === '/contact') {
    return {
      title: buildTitle(contact.metaTitle, site.brand),
      description: compactText(contact.metaDescription),
      type: 'website'
    };
  }

  if (normalizedPath === '/blog') {
    return {
      title: buildTitle('Insights', site.brand),
      description:
        'Notes on backend systems, performance, integrations, diagnostics, and operational software engineering.',
      type: 'website'
    };
  }

  if (matchPath('/blog/:id', normalizedPath)) {
    return {
      title: buildTitle('Backend article', site.brand),
      description:
        'A backend systems article from Oracle Consults covering operational software, reliability, integrations, and engineering tradeoffs.',
      type: 'article'
    };
  }

  if (normalizedPath === '/programming') {
    return {
      title: buildTitle('Programming', site.brand),
      description:
        'Programming experience across C#, .NET, ASP.NET Core, SQL Server, React, Angular, Python, and backend system delivery.',
      type: 'website'
    };
  }

  if (normalizedPath === '/languages') {
    return {
      title: buildTitle('Languages', site.brand),
      description:
        'Language proficiency and tutoring support across English, French, Polish, Spanish, and Kinyarwanda.',
      type: 'website'
    };
  }

  return {
    title: `${site.brand} | ${site.seoTitle}`,
    description: compactText(site.seoDescription),
    type: 'website'
  };
};

const Seo = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const content = useProfileContent();
  const { site } = content;
  const metadata = getRouteMeta(location.pathname, content);
  const canonicalUrl = `${DEFAULT_SITE_URL}${location.pathname}`;
  const imageUrl = `${DEFAULT_SITE_URL}/logo.png`;
  const locale = (i18n.resolvedLanguage || i18n.language || 'en').replace('-', '_');

  return (
    <Helmet prioritizeSeoTags>
      <html lang={i18n.resolvedLanguage || i18n.language || 'en'} />
      <title>{metadata.title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={metadata.description} />
      <meta property="og:site_name" content={site.brand} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
