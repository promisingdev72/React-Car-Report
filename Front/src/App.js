import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
const App = () => {
    
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/contact" element={ <Contact/> } />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
