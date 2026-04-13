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
              <Button as={Link} to="/about" className="primary-cta">
                {profile.ctaLabel}
              </Button>
              <Button as={Link} to="/projects" variant="outline-primary">
                View projects
              </Button>
            </div>
          </div>

          <aside className="hero-proof-card">
            <span className="section-kicker">Core Identity</span>
            <h2>Production engineer, systems thinker, and technical explainer.</h2>
            <p>
              The strongest pattern across the profile is simple: practical backend
              engineering for real workflows, backed by clear communication and
              architecture discipline.
            </p>
            <ul>
              {profile.journeyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="profile-summary-section">
        <div className="section-heading">
          <span className="section-kicker">Evidence</span>
          <h2>What the profile already proves</h2>
          <p>
            This is not a portfolio built on tutorials or vague positioning. The
            strongest evidence comes from production backend work, a serious thesis
            project, and a repeated pattern of structured systems thinking.
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

      <section className="profile-story-section">
        <div className="section-heading">
          <span className="section-kicker">My Story</span>
          <h2>{profile.storyTitle}</h2>
        </div>
        <div className="profile-story-grid">
          {profile.storyCards.map((card) => (
            <article key={card.title} className="profile-story-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-pillars-section">
        <div className="section-heading">
          <span className="section-kicker">Strengths</span>
          <h2>{profile.pillarsTitle}</h2>
        </div>
        <div className="profile-pillars-grid">
          {profile.pillars.map((pillar) => (
            <article key={pillar.title} className="profile-pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
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
    </div>
  );
};

export default Home;
