import React from "react";
import { render } from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PreviewContainer from "./PreviewContainer";

const PreviewCenter = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <PreviewContainer />
      </DndProvider>
    </>
  );
};

export default PreviewCenter;
