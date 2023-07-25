import React from 'react';
import portfolio from '../json/portfolio.json';
import MoreInfoButton from './MoreInfoButton';
import { HashLink } from 'react-router-hash-link';

function Projects() {
 const project= portfolio.projects;


  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center mx-auto my-16">
      <h2 className="text-3xl text-center font-bold lg:text-5xl reveal">Featured Projects</h2>
        <div className="projects-flex-container flex flex-wrap mx-auto justify-center my-8 reveal"> 
          {project.slice(0,2).map((project) => (
            <div className={project.class + " projects-flex-child mx-[1.5rem] my-4"} key={project.title}>
              <h3 className="font-bold lg:text-xl mb-2">{project.title}</h3>
              <img src={project.homeImage} alt={project.homeImageAlt} className="max-h-[250px]" />
              <MoreInfoButton project= {project} />
            </div>
          ))}
        </div>

        <div className="arrowContainer flex justify-center item-center">
          <div className="arrow"></div>
        </div>
        
        <div className="btn-wrapper">
          <button className="btn">
            <span className="circle">
              <span className="arrow"></span>
            </span>
            <span className="text"><HashLink smooth to={`/projects/#projects-list`} className="p-0">
              See All Projects
            </HashLink></span>
          </button>
        </div>
    </section>
  );
}

export default Projects;
