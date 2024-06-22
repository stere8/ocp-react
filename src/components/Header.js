import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../img/logo.png'
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
          <li className="nav-item">
            <a className="nav-link" href="/docs/CV - Oreste BO+(EN).pdf" download="CV Oreste TWIZEYIMANA">
              <i className="fa-solid fa-download"></i>
            </a>
          </li>
        </ul>
      </div>
      <Dropdown/>
    </nav>
  </header>
);

export default Header;