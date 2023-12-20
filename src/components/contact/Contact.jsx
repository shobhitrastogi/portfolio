import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><Link to="mailto:examplemail@gmail.com"className='text-dark'>rshobhit255@gmail.com</Link></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><Link to="https://www.linkedin.com" className='text-dark'>LinkedIn</Link></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><Link to="/" className='btn btn-outline-dark m-2 btn-lg'>Home</Link></li>
            <li><Link to="/about" className='btn btn-outline-dark m-2 btn-lg'>About</Link></li>
            <li><Link to="/experience"className='btn btn-outline-dark m-2 btn-lg'>Experience</Link></li>
            <li><Link to="/projects"className='btn btn-outline-dark m-2 btn-lg'>Projects</Link></li>
            <li><Link to="/contact"className='btn btn-outline-dark m-2 btn-lg'>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Shobhit Rastogi. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default Contact