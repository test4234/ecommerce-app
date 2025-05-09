import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <FaMapMarkerAlt />
        <span>123 Main Street</span>
      </div>
      <div className="nav-right">
        <FaBars onClick={toggleMenu} />
      </div>

      {/* Sidebar that slides in/out */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
