import React from 'react';
import Navbar from './components/Navbar';

import Contact from './components/Contact';
import HeroPage from "./components/HeroPage.jsx";
import Footer from "./components/Footer.jsx";
import TitleBar from "./components/titleBar.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
    return (
        <>
            <TitleBar/>
            <Navbar/>
            <HeroPage/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;