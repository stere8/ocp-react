import '../Styles/Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProfileContent } from '../content/profileContent';

const Home = () => {
  const { site, home } = useProfileContent();

  return (
    <div className="container home-page">
      <section className="hero-section home-hero">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <span className="section-kicker">{home.eyebrow}</span>
            <h1>{home.title}</h1>
            <p className="lead">{home.intro}</p>
            <p className="hero-support">{home.heroSupport}</p>

            <div className="hero-focus-list">
              {home.focusAreas.map((item) => (
                <span key={item} className="hero-focus-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="cta-buttons">
              <Button href={site.calLink} target="_blank" className="primary-cta">
                {home.ctaLabel}
              </Button>
              <Button as={Link} to="/projects" variant="outline-primary">
                {home.secondaryCtaLabel}
              </Button>
            </div>
          </div>

          <aside className="hero-proof-card">
            <span className="section-kicker">{home.sectionLabels.credibility}</span>
            <h2>{home.trustTitle}</h2>
            <p>{home.trustSummary}</p>
            <ul>
              {home.trustPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="proof-bar-section">
        <div className="proof-bar-grid">
          {home.proofBar.map((item) => (
            <article key={item.label} className="proof-bar-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="problem-section">
        <div className="section-heading">
          <span className="section-kicker">{home.sectionLabels.problemsSolved}</span>
          <h2>{home.problemTitle}</h2>
          <p>{home.problemIntro}</p>
        </div>
        <div className="problem-grid">
          {home.problems.map((item) => (
            <article key={item.title} className="problem-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="section-heading">
          <span className="section-kicker">{home.sectionLabels.story}</span>
          <h2>{home.storyTitle}</h2>
        </div>
        <div className="story-grid">
          {home.storyCards.map((item) => (
            <article key={item.title} className="story-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="package-section">
        <div className="section-heading">
          <span className="section-kicker">{home.sectionLabels.packages}</span>
          <h2>{home.packageTitle}</h2>
          <p>{home.packageIntro}</p>
        </div>
        <div className="package-grid">
          {home.packages.map((item) => (
            <article key={item.title} className="package-card">
              <div className="package-card-header">
                <h3>{item.title}</h3>
                <span>{item.format}</span>
              </div>
              <p className="package-ideal">
                <strong>{home.sectionLabels.bestFor}:</strong> {item.idealFor}
              </p>
              <ul>
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
              <p className="package-outcome">
                <strong>{home.sectionLabels.outcome}:</strong> {item.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <span className="section-kicker">{home.sectionLabels.proof}</span>
          <h2>{home.featuredTitle}</h2>
          <p>{home.featuredIntro}</p>
        </div>
        <div className="featured-grid">
          {home.featuredProof.map((item) => (
            <article key={item.title} className="featured-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Button as={Link} to={item.link} variant="outline-primary">
                {item.linkLabel}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="metrics-section">
        <div className="section-heading">
          <span className="section-kicker">{home.sectionLabels.metrics}</span>
          <h2>{home.metricsTitle}</h2>
        </div>
        <div className="metrics-grid">
          {home.metrics.map((item) => (
            <article key={item.title} className="metric-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="communication-section">
        <div className="communication-card">
          <span className="section-kicker">{home.sectionLabels.communication}</span>
          <h2>{home.communicationTitle}</h2>
          <p>{home.communication}</p>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="contact-cta-card">
          <div>
            <span className="section-kicker">{home.sectionLabels.contact}</span>
            <h2>{home.contactTitle}</h2>
            <p>{home.contactText}</p>
          </div>
          <div className="contact-cta-actions">
            <Button as={Link} to="/contact" className="primary-cta">
              {home.contactPrimaryLabel}
            </Button>
            <Button href={site.calLink} target="_blank" variant="outline-primary">
              {home.contactSecondaryLabel}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
