import HovImage from '../features/imageHov';
import gitHubIcon from '../images/gitHubIcon.png';
import gitHubHov from '../images/gitHubHov.png';
import facebookIcon from '../images/facebookIcon.png';
import facebookHov from '../images/facebookHov.png';
import linkedinIcon from '../images/linkedinIcon.png';
import linkedinHov from '../images/linkedinHov.png';

function Footer() {

   
return(
<footer>
        <section className="socials-icon-container w-full inline-flex justify-center">
        <a href="/" className="mx-2 my-4">
          <HovImage
            src={gitHubIcon}
            alt="Github Icon"
            hoverSrc={gitHubHov}
          />
        </a>

        <a href="/" className="mx-2 my-4">
          <HovImage
            src={facebookIcon}
            alt="Facebook Icon"
            hoverSrc={facebookHov}
          />
        </a>

        <a href="/" className="mx-2 my-4">
          <HovImage
            src={linkedinIcon}
            alt="Facebook Icon"
            hoverSrc={linkedinHov}
          />
        </a>
        </section>
        <p className='text-center' >&#169; 2023 | Brice Chen </p>
</footer>

)
}
export default Footer;
