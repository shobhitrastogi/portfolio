import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <nav className="navbar navbar-expand-lg " style={{height:"60px"}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand m-5 p-4 fs-3" to="/">Shobhit Rastogi</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link fs-3 p-4" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3 p-4" to="/about">About-Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3 p-4" to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3 p-4" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3 p-4" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
