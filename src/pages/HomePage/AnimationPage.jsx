import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import animationBgimg from "../../assets/toy.jpg";
import { NavbarTitleStyle } from "../../components/NavbarTitleStyle";

const AnimationCenter = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: kenburns-top 5s ease-in-out both;
  @keyframes kenburns-top {
    0% {
      transform: scale(1) translateX(0);
      transform-origin: 50% 16%;
    }
    100% {
      transform: scale(1.1) translateX(0);
      transform-origin: 50% 16%;
    }
  }
`;

const AnimationBgimg = styled.img`
  width: 100vw;
  height: 100vh;
`;

function AnimationPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 7000);
  }, [navigate]);
  return (
    <div>
      <AnimationCenter>
        <Link to="/home">
          <NavbarTitleStyle>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
            <span> </span>
            <span>Y</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
            <span> </span>
            <span>L</span>
            <span>I</span>
            <span>F</span>
            <span>E</span>
          </NavbarTitleStyle>
        </Link>
        <AnimationBgimg src={animationBgimg} alt="animationBgimg" />
      </AnimationCenter>
    </div>
  );
}

export default AnimationPage;
