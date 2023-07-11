import portfolio from '../json/portfolio.json';
import { Link } from 'react-router-dom';


function PageAllProjects() {
 const project= portfolio.projects;


  return (
    <section id="projects" className="mx-4 my-4">
      <h2 className="text-4xl text-center font-bold my-8">Projects</h2>
      <div className="allProjectsWrapper grid justify-center gap-8">
      {project.map((project) => (
            <article className={project.class} key={project.title}>
                <h3 className="text-3xl">{project.title}</h3>
                <img src={project.mobile} alt={project.title} /> 
                <div className="more-info-button">
                    <Link to={`/projects/${project.id}`}>More Info</Link>
                </div>
            </article>         
      ))}
      </div>
    </section>
  );
}

export default PageAllProjects;