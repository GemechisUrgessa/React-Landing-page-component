import logo from '../assets/logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import Typography from '@mui/material/Typography';

import { useEffect, useState } from 'react';
const DesktopView = (): JSX.Element => {
    const [bg, setBg] = useState(false);
    useEffect(() => {
        const changeBg = () => {
            if (window.scrollY >= 300) {
                console.log("scrollY: " + window.scrollY)
                setBg(true);
            }
            else {
                setBg(false);
            }
        }
        window.addEventListener("scroll", changeBg);
        return () => {
            window.addEventListener("scroll", changeBg);
        }
    }, []
    );

    return (
        <header>
            <nav className={bg ? 'nav nav-bg' : 'nav'} id="navbar">
                <div className="nav-logo"><Typography
                    variant="h6"
                    noWrap
                    component="div"
                ><Link className="logo"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration={200}
                >
                        {/* <img className="logo" src={logo} alt="logo" /> */}
                        DEV-MAX
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
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-48}
                        duration={200}
                    >
                        {`Portfolio`.toUpperCase()}
                    </Link></li>
                    <li className="nav-item"><Link className="nav-link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-48}
                        duration={200}
                    >
                        {`Contact`.toUpperCase()}
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default DesktopView;