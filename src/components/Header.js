import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../img/logo.png';
import Dropdown from "./Dropdown";

const Header = () => (
  <header>
    <nav className="navbar container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Oracle Consults Portfolio" className="logo" />
      </Link>
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/programming">Programming</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/languages">Languages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Dropdown />
    </nav>
  </header>
);

export default Header;