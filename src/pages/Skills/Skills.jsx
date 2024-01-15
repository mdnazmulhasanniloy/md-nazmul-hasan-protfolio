import React from "react";
import "./Skills.css";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";
import { backEnd, frontEnd } from "../../Components/fackData";
import EncryptTitle from "../../Components/EncryptTitle/EncryptTitle";

const Skills = () => {
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
      <section className="skills" id="skills">
        <EncryptTitle title={`My Skills`} />
        {/* <AllSkillsShow /> */}
        <div className="skills-row">
          <motion.div
            className="skills-column"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.h3 variants={variants} className="title">
              Front-end Skill
            </motion.h3>
            <div className="skills-box">
              <div className="skills-content">
                {frontEnd?.map((Skill) => (
                  <div className="progress" key={Skill?.title}>
                    <h3>
                      {Skill?.title} <span>{Skill?.percentage}%</span>
                    </h3>
                    <div className="bar">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Skill?.percentage}%` }}
                        transition={{ duration: 1.5 }}
                      ></motion.span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="skills-column"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.h3 variants={variants} className="title">
              Back-end Skills
            </motion.h3>
            <div className="skills-box">
              <div className="skills-content">
                {backEnd?.map((Skill) => (
                  <div className="progress" key={Skill?.title}>
                    <h3>
                      {Skill?.title} <span>{Skill?.percentage}%</span>
                    </h3>
                    <div className="bar">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Skill?.percentage}%` }}
                        transition={{ duration: 1.5 }}
                      ></motion.span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Skills;
