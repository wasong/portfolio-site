import { useState, useEffect } from 'react';
import logo from '../images/portfolio-logo.png';
import MobileNavMenu from './MobileNavMenu';

function Header() {
const [navOpen, setNavOpen] = useState(false);

  function showHideNav() {
    setNavOpen(!navOpen);
  }

return (
  <header className={navOpen ? 'show' : undefined} id="page-header">
    <div>  
      <span>
      <img src={logo} alt="logo" className="w-10 h-auto m-2 absolute top-0 left-0"></img>
    </span>
      <button
        className="hamburger-btn absolute bottom-2 right-0 z-999"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={showHideNav}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <MobileNavMenu showHideNav={showHideNav} />
    </div>
  </header>
);
}

export default Header;