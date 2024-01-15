import { motion, useScroll, useSpring } from "framer-motion";
import "./Education.css";
import { FaCalendarAlt } from "react-icons/fa";
import { courses, educations } from "../../Components/fackData";
import { useRef } from "react";
import EncryptTitle from "../../Components/EncryptTitle/EncryptTitle";
import Skills from "../Skills/Skills";

const Education = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: [["start end", "center end"]],
  // });

  // const scaleY = useSpring(scrollYProgress);

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
      <section className="education" id="education">
        <EncryptTitle title={`My Journey`} />
        <div className="education-row">
          <div className="education-column">
            <div className="title">Education</div>
            <div
              className="education-box"

              // ref={ref}
            >
              <motion.div
                className="education-box-animation"
                // initial={{scaleY:0}}
                // style={{ scaleY: scrollYProgress }}
              />

              {educations?.map((education, index) => (
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  className="education-content"
                  key={index}
                >
                  <div className="content">
                    <div className="year">
                      {" "}
                      <i>
                        <FaCalendarAlt />
                      </i>{" "}
                      <i>{education?.year}</i>
                    </div>
                    <h3>{education?.degree}</h3>
                    <p>{education?.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="education-column">
            <div className="title">Professional Courses</div>
            <div className="education-box">
              <motion.div
                className="education-box-animation"
                // initial={{scaleY:0}}
                // style={{ scaleY: scrollYProgress }}
              />
              {courses?.map((course, index) => (
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  className="education-content"
                  key={index}
                >
                  <div className="content">
                    <div className="year">
                      {" "}
                      <i>
                        <FaCalendarAlt />
                      </i>{" "}
                      <i>{course?.year}</i>{" "}
                      <a class="certificate" href={course?.certificate}>
                        Certificate{" "}
                      </a>
                    </div>
                    <h3>{course?.courseName}</h3>
                    <p>{course?.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default Education;
