import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import portfolio from '../json/portfolio.json';

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

  if (!project) {
    // Handle case when project is not found
    return <div>Project not found</div>;
  }

    

  // Use the value of the "id" URL parameter
  return(
    <main>
      {project ? (
        <div>
          <h2>{project.title}</h2>
          <p></p>
          {/* Other project details */}
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </main>
  );
}

export default IndividualProj;