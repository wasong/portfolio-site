import { Link } from 'react-router-dom';

function MoreInfoButton({project}) {

  return (
    <div className="more-info-button">
      <Link to={`projects/${project.id}`} className="text-center block">More Info<span className="sr-only">link to more information on project</span></Link>
    </div>
  )
}

export default MoreInfoButton