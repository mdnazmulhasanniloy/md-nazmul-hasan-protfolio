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
            I`m a junior full-stack developer. I made many projects, similar to single item selling sites, e-commerce, travel booking, doctor appointment booking, and more. All the projects are interactive. I`m comfortable with React JS, Node Js, Express JS, MongoDB, and the capacity to write clean and productive code.
            </p>
            <div className="btn-box">
                <a href="#" className='btn' >Hire Me</a>
                <a href="#" className='btn' >Show My CV</a>
            </div>
            </div>
            <div className="home-sci">
                <a href="#"><FaGithub  /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
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