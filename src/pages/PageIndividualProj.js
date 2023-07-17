import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import portfolio from '../json/portfolio.json';
import Carousel from 'react-material-ui-carousel';
import AccordionComponent from '../components/Accordion';

function IndividualProj() {
  const { id } = useParams();

useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}, []);  

const project = portfolio.projects.find(project => project.id === id);
     
  return(
    <main>
         {project ? (
        <div>
          <h2 className="text-3xl font-bold text-center my-8 md:text-6xl">{project.title}</h2>
          <Carousel height="550px">
            
            {project.image.map((image, i) => (<div className="h-full flex items-center"><img key={i} src={image.imgUrl} alt={project.title} className="mx-auto my-auto"/></div>))}
          </Carousel>

          {project.url || project.github ? 
          <div className="mb-8"> 
            {project.url ? <a href={project.url} className="projectExternalLinks block ml-8 my-2 p-4 w-30"><p>Live Site</p></a> : null }
            {project.github? <a href={project.github} className="projectExternalLinks block ml-8 p-4 w-30"><p>Github</p></a> : null}
          </div>
          : null}

          <p className="pl-4">{project.description} </p>
          {/* Other project details */}
        <AccordionComponent items={project.accordionItems}/>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </main>
  );
}

export default IndividualProj;


