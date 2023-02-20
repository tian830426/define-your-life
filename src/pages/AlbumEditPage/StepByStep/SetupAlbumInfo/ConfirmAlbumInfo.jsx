import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import SubmitAlbumInfo from "./SubmitAlbumInfo";
const ConfirmAlbumList = styled.div`
  display: flex;
  flex-direction: column;
  margin: -50px auto 0 auto;
  justify-content: center;
  align-items: center;
`;
const ConfirmAlbumTitle = styled.div`
  margin: 50px auto;
  color: gray;
  h2 {
    font-size: 1.9rem;
    color: transparent;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const ConfirmAlbumItem = styled.span`
  display: flex;
  flex-direction: flex;
  justify-content: start;
  align-items: center;
  margin: 10px auto;
  color: gray;
  font-size: 18px;
  padding: 0 15px;
`;

const ConfirmAlbumButtonBorder = styled.div`
  display: flex;
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
      {show ? (
        <ConfirmAlbumList>
          <ConfirmAlbumTitle>
            <h2>If there are no issues, let's proceed to the next step.</h2>
          </ConfirmAlbumTitle>

          <ConfirmAlbumItem>Editor : {editor}</ConfirmAlbumItem>
          <ConfirmAlbumItem>Album name : {name}</ConfirmAlbumItem>
          <ConfirmAlbumItem>Date : {date}</ConfirmAlbumItem>
          <ConfirmAlbumItem>Description : {description}</ConfirmAlbumItem>
          <ConfirmAlbumButtonBorder>
            <ConfirmAlbumButton onClick={() => prev()}>Prev</ConfirmAlbumButton>
            <ConfirmAlbumButton onClick={() => next()}>Next</ConfirmAlbumButton>
          </ConfirmAlbumButtonBorder>
        </ConfirmAlbumList>
      ) : (
        <SubmitAlbumInfo />
      )}
    </>
  );
};

export default ConfirmAlbumInfo;
