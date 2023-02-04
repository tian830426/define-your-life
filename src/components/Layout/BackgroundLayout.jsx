import React from "react";
import styled from "styled-components";

const Bgc = styled.div`
width: 100vw;
height: calc(100vh - 50px);
// background-color: #95a7b5;
background: rgb(222, 208, 173);
// padding-top: 70px;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

function BackgroundLayout(props) {
  return (<Bgc>{props.children}</Bgc>);
}

export default BackgroundLayout;
