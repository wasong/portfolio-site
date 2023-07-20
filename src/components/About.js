// import aboutImg from '../img/about.jpg';

function About() {
    

return (
    <section id="about" className="min-h-screen flex flex-col mx-auto reveal my-16 justify-center"> 
        
        <h2  className= "text-center text-3xl lg:text-5xl my-8 font-bold"> About Me</h2>
            <div className="about-flex-container"> 
                    <img  
                    src="https://i.imgur.com/Yhp8tZB.jpg" 
                    srcset=" " 
                    alt="Brice Chen" 
                    className="mx-auto w-[250px]" />
                
                <div className="aboutText">
                    <p className= "my-4 mx-auto max-w-[500px] lg:text-lg     "> I am front-end web developer with a background in nursing. I enjoy playing basketball, riding motorcycles, and hiking. I also like traveling but my wallet is holding me back. </p>
                
                    <h2 className= "text-center text-2xl mt-8 font-bold lg:text-3xl"> Toolkit</h2>
                    <div className="skills-wrapper my-8 mx-auto max-w-[500px]">
                        <h3 className="font-bold lg:text-lg">Development</h3>
                            <p> HTML, CSS, JavaScript, React, SASS, PHP, WordPress</p>
                        <h3 className="font-bold mt-4 lg:text-lg">Design</h3>
                        <p>Figma, Adobe XD</p>
                    </div>
                </div>

            </div>
        
    </section>
)
}

export default About;