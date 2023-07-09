import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { APP_FOLDER_NAME } from "../globals/globals";


//components
import Footer from '../components/Footer';
import MobileNavMenu from "../components/MobileNavMenu";
import HamburgerMenu from "../components/HamburgerMenu";


//pages
import PageHome from '../pages/PageHome';
import PageNotFound from '../pages/PageNotFound';
import PageIndividualProj from '../pages/PageIndividualProj';


function AppRouter() {
  return (
    <BrowserRouter  >
      <header>
        <MobileNavMenu/>
        <HamburgerMenu/>
      </header>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/projects/:id" element={<PageIndividualProj/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes> 
        <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;