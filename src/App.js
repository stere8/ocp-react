import React, { useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation, withTranslation } from "react-i18next";
import ErrorBoundary from './components/ErrorBoundary';
import Seo from "./components/Seo";


const Home = lazy(() => import('./Pages/Home'));
const Contact = lazy(() => import('./Pages/Contact'));
const Programming = lazy(() => import('./Pages/Programming'));
const Languages = lazy(() => import('./Pages/Languages'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Projects = lazy(() => import("./Pages/Projects"));
const Expertise = lazy(() => import("./Pages/Expertise"));


const LoadingFallback = () => {
    const { t } = useTranslation();
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
            <p className="loading-text">{t('pages.loading.message')}</p>
        </div>);
};


function App({ t }) {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('G-9J0E2SX85Z');
    }, []);

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }, [location]);

    return (
        <div className="App">
            <Seo />
            <Header />
            <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/programming" element={<Programming />} />
                        <Route path="/languages" element={<Languages />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blog" exact element={<BlogList />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/Expertise" element={<Expertise />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default withTranslation()(App);
