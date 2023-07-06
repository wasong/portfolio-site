import React from 'react';
import portfolio from '../json/portfolio.json';
import MoreInfoButton from './MoreInfoButton';

function Projects() {
 const project= portfolio.projects;

  return (
    <section id="projects" className="mx-4 my-4">
      {project.map((project) => (
        <div className={project.class} key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <MoreInfoButton project= {project}/>
        </div>
      ))}
    </section>
  );
}

export default Projects;
