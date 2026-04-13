import '../Styles/Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileContent from '../content/profileContent';

const Home = () => {
  const profile = profileContent.home;

  return (
    <div className="container home-page">
      <section className="hero-section home-hero">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <span className="section-kicker">{profile.eyebrow}</span>
            <h1>{profile.title}</h1>
            <p className="lead">{profile.intro}</p>
            <p className="hero-support">{profile.heroSupport}</p>

            <div className="hero-focus-list">
              {profile.focusAreas.map((item) => (
                <span key={item} className="hero-focus-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="cta-buttons">
              <Button
                href="https://cal.com/t.oreste?timezone=Europe%2FWarsaw"
                target="_blank"
                className="primary-cta"
              >
                {profile.ctaLabel}
              </Button>
              <Button as={Link} to="/projects" variant="outline-primary">
                {profile.secondaryCtaLabel}
              </Button>
            </div>
          </div>

          <aside className="hero-proof-card">
            <span className="section-kicker">Credibility</span>
            <h2>{profile.trustTitle}</h2>
            <p>{profile.trustSummary}</p>
            <ul>
              {profile.trustPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="profile-summary-section">
        <div className="section-heading">
          <span className="section-kicker">Proof</span>
          <h2>Reference points behind the consulting offer</h2>
          <p>
            The offer is anchored in production backend work, operationally grounded
            projects, and a systems mindset that has been consistent across both
            commercial experience and independent builds.
          </p>
        </div>

        <div className="profile-stats-grid">
          {profile.stats.map((item) => (
            <div key={item.label} className="profile-stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="value-section">
        <div className="section-heading">
          <span className="section-kicker">Value</span>
          <h2>{profile.valueTitle}</h2>
          <p>{profile.valueIntro}</p>
        </div>
        <div className="value-grid">
          {profile.valuePoints.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="section-heading">
          <span className="section-kicker">Positioning</span>
          <h2>{profile.whyTitle}</h2>
        </div>
        <div className="why-grid">
          {profile.whyParagraphs.map((paragraph, index) => (
            <article key={index} className="why-card">
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <span className="section-kicker">Offer</span>
          <h2>{profile.servicesTitle}</h2>
        </div>
        <div className="services-grid">
          {profile.services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <span className="section-kicker">Approach</span>
          <h2>{profile.processTitle}</h2>
        </div>
        <div className="process-grid">
          {profile.process.map((step, index) => (
            <article key={step.title} className="process-card">
              <span className="process-step">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-focus-section">
        <div className="section-heading">
          <span className="section-kicker">Direction</span>
          <h2>{profile.currentFocusTitle}</h2>
          <p>{profile.currentFocusIntro}</p>
        </div>
        <div className="profile-focus-grid">
          {profile.currentFocus.map((item) => (
            <article key={item.title} className="profile-focus-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="communication-section">
        <div className="communication-card">
          <span className="section-kicker">Communication</span>
          <h2>{profile.communicationTitle}</h2>
          <p>{profile.communication}</p>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="contact-cta-card">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>{profile.contactTitle}</h2>
            <p>{profile.contactText}</p>
          </div>
          <div className="contact-cta-actions">
            <Button as={Link} to="/contact" className="primary-cta">
              Contact me
            </Button>
            <Button
              href="https://cal.com/t.oreste?timezone=Europe%2FWarsaw"
              target="_blank"
              variant="outline-primary"
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
