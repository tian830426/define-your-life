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
  rawMessage: [],
  setRawMessage: () => {},
  color: [],
  setColor: () => {},
  backgroundColor: [],
  setBackgroundColor: () => {},
  switchLayout: [],
  setSwitchLayout: () => {},
});

const StepBoxes = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 750px;
  border-radius: 25px;
  background: rgb(239, 236, 230);
  /* background:white; */
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 30px 60px rgba(0, 0, 10, 0.3);
`;

const StepByStep = () => {
  const [step, setStep] = useState(1);

  // useContext
  const [editor, setEditor] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("limit 50 words");
  const [selectedImages, setSelectedImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");
  const [rawMessage, setRawMessage] = useState("");

  const [color, setColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");;
  const [switchLayout, setSwitchLayout] = useState("version-1");

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
          color: color,
          setColor: setColor,
          backgroundColor: backgroundColor,
          setBackgroundColor: setBackgroundColor,
          switchLayout: switchLayout,
          setSwitchLayout: setSwitchLayout,
        }}
      >
        <StepBoxes>
          {step === 1 ? (
            <StepMenu />
          ) : step === 2 ? (
            <PreviewCenter />
          ) : step === 3 ? (
            <EditBgFrame />
          ) : step === 4 ? (
            <EditWord />
          ) : step === 5 ? (
            <UploadAlbum />
          ) : (
            step === 6(<Finish />)
          )}
        </StepBoxes>
      </StepContext.Provider>
    </>
  );
};

export default StepByStep;
