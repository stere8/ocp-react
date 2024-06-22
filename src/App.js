import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Programming from './components/Programming';
import Contact from './components/Contact';
import Languages from "./components/Languages";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/programming" element={<Programming/>}/>
                    <Route path="/languages" element={<Languages/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;