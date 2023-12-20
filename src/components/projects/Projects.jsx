import React from 'react';
import Youtuve from '../../assets/youtuve.png'
import TicTacToe from '../../assets/tic-tac-toe.png'
import Pizza from '../../assets/pizza.png'
import Ecommerce from '../../assets/ecommerce.png'
import Chat from '../../assets/chat.png'
import Portfolio from '../../assets/portfolio.png'
const Projects = () => {
  const projectsData = [
    {
      title: 'Project One',
      imageSrc: `${Youtuve}`,
      githubLink: 'https://github.com/shobhitrastogi/Youtube-Clone',
      liveDemoLink: 'https://youtuve.netlify.app/',
    },
    {
      title: 'Project Two',
      imageSrc: `${TicTacToe}`,
      githubLink: 'https://github.com/shobhitrastogi/Tic-Tac-Toe',
      liveDemoLink: 'https://tic-tac-toe-shobhit-rastogi.netlify.app/',
    },
    {
      title: 'Project Three',
      imageSrc: `${Pizza}`,
      githubLink: 'https://github.com/shobhitrastogi/inotebook-frontend',
      liveDemoLink: 'https://inotebookrastogi.netlify.app/login',
    },{
      title: 'Project Three',
      imageSrc: `${Ecommerce}`,
      githubLink: 'https://github.com/shobhitrastogi/inotebook-frontend',
      liveDemoLink: 'https://inotebookrastogi.netlify.app/login',
    },{
      title: 'Project Three',
      imageSrc: `${Chat}`,
      githubLink: 'https://github.com/shobhitrastogi/inotebook-frontend',
      liveDemoLink: 'https://inotebookrastogi.netlify.app/login',
    },{
      title: 'Project Three',
      imageSrc: `${Portfolio}`,
      githubLink: 'https://github.com/shobhitrastogi/inotebook-frontend',
      liveDemoLink: 'https://inotebookrastogi.netlify.app/login',
    },
  ];

  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {projectsData.map((project, index) => (
              <div key={index} className="details-container color-container">
                <div className="article-container">
                  <img
                    src={project.imageSrc}
                    alt={`Project ${index + 1}`}
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">{project.title}</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open(project.githubLink)}
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open(project.liveDemoLink)}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
