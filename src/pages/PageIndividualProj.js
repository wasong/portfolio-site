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
          <Carousel height="550px" animation="slide" autoPlay="false" navButtonsAlwaysVisible="true">
            
            {project.image.map((image, i) => (<div className="h-full flex items-center" key={i}><img src={image.imgUrl} alt={project.title} className="mx-auto my-auto"/></div>))}
          </Carousel>

          {project.url || project.github ? 
          <div className="url-wrapper mb-8 flex justify-end"> 
            {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="projectExternalLinks block mx-8 my-2 p-4 w-30"><p className="text-center text-sm md:text-base">Live Site</p></a> : null }
            {project.github? <a href={project.github} target="_blank" rel="noopener noreferrer"  className="projectExternalLinks block mx-8 my-2 p-4 w-30 "><p className="text-sm md:text-base">Github</p></a> : null}
          </div>
          : null}

          <p className="pl-4 mb-4">{project.description} </p>
          <h3 className="pl-4 font-bold text-xl">Tools Used</h3>
          <p className="pl-4 mb-4">{project.technologies}</p>
        <AccordionComponent items={project.accordionItems}/>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </main>
  );
}

export default IndividualProj;


