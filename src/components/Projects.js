import React from 'react';
import portfolio from '../json/portfolio.json';
import MoreInfoButton from './MoreInfoButton';
import { Link } from 'react-router-dom';

function Projects() {
 const project= portfolio.projects;


  return (
    <section id="projects" className="mx-4 my-4">
      <h2 className="text-xl text-center font-bold">Projects</h2>
      <div className="projects-flex-container flex flex-wrap mx-auto justify-center"> 
      {project.slice(0,2).map((project) => (
      
        <div className={project.class + "projects-flex-child mx-4"} key={project.title}>
          <h3>{project.title}</h3>
          {/* <img src={project.mobile} alt={project.title} /> */}
          <img src="https://placehold.co/300x250" alt="placeholder" />
          <ul>
          </ul>
          <MoreInfoButton project= {project}/>
        </div>
      ))}
      </div>
      <Link to={`/projects/`} className="block text-center my-16 mx-auto">See All Projects</Link>
    </section>
  );
}

export default Projects;
