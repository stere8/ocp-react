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

const SIDEBAR_ICONS = {
  home: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3.75 10.5 12 3.75l8.25 6.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.75V20.25h12V9.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 20.25v-5.25h4.5v5.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 19.5a6.75 6.75 0 0 1 13.5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  proof: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 3.75 5.25 6.75v5.06c0 4.22 2.86 8.11 6.75 9.44 3.89-1.33 6.75-5.22 6.75-9.44V6.75L12 3.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.75 12 1.5 1.5 3-3.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M8.25 6h7.5a3 3 0 0 1 3 3v8.25H5.25V9a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 6V4.5a2.25 2.25 0 0 1 4.5 0V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 12.75h13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  schedule: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M8.25 3.75v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.75 3.75v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 8.25h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.75 5.25h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18V7.5a2.25 2.25 0 0 1 2.25-2.25Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11.25v3h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4.5 6.75 12 12l7.5-5.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v9A2.25 2.25 0 0 1 18.75 18.75H5.25A2.25 2.25 0 0 1 3 16.5v-9a2.25 2.25 0 0 1 2.25-2.25Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

const SidebarIcon = ({ name }) => (
  <span className="site-nav-link__icon" aria-hidden="true">
    {SIDEBAR_ICONS[name]}
  </span>
);

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

  const navItems = [
    {
      key: 'home',
      to: '/',
      label: homeLabel,
      icon: 'home',
      isActive: location.pathname === '/' || location.pathname === '/services'
    },
    {
      key: 'profile',
      to: '/about',
      label: profileLabel,
      icon: 'profile',
      isActive: location.pathname === '/about'
    },
    {
      key: 'proof',
      to: '/projects',
      label: navLinks.Projects,
      icon: 'proof',
      isActive: location.pathname === '/projects'
    },
    {
      key: 'services',
      to: '/expertise',
      label: navLinks.Expertise,
      icon: 'services',
      isActive: location.pathname.toLowerCase() === '/expertise'
    }
  ];

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
          <Navbar.Brand as={Link} to="/" onClick={closeMenu} className="site-sidebar-brand">
            <span className="brand-lockup">
              <img src={logo} alt={t('pages.header.BrandAlt')} className="logo" />
              <span className="brand-copy">
                <strong>{site.brand}</strong>
                <small>{site.tagline}</small>
              </span>
            </span>
          </Navbar.Brand>
          <span className="site-sidebar-divider site-sidebar-divider--brand" aria-hidden="true" />
          <Navbar.Toggle
            aria-controls="site-navbar-sidebar"
            aria-label={t('pages.header.MenuToggleLabel')}
          />
          <Navbar.Offcanvas
            id="site-navbar-sidebar"
            aria-labelledby="site-navbar-sidebar-label"
            placement="start"
            className="site-navbar-sidebar"
            onHide={closeMenu}
          >
            <Offcanvas.Header
              closeButton
              closeLabel={t('pages.header.SidebarCloseLabel')}
              className="site-navbar-sidebar__header"
            >
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
                {navItems.map((item) => (
                  <Nav.Link
                    key={item.key}
                    as={Link}
                    to={item.to}
                    onClick={closeMenu}
                    active={item.isActive}
                    className={`site-nav-link${item.isActive ? ' is-active' : ''}`}
                  >
                    <SidebarIcon name={item.icon} />
                    <span className="site-nav-link__text">{item.label}</span>
                  </Nav.Link>
                ))}
                <Nav.Link
                  as="button"
                  active={false}
                  className="site-nav-link nav-link-button"
                  onClick={handleBookingOpen}
                >
                  <SidebarIcon name="schedule" />
                  <span className="site-nav-link__text">{navLinks.Schedule}</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={closeMenu}
                  active={location.pathname === '/contact'}
                  className={`site-nav-link${location.pathname === '/contact' ? ' is-active' : ''}`}
                >
                  <SidebarIcon name="contact" />
                  <span className="site-nav-link__text">{navLinks.Contact}</span>
                </Nav.Link>
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
