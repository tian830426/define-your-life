import React, { useState } from "react";
import styled from "styled-components";

const ImageFull = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  img {
    width: 70vw;
    height: 100vw;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const EditBgImageFull = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  width: 70%;
  height: 100%;
  display:flex;
  justify-content:center;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const ImagePositionFull = () => {
  return (
    <>
      <ImageFull></ImageFull>
      <EditBgImageFull></EditBgImageFull>
    </>
  );
};

export default ImagePositionFull;
export { ImageFull, EditBgImageFull };
