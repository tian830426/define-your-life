import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  width: ${(props) => `${100 * props.count.length}%`};
  height: 100%;
`;

const MultiChildScroller = ({ className, children }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // const windowRef = useRef(window);

  const [isMouseIn, setIsMouseIn] = useState(false);

  const handleWheel = (e) => {
    e.preventDefault();
    const step = 1 / (children.length - 1) / 10;
    const container = containerRef.current;
    const { clientWidth, scrollWidth } = container;

    if (e.wheelDeltaY > 0) {
      setProgress((prev) => {
        const newProgress = Math.max(0, prev - step);
        container.scrollLeft = newProgress * (scrollWidth - clientWidth);
        return newProgress;
      });
    } else {
      setProgress((prev) => {
        const newProgress = Math.min(1, prev + step);
        container.scrollLeft = newProgress * (scrollWidth - clientWidth);
        return newProgress;
      });
    }
  };

  const handleMouseEnter = () => {
    setIsMouseIn(true);
    // windowRef.current.addEventListener("wheel", handleWheel, {
    //   passive: false,
    // });
  };
  const handleMouseLeave = () => {
    setIsMouseIn(false);
    // windowRef.current.removeEventListener("wheel", handleWheel);
    // console.log("leave");
  };

  useEffect(() => {
    if (isMouseIn == true) {
      window.addEventListener("wheel", handleWheel, {
        passive: false,
      });
      //1. delete components => return() 
      //2. isMouseIn 狀態改變 => return()
      return () => window.removeEventListener("wheel", handleWheel);
    }
    
  }, [isMouseIn]);

  return (
    <Container
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InnerContainer count={children}>{children}</InnerContainer>
    </Container>
  );
};

export default MultiChildScroller;
