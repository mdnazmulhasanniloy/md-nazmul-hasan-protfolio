import React from "react";
import "./AllSkillsShow.css";
import Skill from "../Skill/Skill";
import { motion } from "framer-motion";

const AllSkillsShow = () => {
  return (
    <div className="skills-show">
      <motion.div className="web" whileHover={{ scale: 1.05 }}>
        Web
      </motion.div>

      <Skill name={"Html"} x={`-12vw`} y={`0vw`} />
      <Skill name={"Css"} x={`12vw`} y={`0vw`} />
      <Skill name={"Tailwind"} x={`-0vw`} y={`-5vw`} />
      <Skill name={"Bootstrap"} x={`0vw`} y={`5vw`} />

      <Skill name={"ReactJs"} x={`-11vw`} y={`-7vw`} />
      <Skill name={"Redux"} x={`11vw`} y={`7vw`} />
      <Skill name={"NodeJs "} x={`11vw`} y={`-7vw`} />
      <Skill name={"ExpressJs "} x={`-11vw`} y={`7vw`} />

      <Skill name={"Javascript"} x={`0vw`} y={`17vw`} />
      <Skill name={"Firebase"} x={`0vw`} y={`-17vw`} />
      <Skill name={"MongoDB "} x={`23.5vw`} y={`0vw`} />
      <Skill name={"JWT Token "} x={`-23.5vw`} y={`0vw`} />

      {/* <Skill name={"Material Ui"}  x={`-10vw`} y={`-11vw`} />
                
               
                
                 */}
    </div>
  );
};

export default AllSkillsShow;
