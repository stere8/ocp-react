import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Header.css';
import logo from '../img/logo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Dropdown from "./Dropdown";
import CVDropdown from "./CVDropdown";

const Header = () => {
  const { t } = useTranslation();
  const navLinks = t('pages.header.NavLinks', { returnObjects: true });

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt={t('pages.header.BrandAlt')} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">{navLinks.Services}</Nav.Link>
              <Nav.Link as={Link} to="/projects">{navLinks.Projects}</Nav.Link>
              <Nav.Link as={Link} to="/expertise">{navLinks.Expertise}</Nav.Link>
              <Nav.Link href="https://cal.com/t.oreste" target="_blank">{navLinks.Schedule}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{navLinks.Contact}</Nav.Link>
            </Nav>
            <CVDropdown/>
            <Dropdown/>
            <Button
              variant="primary"
              href="https://cal.com/t.oreste"
              target="_blank"
              className="schedule-btn"
            >
              {t('pages.header.ScheduleButton')}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
