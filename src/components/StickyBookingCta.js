import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';
import '../Styles/StickyBookingCta.css';

const DISMISS_STORAGE_KEY = 'sticky-booking-cta-dismissed';

const StickyBookingCta = () => {
  const { site } = useProfileContent();
  const { isBookingModalOpen, openBookingModal } = useBookingModal();
  const location = useLocation();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    setIsDismissed(sessionStorage.getItem(DISMISS_STORAGE_KEY) === 'true');
  }, []);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px 0px 120px 0px',
        threshold: 0.05
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_STORAGE_KEY, 'true');
    setIsDismissed(true);
  };

  if (isBookingModalOpen || isDismissed || isFooterVisible || location.pathname === '/contact') {
    return null;
  }

  return (
    <div className="sticky-booking-cta-shell">
      <button
        type="button"
        className="sticky-booking-cta__button"
        onClick={openBookingModal}
        aria-label={site.booking.stickyLabel}
      >
        <span className="sticky-booking-cta__eyebrow">{site.booking.stickyEyebrow}</span>
        <strong>{site.booking.stickyLabel}</strong>
      </button>
      <button
        type="button"
        className="sticky-booking-cta__dismiss"
        onClick={handleDismiss}
        aria-label={site.booking.dismissLabel || 'Dismiss booking prompt'}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

export default StickyBookingCta;
