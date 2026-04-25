import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Header.css';
import logo from '../img/logo.png';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import Dropdown from "./Dropdown";
import CVDropdown from "./CVDropdown";
import { useProfileContent } from '../content/profileContent';
import { useBookingModal } from '../context/BookingModalContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navLinks = t('pages.header.NavLinks', { returnObjects: true });
  const { site } = useProfileContent();
  const { openBookingModal } = useBookingModal();
  const [expanded, setExpanded] = useState(false);
  const homeLabel = navLinks?.Services || 'Home';
  const profileLabel = navLinks?.Profile || 'Profile';

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const closeMenu = () => setExpanded(false);
  const handleBookingOpen = () => {
    closeMenu();
    openBookingModal();
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="site-navbar"
        data-bs-theme="dark"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container fluid className="site-navbar-container">
          <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
            <span className="brand-lockup">
              <img src={logo} alt={t('pages.header.BrandAlt')} className="logo" />
              <span className="brand-copy">
                <strong>{site.brand}</strong>
                <small>{site.tagline}</small>
              </span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="site-navbar-sidebar" />
          <Navbar.Offcanvas
            id="site-navbar-sidebar"
            aria-labelledby="site-navbar-sidebar-label"
            placement="start"
            className="site-navbar-sidebar"
            onHide={closeMenu}
          >
            <Offcanvas.Header closeButton className="site-navbar-sidebar__header">
              <Offcanvas.Title id="site-navbar-sidebar-label">
                <span className="brand-lockup brand-lockup--sidebar">
                  <img src={logo} alt={t('pages.header.BrandAlt')} className="logo" />
                  <span className="brand-copy brand-copy--sidebar">
                    <strong>{site.brand}</strong>
                    <small>{site.tagline}</small>
                  </span>
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="site-navbar-sidebar__body">
              <Nav className="site-nav-links">
                <Nav.Link as={Link} to="/" onClick={closeMenu}>{homeLabel}</Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={closeMenu}>{profileLabel}</Nav.Link>
                <Nav.Link as={Link} to="/projects" onClick={closeMenu}>{navLinks.Projects}</Nav.Link>
                <Nav.Link as={Link} to="/expertise" onClick={closeMenu}>{navLinks.Expertise}</Nav.Link>
                <Nav.Link as="button" className="nav-link nav-link-button" onClick={handleBookingOpen}>
                  {navLinks.Schedule}
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={closeMenu}>{navLinks.Contact}</Nav.Link>
              </Nav>
              <div className="site-nav-actions">
                <ThemeToggle />
                <CVDropdown />
                <Dropdown />
                <Button
                  variant="primary"
                  onClick={handleBookingOpen}
                  className="schedule-btn"
                >
                  {t('pages.header.ScheduleButton')}
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
