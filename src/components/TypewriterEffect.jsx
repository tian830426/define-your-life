import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledH1 = styled.p``;

const TypewriterEffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const element = document.getElementById("typewriter-effect");
    const listener = () => {
      const { top, bottom } = element.getBoundingClientRect();
      const isInViewport = top >= 0 && bottom <= window.innerHeight;
      if (isInViewport && !isDisplayed) {
        setIsDisplayed(true);
      }
    };
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [isDisplayed]);

  useEffect(() => {
    let index = -1;
    if (isDisplayed) {
      const timer = setInterval(() => {
        setDisplayText((prevDisplayText) => {
          if (index < text.length) {
            return prevDisplayText + text[index];
          } else {
            return prevDisplayText;
          }
        });
        index++;
        if (index === text.length) {
          clearInterval(timer);
        }
      }, delay);

      return () => clearInterval(timer);
    }
  }, [isDisplayed, text, delay]);

  return <StyledH1 id="typewriter-effect">{displayText}</StyledH1>;
};

export default TypewriterEffect;
