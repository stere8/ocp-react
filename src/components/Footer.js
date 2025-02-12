import React from 'react';
import '../Styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Footer = () => (
    <footer className="border-top footer text-muted">
        <div className="container">
            <h6>&copy; 2025 - Oracle Consults</h6>
            <div className="social-links">
                <a href="https://github.com/stere8/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/twizeyimana-o-2302a410a" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="tel:+48572170919">
                    <i className="fas fa-phone"></i> Tel: +48 572 170 919
                </a>
                <a href="https://wa.link/p99bkg" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="mailto:oreste.twizeyimana99@gmail.com"><i className="fas fa-envelope">
                    </i> Email</a>
            </div>
        </div>
    </footer>
);

export default Footer;