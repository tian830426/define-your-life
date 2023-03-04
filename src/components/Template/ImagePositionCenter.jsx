import React, { useState } from "react";
import styled from "styled-components";

const ImageCenter = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  img {
    width: 50vw;
    height: 65vh;
    object-fit: cover;
  }
`;

const EditBgImageCenter = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 65%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImagePositionCenter = () => {
  return (
    <>
      <ImageCenter></ImageCenter>
      <EditBgImageCenter></EditBgImageCenter>
    </>
  );
};

export default ImagePositionCenter;
export { ImageCenter, EditBgImageCenter };
