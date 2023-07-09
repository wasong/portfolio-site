import React, { useState, useEffect}  from 'react';
import { homeIconWhiteBg, aboutMeIcon, projectsIcon, contactMeIcon } from "../globals/globals"

function MobileNavMenu({showHideNav, navOpen}) {
// const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 768px)'); // Define your media query here

    // const handleResize = (event) => {
    //   // setIsSmallScreen(event.matches);
    //   if (event.matches) {
    //     showHideNav(false)
    //   }
    // };

    // Initial check for the media query
  //   handleResize(mediaQuery);

  //   // Add listener for changes in the media query
  //   mediaQuery.addEventListener('change', handleResize);

  //   // Clean up the listener on component unmount
  //   return () => {
  //     mediaQuery.removeEventListener('change', handleResize);
  //   };
  // }, [showHideNav]);

  return (
    <>
    {/* <div className= {isSmallScreen ? showHideNav() : "" }> */}
    <div className={navOpen ? "mobile-nav-overlay fixed h-screen w-screen z-10 top-0 ": "hidden"} onClick={() => {
      showHideNav(!navOpen)
    }}></div>
      <nav className="mobile-nav text-center z-20 bg-white md:hidden">
  <ul className="flex flex-col h-full justify-evenly md:hidden">
    {[
      { href: "/#home", icon: homeIconWhiteBg },
      { href: "/#about", icon: aboutMeIcon },
      { href: "/#projects", icon: projectsIcon },
      { href: "/#contact", icon: contactMeIcon },
    ].map((item, index) => (
      <li  key={index}>
        <a href={item.href}>
           {item.icon}
        </a>
      </li>
    ))}
  </ul>
</nav>
      {/* </div> */}
    </>
  )
}

export default MobileNavMenu;