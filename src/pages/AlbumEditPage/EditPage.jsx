import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

import ButtonSideBar from "../../components/ButtonSideBar";
import StepByStep from "./StepByStep/StepByStep";

const EditPage = () => {
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        <StepByStep />
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
};

export default EditPage;
