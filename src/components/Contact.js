import HovImage from '../features/imageHov';
import gitHubIcon from '../images/gitHubIcon.png';
import gitHubHov from '../images/gitHubHov.png';
import linkedinIcon from '../images/linkedinIcon.png';
import linkedinHov from '../images/linkedinHov.png';
import emailHov from '../images/emailHov.png';
import emailIcon2 from '../images/emailIcon2.png';




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
    
        <a href="www.linkedin.com/in/bricechen" target="_blank" rel="noopener noreferrer" className="mx-2 my-4">
          <HovImage
            src={linkedinIcon}
            alt="LinkedIn Icon"
            hoverSrc={linkedinHov}
          />
        </a>

        <a href="mailto:brice_chen@hotmail.com" target="_blank" rel="noopener noreferrer" className="mx-2 my-4">
          <HovImage
            src={emailIcon2}
            alt="Email Icon"
            hoverSrc={emailHov}
          />
        </a>

        </div>
        </section>
)}

export default Contact;