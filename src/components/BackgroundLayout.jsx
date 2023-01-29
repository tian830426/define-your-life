import React from "react";
import styled from "styled-components";
import ButtonSideBar from "../components/ButtonSideBar";
import StepByStep from "../components/StepByStep/StepByStep";

const EditCenter = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  // background-color: #95a7b5;
  background: rgb(222, 208, 173);
  // padding-top: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BackgroundLayout = () => {
  return (
    <>
      <EditCenter>
        <ButtonSideBar />
        <StepByStep />
      </EditCenter>
    </>
  );
};

export default BackgroundLayout;
