import logo from '../assets/logo.svg';
import '../stylesheets/navBar.css';
const NavBar = (): JSX.Element => {
    return (
        <div>

            <nav>
                <img className="logo" src={logo} alt="Logo Image" />
                <ul>
                    <li>HOME</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;