import { homeIconWhiteBg } from "../globals/globals"

function DesktopNavMenu() {

    return (
        <nav className="desktop-nav-menu hidden md:absolute block ">
            <ul>
                <li><img src={homeIconWhiteBg} alt="Home" /></li>   
            </ul>
        </nav>
    )
}

export default DesktopNavMenu;