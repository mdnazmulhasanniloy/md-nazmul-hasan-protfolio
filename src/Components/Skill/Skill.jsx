import React from 'react';
import {motion} from "framer-motion";

const Skill = ({name, x, y}) => {
    return (
        <motion.div className="skill"
                    whileHover={{scale:1.05}}
                    initial={{x:0, y:0}}
                    whileInView={{x:x, y:y}}
                    transition={{duration: 1.5}}
                >{name}</motion.div>
    );
};

export default Skill;