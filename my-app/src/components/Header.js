
import React from 'react';
import '../App.css';
const Header = () => {
  return (
    <header className="header">
      <div className="first-container">
        <div className="logo">
          <img id="logopng" src="logoConstruction.png" alt="logo.png" />
        </div>
        <nav>
          <ul id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu-icon" id="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
