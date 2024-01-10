import {motion, useScroll } from "framer-motion";
import "./Education.css";
import {FaCalendarAlt} from "react-icons/fa"
import { courses, educations } from "../../Components/fackData";
import { useRef } from "react";

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

 
    console.log("object", scrollYProgress)
    return (
        <section  className='education' id='education'>
            <h2 className="heading">My <span>Journey</span></h2>
            <div  className="education-row">
                <div className="education-column" ref={ref}>
                    <div className="title">
                        Education
                    </div>
                    <div className="education-box" >
                    <motion.div className="education-box-animation" 
                    // initial={{scaleY:0}}
                    style={{scaleY:scrollYProgress}}
                    ></motion.div>
                     

                    {
                        educations?.map(education=><div className="education-content">
                        <div className="content">
                            <div className="year"> <i><FaCalendarAlt /></i> <i>{education?.year}</i></div>
                            <h3>{education?.degree}</h3>
                            <p>
                                {
                                     education?.description
                                } 
                            </p>
                        </div>
                    </div>)
                    }
                        
                        
                    </div>
                </div>

                <div className="education-column">
                    <div className="title">
                        Professional Courses
                    </div>
                    <div className="education-box">
                         
                    {
                        courses?.map((course, index)=><div className="education-content" key={index}>
                        <div className="content">
                            <div className="year"> <i><FaCalendarAlt /></i> <i>{course?.year}</i></div>
                            <h3>{course?.courseName}</h3>
                            <p>
                                {
                                     course?.description
                                } 
                            </p>
                        </div>
                    </div>)
                    }
                        

                         
                         
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
