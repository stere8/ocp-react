import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="border-top footer text-muted">
    <div className="container">
      &copy; 2024 - OCP - <Link to="/privacy">Privacy</Link>
    </div>
  </footer>
);

export default Footer;