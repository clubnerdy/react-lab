import { useState, useEffect, useRef } from "react";

const chars = "가나다라마바사아자차카타파하";
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const roles = ["퍼블리셔", "디자이너", "개발자", "기획자"];

const useScramble = () => {
  const [text, setText] = useState(roles[0]);
  const roleIndex = useRef(0);

  useEffect(() => {
    const scrambleTo = (target) => {
      let iter = 0;
      const maxIter = 12;
      const interval = setInterval(() => {
        setText(
          target
            .split("")
            .map((char, i) => {
              if (iter > i * (maxIter / target.length)) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );
        if (++iter > maxIter) {
          setText(target);
          clearInterval(interval);
        }
      }, 50);
    };

    const cycle = setInterval(() => {
      roleIndex.current = (roleIndex.current + 1) % roles.length;
      scrambleTo(roles[roleIndex.current]);
    }, 3000);

    return () => clearInterval(cycle);
  }, []);

  return text;
};

export default useScramble;
