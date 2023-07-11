import React from 'react';
import portfolio from '../json/portfolio.json';
import MoreInfoButton from './MoreInfoButton';
import { Link } from 'react-router-dom';

function Projects() {
 const project= portfolio.projects;


  return (
    <section id="projects" className="mx-4 my-4">
      <h2 className="text-xl text-center font-bold">Projects</h2>
      {project.slice(0,2).map((project) => (
      
        <div className={project.class} key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.mobile} alt={project.title} />
          <ul>
          </ul>
          <MoreInfoButton project= {project}/>
        </div>
      ))}
      <Link to={`/projects/`}>See All Projects</Link>
    </section>
  );
}

export default Projects;
