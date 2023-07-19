import portfolio from '../json/portfolio.json';
import { Link } from 'react-router-dom';


function PageAllProjects() {
 const project= portfolio.projects;


  return (
    <section id="projects-list" className="mx-4 my-4">
      <h2 className="text-4xl text-center font-bold my-8 lg:text-6xl">Projects</h2>
      <div className="allProjectsWrapper grid justify-center gap-8">
      {project.map((project) => (
            <article className={project.class + ' max-w-[400px] my-8'} key={project.title}>
                <h3 className="text-3xl mb-4">{project.title}</h3>
                <img src={project.homeImage} alt={project.title} /> 
                <div className="more-info-button">
                    <Link to={`/projects/${project.id}`} className="text-right block mt-4">More Info</Link>
                </div>
                <div className="projectsLine"></div>
            </article>         
      ))}
      </div>
    </section>
  );
}

export default PageAllProjects;