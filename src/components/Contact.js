import HovImage from '../features/imageHov';
import gitHubIcon from '../images/gitHubIcon.png';
import gitHubHov from '../images/gitHubHov.png';
import linkedinIcon from '../images/linkedinIcon.png';
import linkedinHov from '../images/linkedinHov.png';
import emailHov from '../images/emailHov.png';
import emailIcon2 from '../images/emailIcon2.png';




function Contact() {
    return (
        <section id="contact" className="my-16">
          <h2 className="text-3xl text-center font-bold lg:text-5xl reveal">Connect With Me</h2>
         <div className="socials-icon-container w-full inline-flex justify-center reveal">

        <a href="https://github.com/bChen-95"  target="_blank" rel="noopener noreferrer" className="mx-2 my-4">
          <HovImage
            src={gitHubIcon}
            alt="Github Icon"
            hoverSrc={gitHubHov}
          />
        </a>

        <a href="mailto:brice_chen@hotmail.com" target="_blank" rel="noopener noreferrer" className="mx-2 my-4">
          <HovImage
            src={emailIcon2}
            alt="Email Icon"
            hoverSrc={emailHov}
          />
        </a>

         <a href="https://linkedin.com/in/bricechen" target="_blank" rel="noopener noreferrer" className="mx-2 my-4">
          <HovImage
            src={linkedinIcon}
            alt="LinkedIn Icon"
            hoverSrc={linkedinHov}
          />
        </a>

        </div>
        </section>
)}

export default Contact;