import { useState } from 'react';
import NavMenu from './NavMenu';

function HamburgerMenu() {
const [navOpen, setNavOpen] = useState(false);

  function showHideNav(isOpen) {
    setNavOpen(isOpen);
  }
  
return (
  <div className={navOpen ? 'show' : undefined}>
      <button
        className="hamburger-btn fixed bottom-2 right-4 z-[9999]"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          showHideNav(!navOpen);
        }}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <NavMenu showHideNav={showHideNav} navOpen={navOpen} />
  </div>
);
}

export default HamburgerMenu;