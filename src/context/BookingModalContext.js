import React, { createContext, useContext, useMemo, useState } from 'react';
import BookingModal from '../components/BookingModal';
import StickyBookingCta from '../components/StickyBookingCta';

const BookingModalContext = createContext({
  closeBookingModal: () => {},
  isBookingModalOpen: false,
  openBookingModal: () => {}
});

export const BookingModalProvider = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      closeBookingModal: () => setIsBookingModalOpen(false),
      isBookingModalOpen,
      openBookingModal: () => setIsBookingModalOpen(true)
    }),
    [isBookingModalOpen]
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal />
      <StickyBookingCta />
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => useContext(BookingModalContext);

export default BookingModalContext;
