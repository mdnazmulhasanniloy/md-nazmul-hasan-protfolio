 import About from "../About/About";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import "./Home.css"
 import {FaGithub , FaInstagram, FaLinkedinIn} from "react-icons/fa"



const Home = () => {
    return (
        <>
        <section id='home' className='home'>
            <div className="home-content"> 
            <h1>Hi, It's <br /> <span>Nazmul Hasan</span></h1>
            <div className="text-animate">
                {/* <h2>I'm a <span>Front-End Developer</span></h2> */}
                {/* <h2>I'm a <span>Web Developer</span></h2> */}
                <h2>MERN-Stack Developer</h2>
            </div>
            <p>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles. Showcasing my expertise in React.js and web development.
            </p>
            <div className="btn-box">
                <a href="#hire-me" className='btn' >Hire Me</a>
                <a href="" className='btn' >Show My CV</a>
            </div>
            </div>
            <div className="home-sci">
                <a href="https://github.com/mdnazmulhasanniloy" target="_blank"><FaGithub  /></a>
                <a href="www.linkedin.com/in/mdnazmulhasan323" target="_blank"><FaLinkedinIn /></a>
                <a href="#" target="_blank"><FaInstagram /></a>
            </div>
            {/* <div className="home-image-hover"></div> */}
        </section>
        <About />
        <Education />
        <Skills />
        </>
    );
};

export default Home;