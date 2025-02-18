import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Contact | Oracle Consults Portfolio</title>
        <meta name="description" content="Get in touch with Oreste TWIZEYIMANA through the contact form. I am available for collaboration, inquiries, and more." />
      </Helmet>
      <div className="row">
        <div className="col-md-12">
          <section className="hero-section">
            <h2>{t('pages.ContactUs.LetsConnectHeading')}</h2>
            <p>{t('pages.ContactUs.ContactFormDescription')}</p>
            <p>{t('pages.ContactUs.contactMessage')}</p>
          </section>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{t('pages.ContactUs.ContactForm.YourNameLabel')}</label>
              <input id="name" name="from_name" type="text" value={formData.user_name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">{t('pages.ContactUs.ContactForm.EmailLabel')}</label>
              <input id="email" name="from_email" type="email" value={formData.user_email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">{t('pages.ContactUs.ContactForm.MessageLabel')}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">{t('pages.ContactUs.ContactForm.SendButton')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;