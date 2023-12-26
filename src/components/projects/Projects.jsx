import React from 'react';
import Youtuve from '../../assets/youtuve.png';
import TicTacToe from '../../assets/tic-tac-toe.png';
import Pizza from '../../assets/pizza.png';
import Ecommerce from '../../assets/ecommerce.png';
import Chat from '../../assets/chat.png';
import Portfolio from '../../assets/portfolio.png';

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
      githubLink: 'https://github.com/shobhitrastogi/pizza',
      liveDemoLink: 'https://rastogi-pizza.netlify.app/',
    },
    {
      title: 'Project Four',
      imageSrc: `${Ecommerce}`,
      githubLink: 'https://github.com/shobhitrastogi/shopper',
      liveDemoLink: 'https://shobhit-shopper.netlify.app/',
    },
    {
      title: 'Project Five',
      imageSrc: `${Chat}`,
      githubLink: 'https://github.com/shobhitrastogi/chat-application-frontend',
      liveDemoLink: 'https://chat-application-rastogi.netlify.app/',
    },
    {
      title: 'Project Six',
      imageSrc: `${Portfolio}`,
      githubLink: 'https://github.com/shobhitrastogi/portfolio',
      liveDemoLink: 'https://shobhitrastogi-portfolio.netlify.app/',
    },
  ];

  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col">
              <div className="card">
                <img
                  src={project.imageSrc}
                  alt={`Project ${index + 1}`}
                  className="card-img-top project-img"
                />
                <div className="card-body">
                  <h5 className="card-title experience-sub-title project-title">{project.title}</h5>
                  <div className="btn-container">
                    <button
                      className="btn btn-outline-dark project-btn"
                      onClick={() => window.open(project.githubLink)}
                    >
                      Github
                    </button>
                    <button
                      className="btn btn-outline-dark project-btn"
                      onClick={() => window.open(project.liveDemoLink)}
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
