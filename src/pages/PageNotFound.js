import { Link } from 'react-router-dom';
import { useEffect } from "react";


function PageNotFound() {

  useEffect(() => {
    document.title =  "Page Not Found";
  }, []);

    return(
      <main>
        <section className="page-not-found text-center min-h-screen flex flex-col justify-center ">
          <h2 className="text-4xl mb-8">404 Page not found.</h2>
          <p className="text-2xl mb-8">Not sure what you're looking for.. but it ain't here.</p>
          <p className="backToHome"><Link to="/">Back to home</Link></p>
        </section>
      </main>
    );
};

export default PageNotFound;