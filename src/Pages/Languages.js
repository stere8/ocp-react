import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Languages.css'
import { Helmet } from 'react-helmet';

const Languages = () => {
  const { t } = useTranslation();

  return (
    <div className="container hero-section-bis">
      <Helmet>
        <title>Languages | Oracle Consults Portfolio</title>
        <meta name="description" content="Explore the language proficiency and tutoring services offered by Oreste TWIZEYIMANA, including English, French, Kinyarwanda, and Polish." />
      </Helmet>
      <h1>{t('LanguagesTitle')}</h1>
      <p>{t('LanguagesDescription')}</p>
      <h2>{t('LanguageProficiencyHeading')}</h2>
      <ul>
        <li><strong>{t('EnglishProficiency')}</strong></li>
        <li><strong>{t('FrenchProficiency')}</strong></li>
        <li><strong>{t('KinyarwandaProficiency')}</strong></li>
        <li><strong>{t('PolishProficiency')}</strong></li>
      </ul>
      <h2>{t('TutoringExperienceHeading')}</h2>
      <p>{t('TutoringExperienceDescription')}</p>
      <h2>{t('MyServicesHeading')}</h2>
      <p>{t('MyServicesDescription')}</p>
      <ul>
        <li>{t('OneOnOneTutoring')}</li>
        <li>{t('GroupClasses')}</li>
        <li>{t('OnlineTutoring')}</li>
        <li>{t('ExamPreparation')}</li>
        <li>{t('ConversationPractice')}</li>
      </ul>
      <p>{t('TranslationServices')}</p>
      <h2>{t('MyApproachHeading')}</h2>
      <p>{t('MyApproachDescription')}</p>
      <h2>{t('TestimonialsHeading')}</h2>
      <blockquote>{t('Testimonial1')}</blockquote>
      <blockquote>{t('Testimonial2')}</blockquote>
      <p><a href="https://buki.org.pl/en/user-33204/#users_reviews">{t('MoreTestimonialsLink')}</a></p>
      <h2>{t('ContactMeHeading')}</h2>
      <p>{t('ContactMeDescription')} <a href="/ocp-react/src/Pages/Contact">{t('LetsConnectHeading')}</a></p>
    </div>
  );
};

export default Languages;