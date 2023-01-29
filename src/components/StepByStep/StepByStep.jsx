import React, { useState, useRef } from "react";
// edit album
import styled from "styled-components";
import StepMenu from "./StepMenu";
import PreviewAndDrogImg from "./PreviewAndDrogImg";
import EditWord from "./EditWord";
import EditBgFrame from "./EditBgFrame";
import UploadImg from "./UploadImg";
import Finish from "./Finish";

const StepBoxes = styled.div`
    width: 70%;
    height: 65%;
    border-radius: 20px;
    background-color: rgb(248, 248, 232);
    // margin: 120px auto;
`

const StepContent = styled.div`
    width: 100%;
    height: 90%;
`

const StepBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    button {
    margin: 0 10px;
    padding: 10px 15px;
    }
`

const StepByStep = () => {
  const [step, setStep] = useState(1);
  const imageRef = useRef("");

  return (
    <>
      <StepBoxes>
        <StepContent>
          {step === 1 ? (
            <StepMenu image={imageRef.current} />
          ) : step === 2 ? (
            <PreviewAndDrogImg image={imageRef.current} />
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
          <p>{`step:${step}`}</p>
          <button onClick={() => setStep(step - 1)}>prev</button>
          <button onClick={() => setStep(step + 1)}>next</button>
        </StepBtn>
      </StepBoxes>
    </>
  );
};

export default StepByStep;
