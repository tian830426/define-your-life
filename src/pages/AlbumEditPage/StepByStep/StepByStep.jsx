import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import StepMenu from "./StepMenu";
import PreviewCenter from "./PreviewAndDnd/PreviewCenter";
import EditWord from "./EditWord";
import EditBgFrame from "./EditBgFrame";
import UploadAlbum from "./UploadAlbum";
import Finish from "./Finish";
import Button from "../../../components/Button";

export const StepContext = React.createContext({
  prev: () => {},
  next: () => {},
  selectedImages: [],
  setSelectedImages: () => {},
});

const StepBoxes = styled.div`
  width: 70%;
  height: 65%;
  border-radius: 20px;
  background-color: rgb(248, 248, 232);
  margin: 120px auto;
  display: flex;
  flex-direction: column;
`;

const StepContent = styled.div``;

const StepBtn = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
  }
`;

const StepByStep = () => {
  const [step, setStep] = useState(1);
  const imageRef = useRef("");

  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <>
      <StepContext.Provider
        value={{
          prev: () => setStep(step - 1),
          next: () => setStep(step + 1),
          selectedImages: selectedImages,
          setSelectedImages: setSelectedImages,
        }}
      >
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
              <UploadAlbum image={imageRef.current} />
            ) : (
              <Finish image={imageRef.current} />
            )}
          </StepContent>
          {/* <StepBtn>
            {step === 2 ? (
              <div>
                {" "}
                <Button onClick={() => setStep(step - 1)}>prev</Button>
                <Button onClick={() => setStep(step + 1)}>next</Button>
              </div>
            ) : step === 3 ? (
              <div>
                {" "}
                <Button onClick={() => setStep(step - 1)}>prev</Button>
                <Button onClick={() => setStep(step + 1)}>next</Button>
              </div>
            ) : step === 4 ? (
              <div>
                {" "}
                <Button onClick={() => setStep(step - 1)}>prev</Button>
                <Button onClick={() => setStep(step + 1)}>next</Button>
              </div>
            ) : step === 5 ? (
              <div>
                {" "}
                <Button onClick={() => setStep(step - 1)}>prev</Button>
                <Button onClick={() => setStep(step + 1)}>next</Button>
              </div>
            ) : (
              <Finish image={imageRef.current} />
            )}
          </StepBtn> */}
        </StepBoxes>
      </StepContext.Provider>
    </>
  );
};

export default StepByStep;

{
  /* <StepBtn>
          <Button onClick={() => setStep(step - 1)}>prev</Button>
          <Button onClick={() => setStep(step + 1)}>next</Button>
        </StepBtn> */
}
