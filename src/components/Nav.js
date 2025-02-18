import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Nav.css'; // Ensure this import is present if you're styling Nav specifically


function Nav() {
  return (
    <nav aria-label="Main Navigation"> {/* Labeling the navigation for screen readers */}
      <ul>
        <li><Link to="/" aria-label="Go to Home Page">Home</Link></li>
        <li><Link to="/booking" aria-label="Go to Booking Page">Reserve</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
