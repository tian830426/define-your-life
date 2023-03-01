import React, { useState } from "react";
import styled from "styled-components";

const ImageLeftUp = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 5%;
  left: 15%;
  img {
    width: 40vw;
    height: 45vh;
    object-fit: cover;
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
  left: 50%;
  img {
    width: 40vw;
    height: 45vh;
    object-fit: cover;
  }
  /* transform: translate(-50%, -50%); */
`;

const EditBgImageLeftUp = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 5%;
  left: 15%;
  width: 40%;
  height: 45%;
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EditBgImageRightDown = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 40%;
  height: 45%;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* transform: translate(-50%, -50%); */
`;

const AlbumTemplateForTwo = () => {
  return (
    <>
      <ImageLeftUp></ImageLeftUp>
      <ImageRightDown></ImageRightDown>
      <EditBgImageLeftUp></EditBgImageLeftUp>
      <EditBgImageRightDown></EditBgImageRightDown>
    </>
  );
};

export default AlbumTemplateForTwo;
export { ImageLeftUp, ImageRightDown, EditBgImageLeftUp, EditBgImageRightDown };
