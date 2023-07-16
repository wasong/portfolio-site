import HovImage from '../features/imageHov';
import gitHubIcon from '../images/gitHubIcon.png';
import gitHubHov from '../images/gitHubHov.png';
import linkedinIcon from '../images/linkedinIcon.png';
import linkedinHov from '../images/linkedinHov.png';

function Contact() {
    return (
        <section id="contact">
         <div className="socials-icon-container w-full inline-flex justify-center">
        <a href="https://github.com/bChen-95"  target="_blank" rel="noopener noreferrer" className="mx-2 my-4">
          <HovImage
            src={gitHubIcon}
            alt="Github Icon"
            hoverSrc={gitHubHov}
          />
        </a>
    
        <a href="/" className="mx-2 my-4">
          <HovImage
            src={linkedinIcon}
            alt="LinkedIn Icon"
            hoverSrc={linkedinHov}
          />
        </a>
        </div>
        <div className="text-center">
            <a href="mailto:brice_chen@hotmail.com" className="text-center">Email me</a>
        </div>
        </section>
)}

export default Contact;