import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav>
      <img src="logo.png" alt='Logo'/>
      <h2>Text Analyzer</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar