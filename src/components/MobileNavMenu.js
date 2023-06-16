import React from 'react';

function MobileNavMenu({showHideNav}) {

  function closeNavMenu(e){
    if(window.innerWidth < 800) {
      showHideNav();
    }else{
      e.target.blur();
    }
  }

  return (
    <>
    <div className="mobile-nav-overlay absolute h-screen w-screen z-10 top-0" onClick={showHideNav}></div>
      <nav className="mobile-nav text-center z-20" >
        <ul >
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