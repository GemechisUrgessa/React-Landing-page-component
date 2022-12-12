import NavBar from "./deskTopView";
import '../stylesheets/homePage.css';
import Particle from "./Particles";
import Header from "./header";
import Typewriter from "typewriter-effect";

const HomePage = (): JSX.Element => {

    return (
        <>
            <div className="home" id="home">
                <Particle />
                <div className='home-container'>
                    <h1>Hello, I'm <span className="name">Gemechis Urgessa.</span></h1>
                    <Typewriter
                        options={{
                            strings: [
                                "Web Developer",
                                "Android/iOS Developer",
                                "React Js Developer",
                                "React Native Developer"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50
                        }}
                    />
                </div></div>

        </>
    )
}

export default HomePage;