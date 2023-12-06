import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import Background from "./background/Background.js";
import Home from "./home/Home.js";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Background />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
