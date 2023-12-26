import React from 'react'

const Main = () => {
  return (
    <>
    <section id="profile">
      <div className="section__pic-container">
      <img src="https://drive.google.com/uc?id=1JSl3158TOIA8mnf7JFcuZxxKZiaRcjIG" className='rounded' alt="Shobhit Rastogi" />

      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Shobhit Rastogi</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <p className="section__text__p2">Mern Stack Developer</p>
        <button
            className="btn btn-outline-warning btn-lg"
            onClick={() => window.open('https://drive.google.com/file/d/1OU7KX4rtEAc5HJNHqicSHGBzL4jQKuVI/view?usp=drive_link')}
          >
            Download CV
          </button>
          <a
            href="https://www.linkedin.com/in/shobhit-rastogi-/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-lg m-4"
            style={{textDecoration:'none'}}
          >
            View LinkedIn
          </a>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/shobhit-rastogi-/"
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
              href="https://github.com/shobhitrastogi"
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