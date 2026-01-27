import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h1>{t('pages.about.AboutmeHeading')}</h1>
          <p>{t('pages.about.AboutmeDescription1')}</p>
          <p>{t('pages.about.AboutmeDescription2')}</p>
          <p>{t('pages.about.AboutmeDescription3')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
