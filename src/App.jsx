import React from 'react';
import Navbar from './components/Navbar';

import Contact from './components/Contact';
import HeroPage from "./components/HeroPage.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <HeroPage/>
            <Contact/>
        </>
    );
};

export default App;