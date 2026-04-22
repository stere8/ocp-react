import React from 'react';
import { Helmet } from 'react-helmet';
import profileContent from '../content/profileContent';
import '../Styles/Aboutme.css';

const AboutMe = () => {
  const { site, about } = profileContent;

  return (
    <div className="container profile-page">
      <Helmet>
        <title>About | {site.brand}</title>
        <meta
          name="description"
          content="Founder-led profile of Oreste Twizeyimana: backend engineer with production .NET experience, mechatronics-shaped systems thinking, and strong communication skills."
        />
      </Helmet>

      <section className="hero-section">
        <p className="lead">{about.eyebrow}</p>
        <h1>{about.title}</h1>
        <p>{about.lead}</p>
      </section>

      <section className="profile-practice-note">
        <span className="section-kicker">{site.brand}</span>
        <p>
          {site.tagline}. Based in {site.location}. {site.availability}.
        </p>
      </section>

      <section className="profile-intro">
        {about.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="profile-list-card">
        <h2>{about.quickFactsTitle}</h2>
        <ul>
          {about.quickFacts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="profile-sections">
        {about.sections.map((section) => (
          <article key={section.title} className="profile-section-card">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="profile-bottom-grid">
        <div className="profile-list-card">
          <h2>{about.valuesTitle}</h2>
          <ul>
            {about.values.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="profile-list-card">
          <h2>{about.directionTitle}</h2>
          <ul>
            {about.direction.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="profile-closing">
        <p>{about.closing}</p>
      </section>
    </div>
  );
};

export default AboutMe;
