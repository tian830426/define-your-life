import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85vw;
  height: 70vh;
  /* height: ${(props) => props.containerHeight}; */
  overflow: hidden;
  position: relative;
`;

const DisplayedWrapper = styled.div`
  display: inline-block;
  height: 70%;
  transform: ${(props) => props.transform};
  position: ${(props) =>
    props.progress <= 100
      ? props.progress >= 0
        ? "fixed"
        : "static"
      : "absolute"};
  bottom: 0;
`;

const EditBgMoveInWidthwise = ({ displayed, height }) => {
  const displayedWrapper = useRef(null);
  const container = useRef(null);
  const [containerHeight, setContainerHeight] = useState("0px");
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [progress, setProgress] = useState(0);

  const { innerWidth, innerHeight, addEventListener, removeEventListener } =
    window;

  const updateProgress = () => {
    const { scrollTop } = document.documentElement;
    const containerTop = container.current.offsetTop;
    const containerHeightNumber = container.current.offsetHeight;

    const newProgress =
      ((scrollTop - containerTop) * 100) /
      (containerHeightNumber - innerHeight);

    setProgress(newProgress);
  };

  useEffect(() => {
    if (!height) {
      setContainerHeight(
        `${(innerHeight * displayedWrapper.current.offsetWidth) / innerWidth}px`
      );
    } else {
      setContainerHeight(height);
    }

    setWrapperWidth(displayedWrapper.current.offsetWidth);
  }, [height]);

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  useEffect(() => {
    updateProgress();
    addEventListener("scroll", updateProgress);
    return () => {
      removeEventListener("scroll", updateProgress);
    };
  }, []);

  const transform =
    progress >= 0
      ? progress > 100
        ? `translateX(-${(100 * (wrapperWidth - innerWidth)) / wrapperWidth}%)`
        : `translateX(-${
            (progress * (wrapperWidth - innerWidth)) / wrapperWidth
          }%)`
      : "translateX(0%)";

  return (
    <Container ref={container}>
      <DisplayedWrapper
        transform={transform}
        progress={progress}
        ref={displayedWrapper}
      >
        {displayed}
      </DisplayedWrapper>
    </Container>
  );
};

export default EditBgMoveInWidthwise;
