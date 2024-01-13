import profile from "../../assets/profile.jpg";
import {animate, motion} from "framer-motion";
import "./About.css"

const About = () => {

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
        <section className="about" id="about">
            <motion.h2 className="heading">About <span>Me</span></motion.h2>
            <motion.div variants={variants} initial="initial" whileInView={`animate`} className="about-img">
                <img src={profile} alt="" />
                <span className='circle-spin'></span>
            </motion.div>
            <div className="about-content" variants={variants} initial="initial" whileInView="animate">
                <motion.h3 variants={variants}>MERN-Stack Developer</motion.h3>
                <motion.p variants={variants} > 
                    I`m a junior full-stack developer. I made many projects, similar to single item selling sites, e-commerce, travel booking, doctor appointment booking, and more. All the projects are interactive. I`m comfortable with React JS, Node Js, Express JS, MongoDB, and the capacity to write clean and productive code.

I recently completed a course in Web Development at Programming Hero. I now want to apply my skills in IT Industry. As a junior full-stack developer, I can implement development concepts to design innovative and ingenious applications for users.

                </motion.p>
                <motion.div variants={variants} className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;