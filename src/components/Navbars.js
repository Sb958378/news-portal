import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="me-2">📰</span> My News App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;



