import logo from '../images/portfolio-logo.png';

function Logo() {
    return (
        <span>
      <a href= "/">
        <img src={logo} alt="logo" className="w-10 h-auto m-2 fixed bottom-0 left-0 z-[1003] lg:top-0 lg:absolute"></img>
      </a>
    </span>
    )
}

export default Logo