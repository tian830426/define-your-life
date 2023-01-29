import React from "react";
import styled from "styled-components";

const BtnSideBarCenter = styled.div`
  width: 80px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(183, 159, 94);
  border-radius: 8px;

  button {
    width: 40px;
    height: 40px;
    font-size: 16px;
    background-color: rgb(217, 198, 169);
    text-align: center;
    line-height: 40px;
    border-radius: 100%;
  }
`;
const ButtonSideBar = () => {
  return (
    <>
      <BtnSideBarCenter>
        <button onClick={1}>1</button>
        <button onClick={2}>2</button>
        <button onClick={3}>3</button>
        <button onClick={4}>4</button>
        <button onClick={5}>5</button>
        <button onClick={6}>6</button>
      </BtnSideBarCenter>
    </>
  );
};

export default ButtonSideBar;
