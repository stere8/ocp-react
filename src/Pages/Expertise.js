import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Expertise.css';

const Expertise = () => {
  const { t } = useTranslation();
  const skills = t('pages.expertise.Skills', { returnObjects: true });
  const industries = t('pages.expertise.Industries.Items', { returnObjects: true });

  return (
    <div className="container">
      <h1>{t('pages.expertise.Title')}</h1>
      <p>{t('pages.expertise.Intro')}</p>

      <section className="skills-section">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skill-box">
            <h2>{skills[category].Title}</h2>
            <p>{skills[category].Description}</p>
            <ul>
              {skills[category].Items.map((item, i) => (
                <li key={i}>
                  <span className="custom-bullet">&lt;/&gt;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="industries-section">
        <h2>{t('pages.expertise.Industries.Title')}</h2>
        <p>{t('pages.expertise.Industries.Description')}</p>
        <ul>
          {industries.map((industry, index) => (
            <li key={index}>
              <span className="custom-bullet">&lt;/&gt;</span> {industry}
            </li>
          ))}
        </ul>
      </section>

      <section className="value-proposition">
        <h2>{t('pages.expertise.ValueProposition.Title')}</h2>
        <p>{t('pages.expertise.ValueProposition.Description')}</p>
      </section>
    </div>
  );
};

export default Expertise;
