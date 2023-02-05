import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

import ButtonSideBar from "../../components/ButtonSideBar";
import StepByStep from "./StepByStep/StepByStep";

// const StepOne = (props) => {
//   return <>StepOne{props.image}</>
// }
// const StepOne = (props) => {
//   return <><StepOne /></>;
// };

// const StepTwo = (props) => {
//   return <>StepTwo{props.image}</>;
// };

// const StepThree = (props) => {
//   return <>StepThree{props.image}</>;
// };
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const EditPage = () => {
  const [bgColor, setBgColor] = useState(randomColor());
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        {/* <ButtonSideBar /> */}
        <div style={{ backgroundColor: bgColor }}>
          <button onClick={() => setBgColor(randomColor())}>
            Change Background Color
          </button>
        </div>
        <StepByStep />
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
};

export default EditPage;
