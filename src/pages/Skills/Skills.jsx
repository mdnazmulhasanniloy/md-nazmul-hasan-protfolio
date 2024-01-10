import React from 'react';
import "./Skills.css"
import Contact from '../Contact/Contact'
import AllSkillsShow from '../../Components/AllSkillsShow/AllSkillsShow';
import { backEnd, frontEnd } from './Skill';
import {motion} from "framer-motion"

const Skills = () => {

    
    return (
        <>
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>
            {/* <AllSkillsShow /> */}
            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Front-end Skill</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                             
                            {
                                frontEnd?.map(Skill=> <div className="progress" key={Skill?.title}>
                                <h3>{Skill?.title} <span>{Skill?.percentage}%</span></h3>
                                <div className="bar">
                                    <motion.span 
                                        initial={{width: 0}}
                                        whileInView={{width: `${Skill?.percentage}%`}}
                                        transition={{duration: 1.5}}
                                    ></motion.span>
                                </div>
                            </div>

                            )
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="skills-column">
                    <h3 className="title">Back-end Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            {
                                backEnd?.map(Skill=> <div className="progress" key={Skill?.title}>
                                <h3>{Skill?.title} <span>{Skill?.percentage}%</span></h3>
                                    <div className="bar">
                                        <motion.span 
                                            initial={{width: 0}}
                                            whileInView={{width: `${Skill?.percentage}%`}}
                                            transition={{duration: 1.5}}
                                        ></motion.span>    
                                    </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
        </>
    );
};

export default Skills;