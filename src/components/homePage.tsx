import NavBar from "./deskTopView";
import '../stylesheets/homePage.css';
import Particle from "./Particles";
import Header from "./header";
import { Typewriter } from "react-simple-typewriter";

const HomePage = (): JSX.Element => {

    return (
        <>
            <div className="home" id="home">
                <Particle />
                <div className='home-container'>
                    <h1>Hello, I'm <span className="name">Gemechis Urgessa.</span></h1>
                    <Typewriter
                        words={['FULL-STACK DEVELOPER', 'MOBILE APPLICATION DEVELOPER', 'SOFTWARE ENGINEER']}
                        loop={3}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={70}
                        delaySpeed={1000}
                    />
                </div>
                <div>
                    <button className="btn btn-home"><div className="btn-drop">.</div>ABOUT</button>
                </div>
            </div>

        </>
    )
}

export default HomePage;