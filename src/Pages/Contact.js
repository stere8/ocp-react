import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Contact.css'

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container hero-section-bis">
      <div className="row">
        <div className="col-md-12">
          <h2>{t('LetsConnectHeading')}</h2>
          <p>{t('ContactFormDescription')}</p>
          <form method="post">
            <div>
              <label htmlFor="name">{t('YourNameLabel')}</label>
              <input id="name" name="name" type="text" />
            </div>
            <div>
              <label htmlFor="email">{t('EmailLabel')}</label>
              <input id="email" name="email" type="email" />
            </div>
            <div>
              <label htmlFor="message">{t('MessageLabel')}</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">{t('SendButton')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;