// Existing imports
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="desktop-nav">
        {/* Existing links */}
        <li><Link to="/admin" target="_blank" rel="noopener noreferrer">Admin</Link></li>
        {/* Other links... */}
      </ul>
      <ul className="mobile-nav">
        {/* Existing links */}
        <li><Link to="/admin" target="_blank" rel="noopener noreferrer">Admin</Link></li>
        {/* Other links... */}
      </ul>
    </nav>
  );
};

export default Navbar;