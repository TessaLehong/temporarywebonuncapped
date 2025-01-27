import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from  '../assets/images/logoImage.jpg' // Update the path to your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img 
              src={logoImage} 
              alt="OnUncapped Logo" 
              className="logo-image" 
            />
            OnUncapped
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
