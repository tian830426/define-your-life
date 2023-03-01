import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StepContext } from "../StepByStep/StepByStep";
import Button from "../../../components/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorConvertToHTML from "../../../components/EditorConvertToHTML";

const EditorContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;

// const EditorBoxes = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   margin-bottom: 10px;
//   display: flex;
//   justify-content: space-evenly;
// `;

// const EditorAlbum = styled.div`
//   width: 50%;
// `;

// const EditorImg = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* width: 100%;
//   height: 80%; */
//   width: 100%;
//   height: 450px;
//   object-fit: cover;
// `;

const EditorTitele = styled.div`
  margin: 40px auto;
  padding: 0 50px;
  line-height: 70px;
  text-align: center;
  color: gray;
  h2 {
    font-size: 50px;
    /* color: transparent; */
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const EditorNote = styled.div`
  width: 100%;
  padding: 0 100px;
  /* color: transparent;  */
  /* background: rgb(207, 198, 175); */
  /* background-color: */
`;

const EditWordBorderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditWordButton = styled(Button)`
  display: flex;
  margin: 0px 20px;
  font-size: 20px;
  background: rgba(173, 161, 132, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const EditWord = () => {
  const {
    prev,
    next,
    selectedImages,
    setSelectedImages,
    cards,
    setCards,
    message,
    setMessage,
    rawMessage,
    setRawMessage,
    // editorState,
    // setEditorState,
  } = useContext(StepContext);

  const handleEditorStateToMessage = () => {
    setMessage(rawMessage);
  };
  return (
    <>
      <EditorContainer>
        <EditorTitele>
          <h2>Add Text To Your Album</h2>
        </EditorTitele>
        <EditorNote>
          <EditorConvertToHTML>Enter Text...</EditorConvertToHTML>
        </EditorNote>
        {/* </EditorBoxes> */}
      </EditorContainer>
      <EditWordBorderButton>
        <EditWordButton onClick={() => prev()}>Prev</EditWordButton>
        <EditWordButton
          onClick={() => {
            next();
            handleEditorStateToMessage();
          }}
        >
          Next
        </EditWordButton>
      </EditWordBorderButton>
    </>
  );
};

export default EditWord;
