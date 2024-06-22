import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h1>{t('AboutOresteHeading')}</h1>
          <p>{t('AboutOresteDescription1')}</p>
          <p>{t('AboutOresteDescription2')}</p>
          <p>{t('AboutOresteDescription3')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;