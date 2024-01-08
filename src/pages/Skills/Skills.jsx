import React from 'react';
import "./Skills.css"
import Contact from '../Contact/Contact';

const Skills = () => {
    return (
        <>
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>
            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>HTML <span>95%</span></h3>
                                <div className="bar"><span style={{width:"95%"}}></span></div>
                            </div>
                            <div className="progress">
                                <h3>Css <span>90%</span></h3>
                                <div className="bar"><span style={{width:"90%"}}></span></div>
                            </div>
                            <div className="progress">
                                <h3>JavaScript <span>80%</span></h3>
                                <div className="bar"><span style={{width:"80%"}}></span></div>
                            </div>
                            <div className="progress">
                                <h3>ReactJs <span>65%</span></h3>
                                <div className="bar"><span style={{width:"65%"}}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>Redux <span>70%</span></h3>
                                <div className="bar"><span style={{width:"60%"}}></span></div>
                            </div>
                            <div className="progress">
                                <h3>NodeJs <span>70%</span></h3>
                                <div className="bar"><span style={{width:"70%"}}></span></div>
                            </div>
                            <div className="progress">
                                <h3>ExpressJs <span>75%</span></h3>
                                <div className="bar"><span style={{width:"75%"}}></span></div>
                            </div>
                            <div className="progress">
                                <h3>Mongodb <span>70%</span></h3>
                                <div className="bar"><span style={{width:"70%"}}></span></div>
                            </div>
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