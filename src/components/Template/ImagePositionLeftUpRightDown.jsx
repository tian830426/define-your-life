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
  left: 12.5%;
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 40vw;
    height: 45vh;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
  left: 47.5%;
  img {
    width: 40vw;
    height: 45vh;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
  top: 15%;
  left: 12.5%;
  width: 40%;
  height: 45%;
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
  left: 47.5%;
  width: 40%;
  height: 45%;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  /* transform: translate(-50%, -50%); */
`;

const ImagePositionLeftUpRightDown = () => {
  return (
    <>
      <ImageLeftUp></ImageLeftUp>
      <ImageRightDown></ImageRightDown>
      <EditBgImageLeftUp></EditBgImageLeftUp>
      <EditBgImageRightDown></EditBgImageRightDown>
    </>
  );
};

export default ImagePositionLeftUpRightDown;
export { ImageLeftUp, ImageRightDown, EditBgImageLeftUp, EditBgImageRightDown };
