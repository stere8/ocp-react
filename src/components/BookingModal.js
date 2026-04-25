import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';
import '../Styles/BookingModal.css';

const BookingModal = () => {
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
    >
      <Modal.Header closeButton>
        <Modal.Title>{booking.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="booking-modal__layout">
          <div className="booking-modal__frame-shell">
            <iframe
              className="booking-modal__frame"
              src={site.calLink}
              title={booking.iframeTitle}
              loading="lazy"
            />
          </div>

          <div className="booking-modal__intro">
            <p>{booking.intro}</p>
            <ul>
              {booking.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
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
