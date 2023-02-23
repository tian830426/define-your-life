import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import SubmitAlbumInfo from "./SubmitAlbumInfo";

const ConfirmAlbumBoxes = styled.div`
  /* width: 100%; */
  /* height: 90%; */
  display: flex;
  flex-direction: column;
`;
const ConfirmAlbumList = styled.div`
  /* width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column; */
`;
const ConfirmAlbumTitle = styled.div`
  margin: 70px auto;
  padding:0 50px;
  line-height: 70px;
  text-align:center;
  color: gray;
  h2 {
    /* font-family: "Courier New", Courier, monospace; */
    font-size: 50px;
    /* color: transparent; */
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const ConfirmAlbumItems = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  color: gray;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding:0 50px;
  
  /* margin: 10px auto;
  padding: 0 15px;
  display: flex;
  flex-direction: flex;
  justify-content: start;
  align-items: center;
  color: gray;
  font-size: 18px;
  font-family: "Courier New", Courier, monospace; */
`;

const ConfirmAlbumButtonBorder = styled.div`
  display: flex;
  justify-content:center;
  margin: 20px auto;
`;

const ConfirmAlbumButton = styled(Button)`
  display: flex;
  margin: 60px 20px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const ConfirmAlbumInfo = () => {
  const [show, setShow] = useState(true);

  const {
    editor,
    setEditor,
    name,
    setName,
    date,
    setDate,
    description,
    setDescription,
    next,
  } = useContext(StepContext);

  const prev = () => {
    setShow(false);
  };

  return (
    <>
      <ConfirmAlbumBoxes>
        {show ? (
          <ConfirmAlbumList>
            <ConfirmAlbumTitle>
              <h2>If there are no issues, let's proceed to the next step.</h2>
            </ConfirmAlbumTitle>

            <ConfirmAlbumItems>Editor : {editor}</ConfirmAlbumItems>
            <ConfirmAlbumItems>Album name : {name}</ConfirmAlbumItems>
            <ConfirmAlbumItems>Date : {date}</ConfirmAlbumItems>
            <ConfirmAlbumItems>Description : {description}</ConfirmAlbumItems>
            <ConfirmAlbumButtonBorder>
              <ConfirmAlbumButton onClick={() => prev()}>
                Prev
              </ConfirmAlbumButton>
              <ConfirmAlbumButton onClick={() => next()}>
                Next
              </ConfirmAlbumButton>
            </ConfirmAlbumButtonBorder>
          </ConfirmAlbumList>
        ) : 
          (<SubmitAlbumInfo />)
          
        }
      </ConfirmAlbumBoxes>
    </>
  );
};

export default ConfirmAlbumInfo;
