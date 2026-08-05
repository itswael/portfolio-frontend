import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HeroPage from "./components/HeroPage.jsx";
import Footer from "./components/Footer.jsx";
import TitleBar from "./components/titleBar.jsx";
import Projects from "./components/project1.jsx";
import About from "./components/About_new.jsx";
import WorkEx from "./components/WorkEx.jsx";
import Skills from "./components/Skills_new.jsx";

const App = () => {
    return (
        <>
            <TitleBar/>
            <Navbar/>
            <HeroPage/>
            <About/>
            <WorkEx/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;
