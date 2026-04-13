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

      <section className="skills-section expertise-services-grid">
        {profileExpertise.serviceGroups.map((group) => (
          <article key={group.title} className="expertise-service-card">
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

      <section className="consulting-process-section">
        <div className="process-list-card">
          <span className="section-kicker">Delivery</span>
          <h2>{profileExpertise.processTitle}</h2>
          <ol>
            {profileExpertise.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="profile-extra-section">
        <div className="profile-extra-card">
          <h2>{profileExpertise.profileTitle}</h2>
          <ul>
            {profileExpertise.profile.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-extra-card">
          <h2>{profileExpertise.differentiatorsTitle}</h2>
          <ul>
            {profileExpertise.differentiators.map((item) => (
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
