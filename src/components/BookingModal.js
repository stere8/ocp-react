import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';
import '../Styles/BookingModal.css';

const BookingModal = () => {
  const { t } = useTranslation();
  const { site } = useProfileContent();
  const { closeBookingModal, isBookingModalOpen } = useBookingModal();
  const booking = site.booking;

  return (
    <Modal
      show={isBookingModalOpen}
      onHide={closeBookingModal}
      centered
      size="xl"
      className="booking-modal"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <Modal.Header closeButton closeLabel={t('pages.header.BookingDialogCloseLabel')}>
        <Modal.Title id="booking-modal-title">{booking.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="booking-modal__intro">
          <p id="booking-modal-description">{booking.intro}</p>
          <ul>
            {booking.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="booking-modal__frame-shell">
          <iframe
            className="booking-modal__frame"
            src={site.calLink}
            title={booking.iframeTitle}
            loading="lazy"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <small>{booking.footerNote}</small>
        <Button
          variant="outline-primary"
          href={site.calLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {booking.directLinkLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
