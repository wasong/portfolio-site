import React, { useState, useEffect}  from 'react';
import { homeIconWhiteBg, homeIconBlackBg, aboutMeIcon, aboutMeIconBlackBg, projectsIcon, projectsIconBlackBg, contactMeIcon, contactMeIconBlackBg } from "../images/svgImages"
import SvgHov from "../features/svgHov"
import { HashLink } from 'react-router-hash-link';

function NavMenu({showHideNav, navOpen}) {
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

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  // Define the content based on the window width
  let content;
  if (windowWidth >= 1024) {
    content = <div className="desktop-nav-menu fixed z-50 right-[2rem] top-[50%] transform -translate-y-1/2">
            <ul className="flex flex-col items-center">
              <li>
                <HashLink smooth to="/#page-header">
                  <SvgHov src={homeIconWhiteBg} hoverSrc={homeIconBlackBg} alt="Home Icon" />
                </HashLink>
              </li>
              
              <li>
                <HashLink smooth to="/#about">
                  <SvgHov src={aboutMeIcon} hoverSrc={aboutMeIconBlackBg} alt="About Me Icon" />
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#projects">
                  <SvgHov src={projectsIcon} hoverSrc={projectsIconBlackBg} alt="Projects Icon" />
                </HashLink>
               </li> 
              <li>
                <HashLink smooth to="/#contact">
                  <SvgHov src={contactMeIcon} hoverSrc={contactMeIconBlackBg} alt="Contact Me Icon" />
                </HashLink>
              </li> 
            </ul>
        </div>;
  } else {
    content = 
    <div>
      <div className="bg-white fixed bottom-0 w-[100vw] h-[60px] z-[500]"></div>
      <div className={navOpen ? "mobile-nav-overlay fixed h-screen w-screen z-10 top-0 ": "hidden"} onClick={() => {showHideNav(!navOpen)}}></div>
      <div className="mobile-nav text-center z-[1001] bg-white">
        <ul className="flex flex-col h-full justify-evenly">
          {[
            { href: "/", icon: homeIconWhiteBg },
            { href: "/#about", icon: aboutMeIcon },
            { href: "/#projects", icon: projectsIcon },
            { href: "/#contact", icon: contactMeIcon },
          ].map((item, index) => (
            <li  key={index}>
              <div className="mobileNavLineContainer">
                <div className="mobileNavLine">
                <a href={item.href}  onClick={() => {showHideNav(!navOpen)}}>
                  {item.icon}
                </a>
                </div>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  }

  return <nav>{content}</nav>;
};
  
  

export default NavMenu;