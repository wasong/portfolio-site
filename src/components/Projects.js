import React from 'react';
import portfolio from '../json/portfolio.json';
import MoreInfoButton from './MoreInfoButton';
import { Link } from 'react-router-dom';

function Projects() {
 const project= portfolio.projects;


  return (
    <section id="projects" className="h-[100dvh] py-16 flex flex-col justify-center items-center mx-auto">
      <h2 className="text-3xl text-center font-bold lg:text-5xl">Featured Projects</h2>
      <div className="projects-flex-container flex flex-wrap mx-auto justify-center my-8"> 
      {project.slice(0,2).map((project) => (
      
        <div className={project.class + " projects-flex-child mx-2 my-4"} key={project.title}>
          <h3 className="font-bold lg:text-xl mb-2">{project.title}</h3>
          <img src={project.homeImage} alt={project.homeImageAlt} className="max-h-[250px]" />
          <ul>
          </ul>
          <MoreInfoButton project= {project} />
        </div>
      ))}
      </div>

      <div class="arrowContainer flex justify-center item-center">
          <div class="arrow"></div>
      </div>
     
      <div className="btn-wrapper">
      <button className="btn">
        <span className="circle">
          <span className="arrow"></span>
        </span>
        <span className="text"><Link to={`/projects/`}>
          See All Projects
        </Link></span>
      </button>
      </div>


        
     

    </section>
  );
}

export default Projects;
