// src/components/Menu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="menu-item" onClick={toggleSubMenu}>
        Main Menu {isOpen ? '▲' : '▼'}
      </div>
      {isOpen && (
        <div className="submenu">
          <Link to="/dashboard/sub-menu">Sub Menu</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
