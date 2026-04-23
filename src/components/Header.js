import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Header.css';
import logo from '../img/logo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Dropdown from "./Dropdown";
import CVDropdown from "./CVDropdown";
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { t } = useTranslation();
  const navLinks = t('pages.header.NavLinks', { returnObjects: true });
  const { site } = useProfileContent();
  const { openBookingModal } = useBookingModal();
  const homeLabel = navLinks?.Services || 'Home';
  const profileLabel = navLinks?.Profile || 'Profile';

  return (
    <header>
      <Navbar expand="lg" className="site-navbar">
        <Container fluid className="site-navbar-container">
          <Navbar.Brand as={Link} to="/">
            <span className="brand-lockup">
              <img src={logo} alt={t('pages.header.BrandAlt')} className="logo" />
              <span className="brand-copy">
                <strong>{site.brand}</strong>
                <small>{site.tagline}</small>
              </span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="site-nav-links">
              <Nav.Link as={Link} to="/">{homeLabel}</Nav.Link>
              <Nav.Link as={Link} to="/about">{profileLabel}</Nav.Link>
              <Nav.Link as={Link} to="/projects">{navLinks.Projects}</Nav.Link>
              <Nav.Link as={Link} to="/expertise">{navLinks.Expertise}</Nav.Link>
              <Nav.Link as="button" className="nav-link nav-link-button" onClick={openBookingModal}>
                {navLinks.Schedule}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">{navLinks.Contact}</Nav.Link>
            </Nav>
            <div className="site-nav-actions">
              <ThemeToggle />
              <CVDropdown/>
              <Dropdown/>
              <Button
                variant="primary"
                onClick={openBookingModal}
                className="schedule-btn"
              >
                {t('pages.header.ScheduleButton')}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
