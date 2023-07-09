import React, {useEffect, useState} from "react";
import Carousel from "../features/carousel";
import Projects from "../components/Projects";
import About from "../components/About";
import DesktopNavMenu from "../components/DesktopNavMenu";
import Logo from "../components/Logo";

function PageHome () {
    
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 100) { // Adjust the scroll position as needed
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slides = [
    "https://i.imgur.com/Cf1NIU5.png",
    "https://i.imgur.com/y57oi1j.jpg",
    "https://i.imgur.com/TjQRsVY.png"
  ]

    return (
            <main>
              <Logo />
            <DesktopNavMenu />
              <section className= "welcome h-[100dvh]">
                <h1 className="text-center mx-auto mt-32 text-3xl" >Hey,</h1>
                  <div className="typing-container" >
                    <h2 className="typed-text text-center text-3xl"> My name is <span style={{ fontWeight: 'bold', fontSize: '2.5rem'}}>Brice</span>.</h2>
                  </div>
              </section>
                <div className="downArrow">
                  <div className={`fade-out ${isVisible ? '' : 'hidden'}`}>
                  <div className="arrowContainer h-16 flex justify-center items-center flex-col ">
                      <div className="arr down">
                        <a href="/#about"><div></div></a>
                      </div>
                  </div>
                  </div>
                </div>
              <About/>
              <Carousel slides={slides}/>
                <Projects/>
            </main> 
        
    )
}

export default PageHome;

