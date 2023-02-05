import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "./StepByStep";

const EditWord = () => {
  const { prev, next, selectedImages, setSelectedImages } =
    useContext(StepContext);

  return (
    <div>
      {selectedImages &&
        selectedImages.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt=""
              style={{ width: 200, height: 200 }}
            />
          );
        })}
    
    </div>
  );
};

export default EditWord;
