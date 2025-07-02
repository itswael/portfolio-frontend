import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Contact from './components/Contact';
import HeroPage from "./components/HeroPage.jsx";
import Footer from "./components/Footer.jsx";
import TitleBar from "./components/titleBar.jsx";
import Projects from "./components/Project1.jsx";
import About from "./components/About_new.jsx";

const App = () => {
    return (
        <>
            <TitleBar/>
            <Navbar/>
            <HeroPage/>
            <About/>
            <Projects/>
            {/* Main content wrapper with top padding to account for fixed navbar
            <main className="pt-52"> {/* pt-52 = 208px, adjust based on your navbar height */}
                <Contact/>
                <Footer/>
        </>
    );
};

export default App;