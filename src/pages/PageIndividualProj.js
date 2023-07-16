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
          <Carousel>
            {project.image.map((image, i) => (<img key={i} src={image.imgUrl} alt={project.title} className="mx-auto"/>))}
          </Carousel>
          <p>{project.description} </p>
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


