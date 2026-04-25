import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';
import { Button } from 'react-bootstrap';
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';

const Contact = () => {
  const { t } = useTranslation();
  const { contact } = useProfileContent();
  const { openBookingModal } = useBookingModal();
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
      <section className="hero-section contact-hero">
        <span className="section-kicker">{contact.eyebrow}</span>
        <h1>{contact.title}</h1>
        <p>{contact.lead}</p>
        <div className="contact-hero-actions">
          <Button onClick={openBookingModal} className="primary-cta">
            {contact.scheduleButtonLabel}
          </Button>
        </div>
      </section>

      <section className="contact-layout">
        <div className="contact-side-panel">
          <div className="contact-fit-card">
            <h2>{contact.fitTitle}</h2>
            <ul>
              {contact.fitList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="contact-methods-card">
            <h2>{contact.directContactTitle}</h2>
            <ul>
              {contact.contactMethods.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
            <p>{contact.closing}</p>
          </div>

          <div className="contact-scheduler-card">
            <h2>{contact.discoveryTitle}</h2>
            <p>{contact.discoveryIntro}</p>
            <ul>
              {contact.discoveryBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button onClick={openBookingModal} className="primary-cta">
              {contact.scheduleButtonLabel}
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form-card">
          <h2>{t('pages.ContactUs.LetsConnectHeading')}</h2>
          <p>{t('pages.ContactUs.ContactFormDescription')}</p>
          <p>{t('pages.ContactUs.contactMessage')}</p>

          <div>
            <label htmlFor="name">{t('pages.ContactUs.ContactForm.YourNameLabel')}</label>
            <input id="name" name="from_name" type="text" value={formData.from_name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">{t('pages.ContactUs.ContactForm.EmailLabel')}</label>
            <input id="email" name="from_email" type="email" value={formData.from_email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">{t('pages.ContactUs.ContactForm.MessageLabel')}</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">{t('pages.ContactUs.ContactForm.SendButton')}</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
