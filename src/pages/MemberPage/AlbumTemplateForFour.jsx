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
    width: 75vw;
    height: 100vw;
  }
`;

const AlbumTemplateForFour = () => {
  return (
    <>
      <ImageFull></ImageFull>
    </>
  );
};

export default AlbumTemplateForFour;
export { ImageFull };
