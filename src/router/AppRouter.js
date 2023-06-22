import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { APP_FOLDER_NAME } from "../globals/globals";


//components
import Footer from '../components/Footer';

//pages
import PageHome from '../pages/PageHome';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter  >
      <div className="wrapper"></div>

            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes> 
        <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;