import React from "react";
import styled from "styled-components";

const Bgc = styled.div`
  width: 100vw;
  /* height:calc(100vh - 50px); */
  min-height: calc(100vh - 50px);
  height: 100%; 
  padding-top: 70px;
  background:rgb(239,236,230);
  /* background: rgb(245, 239, 230); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BackgroundLayout(props) {
  return <Bgc>{props.children}</Bgc>;
}

export default BackgroundLayout;
export { Bgc };
