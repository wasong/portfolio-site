import React from 'react';
import portfolio from '../json/portfolio.json';

console.log(portfolio);

function Projects() {
 const project= portfolio.projects;

  return (
    <div>
      {project.map((project) => (
        <div key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <a href={project.url}>Visit Project</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
