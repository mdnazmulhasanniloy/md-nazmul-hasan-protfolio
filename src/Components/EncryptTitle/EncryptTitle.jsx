import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EncryptTitle = ({ title }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(title);
  const [ref, inView] = useInView();

  // const TARGET_TEXT = "Encrypt data";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;

  const CHARS = "!@#$%^&*():{};|,.<>/?";

  useEffect(() => {
    if (inView) {
      scramble();
    }
  }, [inView]);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = title
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= title.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(title);
  };

  console.log("hello", intervalRef);

  return (
    <motion.h2
      ref={ref}
      // onMouseLeave={stopScramble}

      className="heading"
    >
      {text.split(" ")[0]} <span>{text.split(" ")[1]}</span>
    </motion.h2>
  );
};

export default EncryptTitle;
