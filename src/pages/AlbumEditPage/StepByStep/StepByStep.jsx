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
  const [step, setStep] = useState(1);

  // useContext
  const [editor, setEditor] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("Try the editor below!");
  const [rawMessage, setRawMessage] = useState("");

  // image={imageRef.current}
  return (
    <>
      <StepContext.Provider
        value={{
          prev: () => setStep(step - 1),
          next: () => setStep(step + 1),
          editor: editor,
          setEditor: setEditor,
          name: name,
          setName: setName,
          date: date,
          setDate: setDate,
          description: description,
          setDescription: setDescription,
          selectedImages: selectedImages,
          setSelectedImages: setSelectedImages,
          files:files,
          setFiles:setFiles,
          imageUrls:imageUrls,
          setImageUrls:setImageUrls,
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
            <StepMenu />
          ) : step === 2 ? (
            <PreviewCenter />
          ) : step === 3 ? (
            <EditWord />
          ) : step === 4 ? (
            <EditBgFrame />
          ) : step === 5 ? (
            <UploadAlbum />
          ) : (
            <Finish />
          )}
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
