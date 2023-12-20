import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand btn btn-outline-danger btn-lg" to="/">Shobhit Rastogi</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className=" btn btn-outline-dark m-2 btn-sm" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" btn btn-outline-dark m-2 btn-sm" to="/about">About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className=" btn btn-outline-dark m-2 btn-sm" to="/experience">Experience</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className=" btn btn-outline-dark m-2 btn-sm" to="/projects">Projects</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className=" btn btn-outline-dark m-2 btn-sm" to="/contact">Contact-Me</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Header;
