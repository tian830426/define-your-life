import React from "react";
import styled from "styled-components";

const Bgc = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  padding-top: 70px;
  // background-color: #95a7b5;
  /* background: rgb(222, 208, 173); */
  background:rgb(245,239,230);
  /* background: rgb(228, 227, 231); */
  // padding-top: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function BackgroundLayout(props) {
  return <Bgc>{props.children}</Bgc>;
}

export default BackgroundLayout;
