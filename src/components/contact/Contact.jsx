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
          <p><Link to="https://mail.google.com/"className='text-dark'>rshobhit255@gmail.com</Link></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><Link to="https://www.linkedin.com/in/shobhit-rastogi-/" className='text-dark'>LinkedIn</Link></p>
        </div>
        <div className='contact-info-container'>
          <p className='text-dark '>9506096144</p>

        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#" className='btn btn-outline-dark m-2 btn-lg'>Home</a></li>
            <li><a href="#about" className='btn btn-outline-dark m-2 btn-lg'>About</a></li>
            <li><a href="#experience"className='btn btn-outline-dark m-2 btn-lg'>Experience</a></li>
            <li><a href="#projects"className='btn btn-outline-dark m-2 btn-lg'>Projects</a></li>
          </ul>
        </div>
      </nav>
      <p>~~Made By Shobhit Rastogi~~</p>
    </footer>
    </>
  )
}

export default Contact