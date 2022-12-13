import '../stylesheets/about.css';
import { SiFastapi } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import { GiDeskLamp } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
const About = () => {
    return (
        <section className="about-page" id="about">
            <div className="container-about-header">
                <h1 className="about-title">A<span className="about-title-span">b</span>OUT</h1>
                <div className="about-header-underline"></div>
            </div>
            <div className="container-about-info">
                <div className="container-pentagon">
                    <div className="pentagon">
                        <SiFastapi />
                    </div>
                    <div className="pentagon-des">
                        <h3>FAST</h3>
                        <p>Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                </div>
                <div className="container-pentagon">
                    <div className="pentagon">
                        <DiResponsive className="icon" />
                    </div>
                    <div className="pentagon-des">
                        <h3>Responsive</h3>
                        <p>My layouts will work on any device, big or small.</p>
                    </div>
                </div>
                <div className="container-pentagon">
                    <div className="pentagon">
                        <GiDeskLamp />
                    </div>
                    <div className="pentagon-des">
                        <h3>Intuitive</h3>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>
                    </div>
                </div>
                <div className="container-pentagon">
                    <div className="pentagon">
                        <IoIosRocket />
                    </div>
                    <div className="pentagon-des">
                        <h3>Dynamic</h3>
                        <p>Websites don't have to be static, I love making pages come to life.</p>
                    </div>
                </div>
            </div>

            <div className="container-about-content">
                <div className="container-about-intro">
                    <h2><span className="first-name">GEMECHIS</span> <span className="last-name">URGESSA</span></h2>
                    <p className="intro-description">I am software engineering student, Full-stack and mobile applications developer who is Solution-oriented and problem solver with more than 2 years of experience building and
                        maintaining software and software architecture. Highly skilled in web development, mobile
                        application development, communication, collaboration, and technical documentation..</p>
                </div>
                <div className="container-about-process">

                </div>
            </div>
        </section>
    )

}


export default About;