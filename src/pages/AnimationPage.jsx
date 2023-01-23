import React from "react";
import { Link } from "react-router-dom";
import animationBgimg from "../assets/toy.JPG"
// import UseAnimationWord from "../hooks/UseAnimationWord"
// import NavbarLayout from "../components/NavbarLayout";


const AnimationPage = () => {
  return (
    <div>
      <div className="animationPage">
        <Link to= "/home" className="animationTitle">define your life</Link>
      <img className="animationBgimg" src={animationBgimg} alt="animationBgimg" />
    </div>
    </div>
  )
};

export default AnimationPage;