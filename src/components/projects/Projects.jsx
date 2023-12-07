import React from 'react';
import Navbar from '../navbar/Navbar';

const Projects = () => {
  const projectsData = [
    {
      title: 'Project One',
      imageSrc: 'https://drive.google.com/uc?id=1JwuPP0FAMu6-H-r6AzZy5HyaROyaXlM-',
      githubLink: 'https://github.com/shobhitrastogi/Youtube-Clone',
      liveDemoLink: 'https://youtuve.netlify.app/',
    },
    {
      title: 'Project Two',
      imageSrc: 'https://drive.google.com/uc?id=1Ju7f1Nn4u9XiqvDc5aMPPqz-Klu5oIPF',
      githubLink: 'https://github.com/shobhitrastogi/Tic-Tac-Toe',
      liveDemoLink: 'https://tic-tac-toe-shobhit-rastogi.netlify.app/',
    },
    {
      title: 'Project Three',
      imageSrc: 'https://drive.google.com/uc?id=1K53-uwgOHZWMEPkKhGPl0dJQe5YgHj_c',
      githubLink: 'https://github.com/shobhitrastogi/inotebook-frontend',
      liveDemoLink: 'https://inotebookrastogi.netlify.app/login',
    },
  ];

  return (
    <>
      <Navbar />
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
