import React, { useState } from "react";
import styled from "styled-components";

const ImageLeftDown = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 15%;
  right: 12.5%;
  display: flex;
  justify-content: end;

  img {
    width: 40vw;
    height: 45vh;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
  display: flex;
  align-items: end;
  top: 40%;
  right: 47.5%;
  img {
    width: 40vw;
    height: 45vh;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const EditBgImageLeftDown = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 15%;
  right: 12.5%;
  width: 40%;
  height: 45%;
  display: flex;
  justify-content: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const EditBgImageRightUp = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  width: 40%;
  height: 45%;
  display: flex;
  align-items: end;
  top: 40%;
  right: 47.5%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const ImagePositionLeftDownRightUp = () => {
  return (
    <>
      <ImageLeftDown></ImageLeftDown>
      <ImageRightUp></ImageRightUp>
      <EditBgImageLeftDown></EditBgImageLeftDown>
      <EditBgImageRightUp></EditBgImageRightUp>
    </>
  );
};

export default ImagePositionLeftDownRightUp;
export { ImageLeftDown, ImageRightUp, EditBgImageLeftDown, EditBgImageRightUp };
