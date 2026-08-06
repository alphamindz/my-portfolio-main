import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  // मोबाइल मेनू को टॉगल करने के लिए
  const handleToggle = () => setIsActive(!isActive);

  // लिंक पर क्लिक करने के बाद मेनू बंद करने के लिए
  const closeMenu = () => setIsActive(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          ANKUR<span className="logo-dot">.DEV</span>
        </h1>

        {/* 'active' क्लास का इस्तेमाल एनिमेशन के लिए बेहतर है */}
        <ul className={`nav-links ${isActive ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#certifications" onClick={closeMenu}>Certificat</a></li>
          <li><a href="#certifications" onClick={closeMenu}>Skills</a></li>
          <li><a href="/admin/login" className="admin-link" onClick={closeMenu}>Admin</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isActive ? "is-active" : ""}`} onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;