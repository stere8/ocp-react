import React from 'react';
import '../Styles/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => (
  <footer className="border-top footer text-muted">
    <div className="container">
      &copy; 2024 - OCP - <Link to="/privacy">Privacy</Link>
    </div>
  </footer>
);

export default Footer;