import React from 'react'
import Navbar from './../navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <section id="profile">
      <div className="section__pic-container">
      <img src="https://drive.google.com/uc?id=1JSl3158TOIA8mnf7JFcuZxxKZiaRcjIG" alt="Shobhit Rastogi" />

      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Shobhit Rastogi</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <p className="section__text__p2">Mern Stack Developer</p>
        <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-color-1"
            style={{textDecoration:'none'}}
          >
            View LinkedIn
          </a>
          <div id="socials-container">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/linkedin.png"
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/github.png"
                alt="My Github profile"
                className="icon"
              />
            </a>
          </div>
      </div>
    </section>
   
    </>
  )
}

export default Main