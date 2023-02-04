import React from "react";
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

const EditPage = () => {
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        {/* <ButtonSideBar /> */}
        <StepByStep />
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
};

export default EditPage;
