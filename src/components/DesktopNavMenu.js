import { homeIconWhiteBg, aboutMeIcon, projectsIcon, contactMeIcon } from "../globals/globals"

function DesktopNavMenu() {

    return (
        <nav className="desktop-nav-menu hidden lg:block fixed z-50 right-[2rem] top-[50%] transform -translate-y-1/2">
            <ul className="flex flex-col items-center">
                <li>  <a href="/#page-header"><div>{homeIconWhiteBg}</div></a>  </li>   
                <li>  <a href="/#about"><div>{aboutMeIcon}</div></a>  </li>
                <li>  <a href="/#projects"><div>{projectsIcon}</div></a>  </li>
                <li>  <a href="/#contact"><div>{contactMeIcon}</div></a>  </li>
            </ul>
        </nav>
    )
}

export default DesktopNavMenu;