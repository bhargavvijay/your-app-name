import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  let v = 'blank';
  if (props.mode === 'dark') {
    v = 'light';
  } else {
    v = 'dark';
  }

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px', // Adjust the font size as needed
  };

  const toggleIconStyle = {
    color: '#333', // Adjust the color of the toggle icon
  };

  const switchLabelStyle = {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px', // Adjust the font size as needed
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={linkStyle}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{ ...linkStyle, margin: '0 0.5rem' }} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ ...linkStyle, margin: '0 0.5rem' }} to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${v}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={switchLabelStyle}>
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
