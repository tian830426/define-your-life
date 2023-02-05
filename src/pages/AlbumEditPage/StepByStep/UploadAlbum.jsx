import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "./StepByStep";
import Button from "../../../components/Button";

const UploadAlbumBorderButton = styled.div`
  display: flex;
  margin: 20px auto;
`;
const UploadAlbumButton = styled(Button)`
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
  const { prev, next, selectedImages, setSelectedImages } = useContext(StepContext);
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
      <UploadAlbumBorderButton>
        <UploadAlbumButton onClick={() => prev()}>Prev</UploadAlbumButton>
        <UploadAlbumButton onClick={() => next()}>Next</UploadAlbumButton>
      </UploadAlbumBorderButton>
    </div>
  );
};

export default EditWord;
