 import About from "../About/About";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import {motion} from "framer-motion";
import "./Home.css"
 import {FaGithub , FaInstagram, FaLinkedinIn} from "react-icons/fa"



const Home = () => {
    const variants ={
        initial:{
            y:20,
            opacity: 0
        },
        animate:{
            y:0,
            opacity: 1,
            transition:{
                duration: 0.5,
                staggerChildren: 0.1,
            }
        },

    }
    return (
        <>
        <section id='home' className='home'>
            <motion.div className="home-content" variants={variants} initial="initial" whileInView="animate"> 
            <motion.h1 variants={variants} >Hi, It's <br /> <motion.span variants={variants}>Nazmul Hasan</motion.span></motion.h1>
            <motion.div variants={variants} className="text-animate">
                {/* <h2>I'm a <span>Front-End Developer</span></h2> */}
                {/* <h2>I'm a <span>Web Developer</span></h2> */}
                <h2>MERN-Stack Developer</h2>
            </motion.div>
            <motion.p variants={variants}>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles. Showcasing my expertise in React.js and web development.
            </motion.p>
            <div className="btn-box">
                <motion.a variants={variants} href="#hire-me" className='btn' >Hire Me</motion.a>
                <motion.a variants={variants} href="" className='btn' >Show My CV</motion.a>
            </div>
            </motion.div>
            <motion.div className="home-sci" variants={variants}>
                <a href="https://github.com/mdnazmulhasanniloy" target="_blank"><FaGithub  /></a>
                <a href="https://www.linkedin.com/in/mdnazmulhasan323" target="_blank"><FaLinkedinIn /></a>
                <a href="#" target="_blank"><FaInstagram /></a>
            </motion.div>
            {/* <div className="home-image-hover"></div> */}
        </section>
        <About />
        <Education />
        <Skills />
        </>
    );
};

export default Home;