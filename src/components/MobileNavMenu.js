import React from 'react';

function MobileNavMenu({showHideNav, navOpen}) {

  return (
    <>
    <div className={navOpen ? "mobile-nav-overlay absolute h-screen w-screen z-10 top-0 ": "hidden"} onClick={showHideNav}></div>
      <nav className="mobile-nav text-center z-20 md: invisible" >
        <ul className= "md: hidden">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNavMenu;