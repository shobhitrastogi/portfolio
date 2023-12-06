import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate= useNavigate()
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
  return (
    <div>
          <nav id="desktop-nav">
      <div className="logo">
        <span>
          <Link to='/'>
        Shobhit Rastogi
          </Link>
        </span> 
        </div>
      <div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo" onClick={()=>navigate('/')}>Shobhit Rastogi</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={()=>toggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <li><Link to="/" onclick="toggleMenu()">Home</Link></li>
          <li><Link to="/about" onclick="toggleMenu()">About</Link></li>
          <li><Link to="/experience" onclick="toggleMenu()">Experience</Link></li>
          <li><Link to="/projects" onclick="toggleMenu()">Projects</Link></li>
          <li><Link to="/contact" onclick="toggleMenu()">Contact</Link></li>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar