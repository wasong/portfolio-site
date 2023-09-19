import logo from '../images/portfolio-logo.png';

function Logo() {
    return (
        <span className='logo'>
          <a href= "/">
            <img src={logo} alt="logo" className="w-10 h-auto m-2 fixed bottom-0 left-3 z-[1003] lg:top-0 lg:fixed"></img>
          </a>
        </span>
    )
}

export default Logo