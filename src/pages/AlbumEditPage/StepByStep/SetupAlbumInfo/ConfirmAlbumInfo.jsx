import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import SubmitAlbumInfo from "./SubmitAlbumInfo";

const ConfirmAlbumContainer = styled.div`
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
  padding: 0 50px;
  line-height: 70px;
  text-align: center;
  color: gray;
  h2 {
    font-size: 50px;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const ConfirmAlbumForm = styled.div`
  margin: auto;
`;

const ConfirmAlbumBoxes = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const ConfirmAlbumItems = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 35px auto;
  color: gray;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.5px;

  span {
    border-bottom: 3px solid gray;
    opacity:0.7;
    margin-left: 15px;
    font-size: 24px;
  }
`;

const ConfirmAlbumLabel = styled.div`
  margin: 0;
  min-width: 160px;
  display: flex;
  align-items: center;
`;

const ConfirmAlbumButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

const ConfirmAlbumButton = styled(Button)`
  display: flex;
  margin: 60px 20px;
  font-size: 22px;
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
      <ConfirmAlbumContainer>
        {show ? (
          <ConfirmAlbumList>
            <ConfirmAlbumTitle>
              <h2>If there are no issues, let's proceed to the next step.</h2>
            </ConfirmAlbumTitle>
            <ConfirmAlbumForm>
              <ConfirmAlbumBoxes>
                <ConfirmAlbumItems>
                  <ConfirmAlbumLabel>Editor:</ConfirmAlbumLabel>
                  <span>{editor}</span>
                </ConfirmAlbumItems>
                <ConfirmAlbumItems>
                  <ConfirmAlbumLabel>Album name:</ConfirmAlbumLabel>
                  <span>{name}</span>
                </ConfirmAlbumItems>
                <ConfirmAlbumItems>
                  <ConfirmAlbumLabel>Date:</ConfirmAlbumLabel>
                  <span> {date}</span>
                </ConfirmAlbumItems>
                <ConfirmAlbumItems>
                  <ConfirmAlbumLabel> Description:</ConfirmAlbumLabel>
                  <span>{description}</span>
                </ConfirmAlbumItems>
              </ConfirmAlbumBoxes>
            </ConfirmAlbumForm>
            <ConfirmAlbumButtonBorder>
              <ConfirmAlbumButton onClick={() => prev()}>
                Prev
              </ConfirmAlbumButton>
              <ConfirmAlbumButton onClick={() => next()}>
                Next
              </ConfirmAlbumButton>
            </ConfirmAlbumButtonBorder>
          </ConfirmAlbumList>
        ) : (
          <SubmitAlbumInfo />
        )}
      </ConfirmAlbumContainer>
    </>
  );
};

export default ConfirmAlbumInfo;
