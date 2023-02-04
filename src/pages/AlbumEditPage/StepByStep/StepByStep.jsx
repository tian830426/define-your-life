import React, { useState, useRef } from "react";
// edit album
import styled from "styled-components";
import StepMenu from "./StepMenu";
import PreviewCenter from "./PreviewAndDnd/PreviewCenter";
import EditWord from "./EditWord";
import EditBgFrame from "./EditBgFrame";
import UploadImg from "./UploadImg";
import Finish from "./Finish";
import Button from "../../../components/Button"

const StepBoxes = styled.div`
  width: 70%;
  height: 65%;
  border-radius: 20px;
  background-color: rgb(248, 248, 232);
  // margin: 120px auto;
`;

const StepContent = styled.div`
  width: 100%;
  height: 90%;
`;

const StepBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  }
`;

const StepByStep = () => {
  const [step, setStep] = useState(1);
  const imageRef = useRef("");

  const [buttonOpen, setButtonOpen] = useState(false)

  return (
    <>
      <StepBoxes>
        <StepContent>
          {step === 1 ? (
            <StepMenu image={imageRef.current} />
          ) : step === 2 ? (
            <PreviewCenter image={imageRef.current} />
          ) : step === 3 ? (
            <EditWord image={imageRef.current} />
          ) : step === 4 ? (
            <EditBgFrame image={imageRef.current} />
          ) : step === 5 ? (
            <UploadImg image={imageRef.current} />
          ) : (
            <Finish image={imageRef.current} />
          )}
        </StepContent>
        <StepBtn>
         {step == 0}
          <Button onClick={() => setStep(step - 1)}>prev</Button>
          <Button onClick={() => setStep(step + 1)}>next</Button>
        </StepBtn>
      </StepBoxes>
    </>
  );
};

export default StepByStep;
