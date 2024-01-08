import profile from "../../assets/profile.jpg"
import "./About.css"

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <img src={profile} alt="" />
                <span className='circle-spin'></span>
            </div>
            <div className="about-content">
                <h3>MERN-Stack Developer</h3>
                <p>
                    I`m a junior full-stack developer. I made many projects, similar to single item selling sites, e-commerce, travel booking, doctor appointment booking, and more. All the projects are interactive. I`m comfortable with React JS, Node Js, Express JS, MongoDB, and the capacity to write clean and productive code.

I recently completed a course in Web Development at Programming Hero. I now want to apply my skills in IT Industry. As a junior full-stack developer, I can implement development concepts to design innovative and ingenious applications for users.

                </p>
                <div className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    );
};

export default About;