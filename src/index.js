import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';




const container = document.getElementById('root');
const root = createRoot(container);
emailjs.init('jbwNUbuZVBETFQtqM'); // Replace with your EmailJS user ID

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);