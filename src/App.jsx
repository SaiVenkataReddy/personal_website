import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import Themes from "./components/Themes";
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
// import Portfolio from "./pages/portfolio/Portfolio";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <BrowserRouter basename="/personal_website">
            <Navbar/>
            <Themes/>
            <Routes>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='portfolio' element={<Projects />}/>
                <Route path='contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;



