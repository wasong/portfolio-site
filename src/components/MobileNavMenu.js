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
      <nav className="mobile-nav text-center" >
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