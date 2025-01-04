import React from "react";
import "./Hero.css"; // Optional: Add custom styles for the navbar
import Logo from "../../Assets/01-logo-light.png"

const Hero = () => {
    return (
        <div className="container">

            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#pages">PAGES</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#elements">ELEMENTS</a></li>
                </ul>
                <div className="navbar-icons">
                    <button className="icon-btn">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="icon-btn">
                        <i className="fas fa-search"></i>
                    </button>
                    <button className="icon-btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>


        </div>
    );
};

export default Hero;
