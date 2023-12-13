import React from 'react'
import Header from '../header/Header';

const About = () => {
  return (
    <>
    <Header />
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src='https://drive.google.com/uc?id=1JVbku3S5encgT8HVU2EZL2isx7Ft0S9k'
            alt="Description of about"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Fresher in  <br />Frontend Development <br /> Mern Stack Development</p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>BCA <br />Bachelor of Computer Application</p>
            </div>
          </div>
          <div className="text-container">
            <p>
            I am Shobhit Rastogi, currently in my second year of BCA at JS University. A dedicated and aspiring Frontend Developer and MERN Stack Developer, I bring a strong foundation in web development. Despite being a fresher, I have actively engaged in practical application, having pushed numerous projects to my GitHub repository.
            </p>
          </div>
        </div>
      </div>
     
    </section>
    </>
  )
}

export default About