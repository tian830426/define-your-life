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
  max-width: 1200px;
  width: 85%;
  height: 70vh;
  border-radius: 25px;
  background: rgb(246, 239, 230);
  /* background-color:white; */
  /* background-color: rgb(248, 248, 232); */
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 30px 60px rgba(0, 0, 10, 0.3);
  /* box-shadow: 0 0 2px 1px inset; */
  /* box-shadow: 
    0 20px 30px 0px rgba(0,0,0,.1),
    0 4px 4px 0px rgba(0,0,0,.14),
    0 2px 2px 0px rgba(0,0,0,.3); */
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
          files: files,
          setFiles: setFiles,
          imageUrls: imageUrls,
          setImageUrls: setImageUrls,
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
