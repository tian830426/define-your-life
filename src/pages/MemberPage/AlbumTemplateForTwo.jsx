import React, { useState } from "react";
import styled from "styled-components";

const ImageLeftUp = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 15%;
  left: 20%;
  /* transform: translate(-50%, -50%); */
  img {
    width: 600px;
    height: 600px;
  }
`;

const ImageRightDown = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 40%;
  left: 45%;
  img {
    width: 600px;
    height: 600px;
  }
  /* transform: translate(-50%, -50%); */
`;

const AlbumTemplateForTwo = () => {
  return (
    <>
      <ImageLeftUp></ImageLeftUp>
      <ImageRightDown></ImageRightDown>
    </>
  );
};

export default AlbumTemplateForTwo;
export { ImageLeftUp, ImageRightDown };
