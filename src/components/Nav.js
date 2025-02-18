import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reserve">Reserve</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
