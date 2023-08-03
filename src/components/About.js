import aboutImg from '../images/portfolio-about.webp';

function About() {
    

return (
    <section id="about" className="min-h-screen flex flex-col mx-auto my-16 justify-center"> 
        
        <h2  className= "text-center text-3xl lg:text-5xl my-8 font-bold reveal"> About Me</h2>
            <div className="about-flex-container reveal"> 
                    <img  
                    src={aboutImg}
                    srcSet=" " 
                    alt="Brice Chen" 
                    className="mx-auto lg:mr-[3rem] w-[250px] " />
                
                <div className="aboutText  lg:mr-[5rem]">
                    <p className= "my-4 mx-auto max-w-[500px] lg:text-lg"> I am front-end web developer with a background in nursing. I enjoy playing basketball, riding motorcycles, and hiking. I also like traveling but my wallet is holding me back. </p>
                
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