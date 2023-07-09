import { homeIconWhiteBg, aboutMeIcon } from "../globals/globals"

function DesktopNavMenu() {

    return (
        <nav className="desktop-nav-menu hidden lg:block fixed z-50 right-[2rem] top-[10rem]">
            <ul>
                <li>  <a href="/"><div>{homeIconWhiteBg}</div></a>  </li>   
                <li>  <a href="/"><div>{aboutMeIcon}</div></a>  </li>
            </ul>
        </nav>
    )
}

export default DesktopNavMenu;