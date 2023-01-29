import React from "react";
import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";
// import { random } from "lodash";

const MagicOcean = ["step1:", "step2:"];
let index = 0;

function StepMenu() {
  const [magicName, setMagicName] = useState(
    "Let's try to make special and pretty album by myself.","12344"
  );
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 10000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);
  return (
    <div className="App">
      <p className="cursor">{name}</p>
    </div>
  );
}

export default StepMenu;
