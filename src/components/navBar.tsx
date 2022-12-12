import logo from '../assets/logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import Typography from '@mui/material/Typography';
import '../stylesheets/navBar.css';
const NavBar = (): JSX.Element => {
    return (
        <>
            <nav className="nav" id="navbar">
                <div className="nav-logo"><Typography
                    variant="h6"
                    noWrap
                    component="div"
                ><Link className="logo-nav"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration={200}
                >
                        <img className="logo" src={logo} alt="logo" />
                    </Link>

                </Typography></div>
                <ul className="nav-items">
                    <li className="nav-item"><Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-48}
                        duration={200}
                    >
                        {`Home`.toUpperCase()}
                    </Link></li>
                    <li className="nav-item"><Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-48}
                        duration={200}
                    >
                        {`About`.toUpperCase()}
                    </Link></li>
                    <li className="nav-item"><Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-48}
                        duration={200}
                    >
                        {`Services`.toUpperCase()}
                    </Link></li>
                    <li className="nav-item"><Link className="nav-link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={200}
                    >
                        {`Portfolio`.toUpperCase()}
                    </Link></li>
                    <li className="nav-item"><Link className="nav-link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={200}
                    >
                        {`Contact`.toUpperCase()}
                    </Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;