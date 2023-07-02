import MobileNavMenu from "../components/MobileNavMenu";
import React, {useEffect, useState} from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Projects from "../components/Projects";

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



    return (
            <main>
                <header>
                    <MobileNavMenu/>
                    <HamburgerMenu/>
                </header>

                <section className= "welcome h-[100vh]">
                    <h1 className="text-center mx-auto mt-32" >Hey,</h1>
                        <div className="typing-container">
                            <h2 className="typed-text text-center">My name is Brice.</h2>  
                        </div>
                </section>
                <div className="bottomthing">
                <div className={`fade-out ${isVisible ? '' : 'hidden'}`}>
                <div className="arrowcontainer h-16 flex justify-center items-center flex-col ">
                    <div className="arr down"><div></div></div>
                </div>
                </div>
                </div>
             
                {/* <Projects/> */}
            </main> 
        
    )
}

export default PageHome;

