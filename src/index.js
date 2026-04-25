import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';  // ✅ Import HelmetProvider
import './index.css';
import App from './App';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HelmetProvider>  {/* ✅ Wrap App with HelmetProvider */}
            <Router>
                <App />
            </Router>
        </HelmetProvider>
    </React.StrictMode>
);
