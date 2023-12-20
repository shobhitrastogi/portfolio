import React from 'react';
import {  NavLink, a } from 'react-router-dom';

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
          <a className=" btn btn-outline-dark m-2 btn-sm active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className=" btn btn-outline-dark m-2 btn-sm" href="#about">About</a>
        </li>
         <li className="nav-item">
          <a className=" btn btn-outline-dark m-2 btn-sm" href="#experience">Experience</a>
        </li>
         <li className="nav-item">
          <a className=" btn btn-outline-dark m-2 btn-sm" href="#projects">Projects</a>
        </li> 
        <li className="nav-item">
          <a className=" btn btn-outline-dark m-2 btn-sm" href="#contact">Contact-Me</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Header;
