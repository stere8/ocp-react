import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Programming from './Pages/Programming';
import Contact from './Pages/Contact';
import Languages from "./Pages/Languages";
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