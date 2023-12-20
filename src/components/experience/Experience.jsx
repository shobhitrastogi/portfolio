import React from 'react';

const Experience = () => {
  const skillsData = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Material UI', 'TailwindCSS'],
    },
    {
      title: 'Backend Development',
      skills: ['Node JS', 'Mongodb', 'Express JS', 'Git Hub'],
    },
  ];

  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {skillsData.map((category) => (
              <div key={category.title} className="details-container">
                <h2 className="experience-sub-title">{category.title}</h2>
                <div className="article-container">
                  {category.skills.map((skill, index) => (
                    <article key={index}>
                      <img
                        src="./assets/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
