import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "../StepByStep/StepByStep";
import Button from "../../../components/Button";

const EditWordBorderButton =styled.div`
display: flex;
margin: 20px auto;
`
const EditWordButton = styled(Button)`
  display: flex;
  margin: 60px 20px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

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
        <EditWordBorderButton>
      <EditWordButton onClick={() => prev()}>Prev</EditWordButton>
      <EditWordButton onClick={() => next()}>Next</EditWordButton>
      </EditWordBorderButton>
    </div>
  );
};

export default EditWord;
