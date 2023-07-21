import React, {useEffect, useState} from "react";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import ScrollReveal from "../components/ScrollReveal";

function PageHome () {
    
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) { 
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

  useEffect(() => {
      window.addEventListener('scroll', ScrollReveal);
    return () => {
      window.removeEventListener('scroll', ScrollReveal);
    }
  }, []);


      return (
            <main>
              <section className= "welcome min-h-screen max-w-[320px] flex flex-col justify-center mx-auto lg:max-w-[544px]">
                <h1 className="mx-auto text-3xl lg:text-[4rem] lg:mb-4" >Hey,</h1>
                  <div className="typing-container" >
                    <h2 className="typed-text text-center text-3xl lg:text-[3rem]">
                        My name is <span className="font-bold text-[3rem] lg:text-[6rem]">Brice</span>.
                     </h2>
                  </div>
                  <p className="animate-delayed-fade-in opacity-0 text-center">Welcome to my page</p>
              </section>

                <div className="downArrow">
                  <div className={`fade-out ${isVisible ? '' : 'hidden'}`}>
                  <div className="arrowContainer h-16 flex justify-center items-center flex-col ">
                      <div className="arr down">
                        <a href="/#about" aria-label="Go down to about section"><div></div></a>
                      </div>
                  </div>
                  </div>
                </div>
              <About/>
                <Projects/> 
                <Contact/>
            </main> 
        
    )
}

export default PageHome;

