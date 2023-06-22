import MobileNavMenu from "../components/MobileNavMenu";
import React from "react";
// import TypingEffect from "../features/typeEffect";
import HamburgerMenu from "../components/HamburgerMenu";
// import ImageCarousel from "../features/imageCarousel";


function PageHome () {
    


    return (
            <main>
                <header>
                    <MobileNavMenu/>
                    <HamburgerMenu/>
                </header>

                <section className= "welcome">
                    <h1 className="text-center mx-auto mt-32" >Hey,</h1>
                    <div className="typing-container">
                    <h2 className="typed-text text-center">My name is Brice.</h2>  
                    </div>
                </section>
            </main> 
    )
}

export default PageHome;