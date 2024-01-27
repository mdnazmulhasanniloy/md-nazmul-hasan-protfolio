import About from "../About/About";
import { motion } from "framer-motion";
import "./Home.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import BgSvg from "../../Components/SvgExports/BgSvg";

const Home = () => {
  const variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <section id="home" className="home">
        <motion.div
          className="home-content"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1 variants={variants}>
            Hi, It's <br />{" "}
            <motion.span variants={variants}>Nazmul Hasan</motion.span>
          </motion.h1>
          <motion.div variants={variants} className="text-animate">
            <h2>
              <TypeAnimation
                repeat={Infinity}
                sequence={[
                  "MERN-Stack Developer",
                  1000,
                  "Full-Stack Developer",
                  1000,
                  "Front-End Developer",
                  1000,
                  "Back-End Developer",
                  1000,
                ]}
              />
            </h2>
          </motion.div>
          <motion.p variants={variants}>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles. Showcasing my expertise in React.js and web development.
          </motion.p>
          <div className="btn-box">
            <motion.a variants={variants} href="#hire-me" className="btn">
              Hire Me
            </motion.a>
            <motion.a
              variants={variants}
              target="_blank"
              href="https://drive.google.com/file/d/1nJzmICcKUVs7YFSgojIGnLFn_1sm0_dc/view?usp=sharing"
              className="btn"
            >
              Show My CV
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="home-sci"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.a
            href="https://github.com/mdnazmulhasanniloy"
            target="_blank"
            variants={variants}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mdnazmulhasan323"
            target="_blank"
            variants={variants}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mdnazmulhasan323/"
            target="_blank"
            variants={variants}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>

        <div className="html-bg-icon">
          <FaHtml5 className="svg" />
        </div>
        <FaJs className="js-bg-icon" />
        <FaReact className="reactJs-bg-icon" />

        {/* <div className="home-image-hover"></div> */}
        <div className="bg-svg">
          <BgSvg className="svg1" />
        </div>
        <div className="bg-svg">
          <BgSvg className="svg2" />
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
