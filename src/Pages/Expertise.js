import React from 'react';
import '../Styles/Expertise.css';
import { useProfileContent } from '../content/profileContent';
import PageSectionNav from '../components/PageSectionNav';

const Expertise = () => {
  const { expertise } = useProfileContent();
  const sectionNavItems = [
    { id: 'expertise-services', label: expertise.eyebrow },
    { id: 'expertise-packages', label: expertise.sectionLabels.packages },
    { id: 'expertise-metrics', label: expertise.sectionLabels.metrics },
    { id: 'expertise-fit', label: expertise.sectionLabels.bestFit },
    { id: 'expertise-approach', label: expertise.sectionLabels.approach }
  ];

  return (
    <div className="container expertise-page">
      <section id="expertise-top" className="hero-section expertise-hero page-section-anchor">
        <span className="section-kicker">{expertise.eyebrow}</span>
        <h1>{expertise.title}</h1>
        <p>{expertise.intro}</p>
      </section>

      <PageSectionNav items={sectionNavItems} topId="expertise-top" />

      <section id="expertise-services" className="services-showcase-section page-section-anchor">
        <div className="expertise-services-grid">
          {expertise.serviceGroups.map((group) => (
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
        </div>
      </section>

      <section id="expertise-packages" className="package-showcase-section page-section-anchor">
        <div className="section-heading">
          <span className="section-kicker">{expertise.sectionLabels.packages}</span>
          <h2>{expertise.packageTitle}</h2>
          <p>{expertise.packageIntro}</p>
        </div>
        <div className="package-grid">
          {expertise.packages.map((item) => (
            <article key={item.title} className="package-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise-metrics" className="metrics-section page-section-anchor">
        <div className="section-heading">
          <span className="section-kicker">{expertise.sectionLabels.metrics}</span>
          <h2>{expertise.metricsTitle}</h2>
        </div>
        <div className="metrics-grid">
          {expertise.metrics.map((item) => (
            <article key={item.title} className="metric-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fit-and-process-section page-section-anchor">
        <div id="expertise-fit" className="fit-card page-section-anchor">
          <span className="section-kicker">{expertise.sectionLabels.bestFit}</span>
          <h2>{expertise.whoIHelpTitle}</h2>
          <ul>
            {expertise.whoIHelp.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="expertise-approach" className="process-card-wrapper page-section-anchor">
          <span className="section-kicker">{expertise.sectionLabels.approach}</span>
          <h2>{expertise.processTitle}</h2>
          <div className="process-grid">
            {expertise.process.map((item, index) => (
              <article key={item.title} className="process-card">
                <span className="process-step">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-extra-section page-section-anchor">
        <div className="profile-extra-card">
          <h2>{expertise.differentiatorsTitle}</h2>
          <ul>
            {expertise.differentiators.map((item) => (
              <li key={item}>
                <span className="custom-bullet">&lt;/&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-extra-card direction-card">
          <h2>{expertise.focusTitle}</h2>
          <ul>
            {expertise.focus.map((item) => (
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
