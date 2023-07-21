import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { APP_FOLDER_NAME } from "../globals/globals";


//components
import Footer from '../components/Footer';
import NavMenu from "../components/NavMenu";
import HamburgerMenu from "../components/HamburgerMenu";
import Logo from '../components/Logo';

//pages
import PageHome from '../pages/PageHome';
import PageNotFound from '../pages/PageNotFound';
import PageIndividualProj from '../pages/PageIndividualProj';
import PageAllProj from '../pages/PageAllProj';


function AppRouter() {
  return (
    
    <BrowserRouter  >
    <div className="min-h-[100dvh] flex flex-col">
      <header id="page-header">
        <Logo />
        <NavMenu/>
        <HamburgerMenu/>
      </header>
            <div className="flex-1">
              <Routes>
                  <Route path="/" element={<PageHome />} />
                  <Route path="/projects" element={<PageAllProj />} />
                  <Route path="/projects/:id" element={<PageIndividualProj/>} />
                  <Route path="*" element={<PageNotFound />} />
              </Routes> 
            </div>
        <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default AppRouter;