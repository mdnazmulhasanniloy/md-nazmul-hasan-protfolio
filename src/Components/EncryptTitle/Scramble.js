export const scramble = ({ intervalRef, TARGET_TEXT, setText }) => {
  const CHARS = "!@#$%^&*():{};|,.<>/?";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  let pos = 0;

  intervalRef.current = setInterval(() => {
    const scrambled = TARGET_TEXT.split("")
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

    if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
      stopScramble();
    }
  }, SHUFFLE_TIME);
};

export const stopScramble = (title, intervalRef, setText) => {
  clearInterval(intervalRef.current || undefined);

  setText(title);
};
