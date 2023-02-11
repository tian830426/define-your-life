import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import StepMenu from "./StepMenu";
import PreviewCenter from "./PreviewAndDnd/PreviewCenter";
import EditWord from "./EditWord";
import EditBgFrame from "./EditBgFrame";
import UploadAlbum from "./UploadAlbum";
import Finish from "./Finish";

export const StepContext = React.createContext({
  prev: () => {},
  next: () => {},
  selectedImages: [],
  setSelectedImages: () => {},
  cards: [],
  setCards: () => {},
  editorState: [],
  setEditorState: () => {},
  message: [],
  setMessage: () => {},
});

const StepBoxes = styled.div`
  width: 85%;
  height: 70%;
  border-radius: 25px;
  background-color: rgb(248, 248, 232);
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StepByStep = () => {
  const imageRef = useRef("");
  const [step, setStep] = useState(1);
  // useContext
  const [selectedImages, setSelectedImages] = useState([]);
  const [cards, setCards] = useState([]);

  const [message, setMessage] = useState("Try the editor below!");
  const [rawMessage, setRawMessage] = useState("");
  // editor useContext
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <>
      <StepContext.Provider
        value={{
          prev: () => setStep(step - 1),
          next: () => setStep(step + 1),
          selectedImages: selectedImages,
          setSelectedImages: setSelectedImages,
          cards: cards,
          setCards: setCards,
          message: message,
          setMessage: setMessage,
          rawMessage: rawMessage,
          setRawMessage: setRawMessage,
        }}
      >
        <StepBoxes>
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
