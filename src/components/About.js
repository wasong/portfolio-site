// import aboutImg from '../img/about.jpg';

function About() {
    

return (
    <section id="about" className="h-[100dvh] flex flex-col justify-center mx-auto"> 
        <article className="about">
            <h2  className= "text-center text-3xl lg:text-5xl my-8 font-bold"> About Me</h2>
            <img  src="https://i.imgur.com/Yhp8tZB.jpg" alt="Brice Chen" className="mx-auto w-[250px]" />
            <p className= "my-4 mx-auto max-w-[500px] lg:text-lg     "> I am front-end web developer with a background in nursing. I enjoy playing basketball, riding motorcycles, and hiking. I also like traveling but my wallet is holding me back. </p>
        </article>

        <article>
            <h2 className= "text-center text-2xl mt-8 font-bold lg:text-3xl"> Toolkit</h2>
            <div className="skills-wrapper my-8 mx-auto max-w-[500px]">
                <h3 className="font-bold lg:text-lg">Development</h3>
                    <p> HTML, CSS, JavaScript, React, SASS, PHP, WordPress</p>
                <h3 className="font-bold mt-4 lg:text-lg">Design</h3>
                <p>Figma, Adobe XD</p>
            </div>
        </article>
        
    </section>
)
}

export default About;