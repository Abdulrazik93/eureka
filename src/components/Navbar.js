// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/list-one">List One</Link>
        <Link to="/dashboard/list-two">List Two</Link>
      </div>
      <div>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
