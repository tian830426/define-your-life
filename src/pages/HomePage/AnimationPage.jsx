import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import animationBgimg from "../../assets/toy.jpg";
// import { NavbarTitleStyle } from "../../components/NavbarTitleStyle";

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

const NavbarTitleStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font: bold 4.2vw/1.6 "Signika", sans-serif;
  user-select: none;
  animation: focus-in-expand 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  letter-spacing: 8px;

  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }

  span {
    display: inline-block;
    animation: float 0.2s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: none;
    }
    33% {
      transform: translateY(-1px) rotate(-2deg);
    }
    66% {
      transform: translateY(1px) rotate(2deg);
    }
  }
  body:hover span {
    animation: bounce 0.6s;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0);
    }
    25% {
      transform: rotateX(20deg) translateY(2px) rotate(-3deg);
    }
    50% {
      transform: translateY(-20px) rotate(3deg) scale(1.1);
    }
  }

  span:nth-child(4n) {
    color: hsl(50, 75%, 55%);
    text-shadow: 1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%),
      3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%);
  }
  span:nth-child(4n-1) {
    color: hsl(135, 35%, 55%);
    text-shadow: 1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%),
      3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%);
  }
  span:nth-child(4n-2) {
    color: hsl(155, 35%, 60%);
    text-shadow: 1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%),
      3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%);
  }
  span:nth-child(4n-3) {
    color: hsl(30, 65%, 60%);
    text-shadow: 1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%),
      3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%);
  }

  span:nth-child(2) {
    animation-delay: 0.05s;
  }
  span:nth-child(3) {
    animation-delay: 0.1s;
  }
  span:nth-child(4) {
    animation-delay: 0.15s;
  }
  span:nth-child(5) {
    animation-delay: 0.2s;
  }
  span:nth-child(6) {
    animation-delay: 0.25s;
  }
  span:nth-child(7) {
    animation-delay: 0.3s;
  }
  span:nth-child(8) {
    animation-delay: 0.35s;
  }
  span:nth-child(9) {
    animation-delay: 0.4s;
  }
  span:nth-child(10) {
    animation-delay: 0.45s;
  }
  span:nth-child(11) {
    animation-delay: 0.5s;
  }
  span:nth-child(12) {
    animation-delay: 0.55s;
  }
  span:nth-child(13) {
    animation-delay: 0.6s;
  }
  span:nth-child(14) {
    animation-delay: 0.65s;
  }
`;

const NavbarTitleH1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  user-select: none;
  letter-spacing: 8px;
  span {
    display: inline-block;
  }

  span:nth-child(4n) {
    color: hsl(50, 75%, 55%);
    text-shadow: 1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%),
      3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%);
  }
  span:nth-child(4n-1) {
    color: hsl(135, 35%, 55%);
    text-shadow: 1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%),
      3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%);
  }
  span:nth-child(4n-2) {
    color: hsl(155, 35%, 60%);
    text-shadow: 1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%),
      3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%);
  }
  span:nth-child(4n-3) {
    color: hsl(30, 65%, 60%);
    text-shadow: 1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%),
      3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%);
  }

  @media (max-width: 1550px) {
    font-size: 45px;
  }

  @media (max-width: 1310px) {
    font-size: 40px;
  }

  @media (max-width: 1110px) {
    font-size: 37px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
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
