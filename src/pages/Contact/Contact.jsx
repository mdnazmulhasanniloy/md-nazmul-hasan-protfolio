 import { IoIosSend } from "react-icons/io";
import "./Contact.css"
import Footer from "../shared/Footer/Footer";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";


const Contact = () => {
    const ref =useRef();
    const isInView= useInView(ref, {margin: `-100px`})
    const variants ={
        initial:{
            y:500,
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
        <section className="contact" id='contact'>
            <motion.h2 className="heading" variants={variants}>Contact <span>Me!</span></motion.h2>
            <motion.div className="contact-row"  variants={variants} initial="initial" whileInView="animate">
                <div className="contact-column">
                    <motion.h1 variants={variants}>Let's work <span>together.</span></motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <a href="mailto:mdnazmulhasanniloy323@gmail.com">mdnazmulhasanniloy323@gmail.com</a> 
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Address</h2>
                        <a href="#">Lalmai, Cumilla, Bangladesh</a>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Phone</h2>
                        <a href="tel:+8801518963455">+880 1518963455</a>
                    </motion.div>
                </div>
                <div ref={ref} className="contact-column form-column">
                    <motion.div className="phone-svg" 
                    initial={{opacity:1}} 
                    whileInView={{opacity:0}} 
                    transition={{delay:5, duration:1}}>

                         <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                            <motion.path 
                            initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration:5,}}
                            d="M50,3A47,47,0,0,0,3,50c0,1.51.07,3,.22,4.54l3-.29C6.1,52.85,6,51.42,6,50A44,44,0,1,1,18.17,80.33l5.54-5.66,6.23,6.23a7.5,7.5,0,0,0,5.29,2.19,7.38,7.38,0,0,0,2.53-.45A76.16,76.16,0,0,0,64.87,65.46a76.1,76.1,0,0,0,17.77-27.7,7.48,7.48,0,0,0-1.74-7.83l-12.05-12a4.68,4.68,0,0,0-6.61,0L54,26.16a4.67,4.67,0,0,0,0,6.61l8.17,8.17L41,62.14,32.78,54a4.7,4.7,0,0,0-6.62,0l-8.27,8.27a4.67,4.67,0,0,0,0,6.61l3.67,3.67L15,79.24A1.52,1.52,0,0,0,15,81.31,47,47,0,1,0,50,3ZM19.56,65.55A1.65,1.65,0,0,1,20,64.38l8.27-8.27a1.64,1.64,0,0,1,2.32,0l9.24,9.25a1.53,1.53,0,0,0,2.15,0L65.36,42a1.53,1.53,0,0,0,0-2.15l-9.24-9.24a1.63,1.63,0,0,1-.48-1.16,1.65,1.65,0,0,1,.48-1.17L64.38,20a1.66,1.66,0,0,1,2.33,0l12,12a4.43,4.43,0,0,1,1,4.63A73,73,0,0,1,62.73,63.3a72.83,72.83,0,0,1-26,16.49,4.41,4.41,0,0,1-4.63-1l-12-12A1.64,1.64,0,0,1,19.56,65.55Z"/></svg>
                    </motion.div> 
                <motion.form id="hire-me"
                initial={{opacity:0}} 
                whileInView={{opacity:1}} 
                transition={{delay:6, duration:1}}
                
                >
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full Name" required/>
                        <span className="focus"></span>
                    </div>

                    <div className="input-field">
                        <input type="email" placeholder="Email Address" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type='tel' placeholder="Mobile Number" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Subject" required/>
                        <span className="focus"></span>
                    </div>
                    
                </div>
                <div className="textarea-field">
                        <textarea name='' id='' cols={30} rows={8} placeholder="Your Message" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="btn-box btns">
                        <button type='submit' className="btn">Send <IoIosSend /></button>
                    </div>
            </motion.form>
                </div>
            </motion.div>
          
        </section>
        <Footer />
        </>
    );
};



export default Contact;
