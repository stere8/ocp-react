import React from 'react';
import '../Styles/Expertise.css';
import profileContent from '../content/profileContent';

const Expertise = () => {
  const profileExpertise = profileContent.expertise;

  return (
    <div className="container expertise-page">
      <section className="hero-section expertise-hero">
        <span className="section-kicker">{profileExpertise.eyebrow}</span>
        <h1>{profileExpertise.title}</h1>
        <p>{profileExpertise.intro}</p>
      </section>

      <section className="skills-section expertise-skills-grid">
        {profileExpertise.skillGroups.map((group) => (
          <article key={group.title} className="skill-box expertise-skill-box">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span className="custom-bullet">&lt;/&gt;</span> {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="profile-extra-section">
        <div className="profile-extra-card">
          <h2>{profileExpertise.highlightsTitle}</h2>
          <ul>
            {profileExpertise.highlights.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-extra-card">
          <h2>{profileExpertise.workStyleTitle}</h2>
          <ul>
            {profileExpertise.workStyle.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-extra-card">
          <h2>{profileExpertise.communicationTitle}</h2>
          <ul>
            {profileExpertise.communication.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-extra-card">
          <h2>{profileExpertise.domainsTitle}</h2>
          <ul>
            {profileExpertise.domains.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="direction-section">
        <div className="profile-extra-card direction-card">
          <h2>{profileExpertise.currentFocusTitle}</h2>
          <ul>
            {profileExpertise.currentFocus.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
