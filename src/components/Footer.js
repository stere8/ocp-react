import React from 'react';
import '../Styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-top footer text-muted">
    <div className="container">
      &copy; 2024 - OCP 
      <div className="social-links">
        <a href="https://github.com/stere8/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/twizeyimana-o-2302a410a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="tel:+48572170919">Tel: +48 572 170 919</a>
      </div>
    </div>
  </footer>
);

export default Footer;
