import React from 'react';
import portfolio from '../json/portfolio.json';
import MoreInfoButton from './MoreInfoButton';
// import Carousel from '../features/carousel';

function Projects() {
 const project= portfolio.projects;
//  const slides = project.image

  return (
    <section id="projects" className="mx-4 my-4">
      <h2 className="text-xl text-center font-bold">Projects</h2>
      {project.map((project) => (
        
        <div className={project.class} key={project.title}>
          <h3>{project.title}</h3>
          {/* <Carousel {...slides}/> */}
          <p>{project.description}</p>
          <img src={project.mobile} alt={project.title} />
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
