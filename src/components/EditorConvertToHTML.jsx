import React, { useState, useContext } from "react";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { StepContext } from "../pages/AlbumEditPage/StepByStep/StepByStep";

const EditorConvertToHTML = () => {
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
  } = useContext(StepContext);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [message, setMessage] = useState("Try the editor below!");
  // const [rawMessage, setRawMessage] = useState('');

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    setRawMessage(
      draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
    );
  };

  const handleEditorStateToMessage = () => {
    setMessage(rawMessage);
  };


  const wrapperStyle = {
    border: "1px solid #cabc88",
  };
  const editorStyle = {
    height: "20rem",
    padding: "1rem",
  };

  return (
    <>
      <React.Fragment>
        {/* <div
          style={{
            border: "1px solid #969696",
            borderRadius: "3px",
            height: "10rem",
            padding: "1rem",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: message }}></div>
        </div> */}
        <div>
          <Editor
            initialEditorState={editorState}
            wrapperClassName="wrapper-class"
            wrapperStyle={wrapperStyle}
            editorStyle={editorStyle}
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "textAlign",
                "history",
                "colorPicker",
              ],
              inline: {
                options: ["italic", "bold"],
                bold: { className: "demo-option-custom" },
                italic: { className: "demo-option-custom" },
                underline: { className: "demo-option-custom" },
                strikethrough: { className: "demo-option-custom" },
                monospace: { className: "demo-option-custom" },
                superscript: { className: "demo-option-custom" },
                subscript: { className: "demo-option-custom" },
              },
              blockType: {
                className: "demo-option-custom-wide",
                dropdownClassName: "demo-dropdown-custom",
              },
              fontSize: { className: "demo-option-custom-medium" },
            }}
          />
        </div>
        {/* <div style={{ marginTop: "2%" }}>
          <button onClick={handleEditorStateToMessage}>submit</button>
        </div> */}
      </React.Fragment>
      {/* <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      /> */}
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </>
  );
};

export default EditorConvertToHTML;
