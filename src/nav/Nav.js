//!     rcc to gate boilar plate

import React from "react";
import { Link } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

import "../styles/nav.css";

const Navbar = () => {
    return (
        <div className="nav-content">
            <ul className="nav">
                <li className="nav-item">
                    <Link to={`/`}>
                        <img src={astronautHelmet} alt="Home" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/About`}>
                        <img src={deadEye} alt="About" />
                        <span>About</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/Skills`}>
                        <img src={stack} alt="Skills" />
                        <span>Skills</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/Contact`}>
                        <img src={envelope} alt="Contact" />
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
