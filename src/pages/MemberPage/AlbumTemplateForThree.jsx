import React, { useState } from "react";
import styled from "styled-components";

const ImageLeftDown = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 25%;
  left: 45%;
  /* transform: translate(-50%, -50%); */
  img {
    width: 600px;
    height: 600px;
  }
`;

const ImageRightUp = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;

  top: 45%;
  left: 20%;
  img {
    width: 600px;
    height: 600px;
  }
  /* transform: translate(-50%, -50%); */
`;

const AlbumTemplateForThree = () => {
  return (
    <>
      <ImageLeftDown></ImageLeftDown>
      <ImageRightUp></ImageRightUp>
    </>
  );
};

export default AlbumTemplateForThree;
export { ImageLeftDown, ImageRightUp };
