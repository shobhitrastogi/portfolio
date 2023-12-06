import React from 'react'
import Navbar from './../navbar/Navbar';
import About from './../about-me/About';
import Experience from './../experience/Experience';
import Projects from './../projects/Projects';
import Footer from './../footer.js/Footer';

const Main = () => {
  return (
    <>
    <Navbar />
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile-pic.png" alt="Shobhit Rastogi" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Shobhit Rastogi</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <p className="section__text__p2">Mern Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
    <About />
    <Experience />
    <Projects />
    <Footer />

    </>
  )
}

export default Main