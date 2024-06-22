import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_njpumpf', // Replace with your EmailJS service ID
      'template_cmtkw4k', // Replace with your EmailJS template ID
      formData,
      'jbwNUbuZVBETFQtqM' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email.');
    });
  };

  return (
    <div className="container hero-section-bis">
      <div className="row">
        <div className="col-md-12">
          <h2>{t('LetsConnectHeading')}</h2>
          <p>{t('ContactFormDescription')}</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{t('YourNameLabel')}</label>
              <input id="name" name="from_name" type="text" value={formData.user_name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">{t('EmailLabel')}</label>
              <input id="email" name="from_email" type="email" value={formData.user_email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">{t('MessageLabel')}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">{t('SendButton')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;