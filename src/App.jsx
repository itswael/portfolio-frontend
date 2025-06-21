import React from 'react';
import Navbar from './components/Navbar';

import Contact from './components/Contact';
import HeroPage from "./components/HeroPage.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <HeroPage/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;