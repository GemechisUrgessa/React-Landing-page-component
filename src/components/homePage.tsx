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
                        words={['FULL_STACK DEVELOPER', 'MOBILE APPLICATION DEVELOPER']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                </div></div>

        </>
    )
}

export default HomePage;