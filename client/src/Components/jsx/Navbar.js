import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          StellarSpace
        </Link>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#section1">Properties</a></li>
          <li><a href="#section2">Add</a></li>
          <li><a href="#section3">View</a></li>
          <li><a href="#contact">Account</a></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
