import { homeIconWhiteBg } from "../globals/globals"

function DesktopNavMenu() {

    return (
        <nav className="desktop-nav-menu">
            <ul>
                <li><img src={homeIconWhiteBg} alt="Home" /></li>   
            </ul>
        </nav>
    )
}

export default DesktopNavMenu;