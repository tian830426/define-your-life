import React, { useState } from "react";
import styled from "styled-components";

const ImageCenter = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 70vw;
    height: calc(70vh - 120px);
  }
`;

const AlbumTemplateForOne = () => {
  return (
    <>
      <ImageCenter></ImageCenter>
    </>
  );
};

export default AlbumTemplateForOne;
export { ImageCenter };
