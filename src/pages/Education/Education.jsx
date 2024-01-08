import "./Education.css";
import {FaCalendarAlt} from "react-icons/fa"

const Education = () => {
    
    return (
        <section className='education' id='education'>
            <h2 className="heading">My <span>Journey</span></h2>
            <div className="education-row">
                <div className="education-column">
                    <div className="title">
                        Education
                    </div>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2019 - 1023</i></div>
                                <h3>Diploma in CSE</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem cumque odio ipsum animi, iusto nihil tempora commodi iste facere!

                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2021 - present</i></div>
                                <h3>{`Fazil (Degree)`}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem cumque odio ipsum animi, iusto nihil tempora commodi iste facere!
                                    
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2020</i></div>
                                <h3>{`HSC`}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem cumque odio ipsum animi, iusto nihil tempora commodi iste facere!
                                    
                                </p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2018</i></div>
                                <h3>{`SSC`}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem cumque odio ipsum animi, iusto nihil tempora commodi iste facere!
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-column">
                    <div className="title">
                        Professional Courses
                    </div>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2019 - 1023</i></div>
                                <h3>Complete Web Development</h3>
                                <p>
                                    Programming Hero
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2021 - present</i></div>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem cumque odio ipsum animi, iusto nihil tempora commodi iste facere!
                                    
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><FaCalendarAlt /></i> <i>2020</i></div>
                                <h3>Mobile applycation project</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem cumque odio ipsum animi, iusto nihil tempora commodi iste facere!
                                    
                                </p>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;