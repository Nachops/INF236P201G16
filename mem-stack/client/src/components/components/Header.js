// src/header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/hospital.png" alt="Logo" />
      </div>
      <div className="return-link">
        <Link to="/" className="redirect-button">Regresar a Menu</Link>
      </div>
    </header>
  );
};

export default Header;
