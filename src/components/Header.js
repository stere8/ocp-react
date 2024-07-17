import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../img/logo.png';
import Dropdown from "./Dropdown";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Oracle Consults Portfolio" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/programming">Programming</Nav.Link>
            <Nav.Link as={Link} to="/languages">Languages</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Dropdown/>
      </Container>
    </Navbar>
  </header>
);

export default Header;
