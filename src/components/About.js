// import aboutImg from '../img/about.jpg';

function About() {
    

return (
    <section id="about">
        <article className="about">
            <h2  className= "text-center text-2xl"> About Me</h2>
            <img  src="https://i.imgur.com/Yhp8tZB.jpg" alt="Brice Chen" className="mx-auto w-[250px]" />
            <p className= "my-4 mx-8"> I am front-end web developer with a background in nursing. I enjoy playing basketball, riding motorcycles, and hiking. I also like traveling but my wallet is holding me back. </p>
        </article>

        <article>
            <h2 className= "text-center text-2xl"> Toolkit</h2>
            <h3>Development</h3>
            <p> HTML, CSS, JavaScript, React, SASS</p>
            <h3>Design</h3>
            <p>Figma, Adobe XD</p>
        </article>
        
    </section>
)
}

export default About;