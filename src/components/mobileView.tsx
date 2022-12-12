import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Link, animateScroll as scroll } from "react-scroll";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
const MobileView = () => {
    const [open, setOpen] = useState(false);
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
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <Toolbar className={bg ? 'navbar__mob navbar-mob-bg' : 'navbar__mob'}>

            <Typography
                variant="h6"
                noWrap
                component="div"
            ><Link className="logo"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >
                    {`dev-max`.toUpperCase()}
                </Link>

            </Typography><IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                }}
            >
                <MenuIcon onClick={handleDrawerOpen} />
            </IconButton>
            <Drawer className="drawer"

                {...{
                    sx: {
                        width: '200px',
                        height: '600px'

                    },
                    anchor: "top",
                    open: open,
                    onClose: handleDrawerClose,
                }}
            >

                {['Home', 'About', 'Services', 'portfolio', 'contact'].map((text, index) => (
                    <ListItemButton>
                        <div className="nav-item nav__mob"><Link className="nav-link"
                            activeClass="active"
                            to={text.toLowerCase() as string}
                            spy={true}
                            smooth={true}
                            offset={-48}
                            duration={200}
                        >
                            {text.toUpperCase()}
                        </Link>
                        </div>
                    </ListItemButton>
                ))}

            </Drawer>
        </Toolbar>
    );
}

export default MobileView;