import React from 'react'
import Navbar from './../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './../footer.js/Footer';

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
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={()=>navigate('/contact')}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={()=>"location.href='https://linkedin.com/'"}
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
   <Footer />
    </>
  )
}

export default Main