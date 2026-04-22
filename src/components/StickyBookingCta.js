import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';
import '../Styles/StickyBookingCta.css';

const StickyBookingCta = () => {
  const { site } = useProfileContent();
  const { isBookingModalOpen, openBookingModal } = useBookingModal();
  const location = useLocation();

  if (isBookingModalOpen || location.pathname === '/contact') {
    return null;
  }

  return (
    <button
      type="button"
      className="sticky-booking-cta"
      onClick={openBookingModal}
      aria-label={site.booking.stickyLabel}
    >
      <span className="sticky-booking-cta__eyebrow">{site.booking.stickyEyebrow}</span>
      <strong>{site.booking.stickyLabel}</strong>
    </button>
  );
};

export default StickyBookingCta;
