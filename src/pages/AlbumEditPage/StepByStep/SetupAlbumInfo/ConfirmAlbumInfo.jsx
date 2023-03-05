import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import SubmitAlbumInfo from "./SubmitAlbumInfo";

const ConfirmAlbumContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 95%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }

  @media (max-width: 490px) {
    width: 90%;
  }
  @media (max-width: 430px) {
    width: 85%;
  }
`;
const ConfirmAlbumList = styled.div`
  /* width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column; */
`;
const ConfirmAlbumTitle = styled.div`
  height: 20%;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 70px;
  text-align: center;
  color: gray;
  @media (max-width: 640px) {
    margin: 35px auto;
    height: 0%;
  }
  @media (max-width: 600px) {
    padding: 0 25px;
  }
  @media (max-width: 570px) {
    padding: 0 15px;
  }
  @media (max-width: 490px) {
    padding: 0 15px;
  }
  @media (max-width: 430px) {
    padding: 0 15px;
  }
  h2 {
    font-size: 50px;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
    @media (max-width: 640px) {
      font-size: 45px;
    }
    @media (max-width: 600px) {
      font-size: 40px;
    }
    @media (max-width: 570px) {
      font-size: 40px;
    }
    @media (max-width: 490px) {
      font-size: 35px;
    }
    @media (max-width: 430px) {
      font-size: 28px;
    }
    @media (max-width: 400px) {
      font-size: 26px;
    }
    @media (max-width: 375px) {
      font-size: 24px;
    }
  }
`;

const ConfirmAlbumForm = styled.div`
  width: 450px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 570px) {
    width: 380px;
  }
  @media (max-width: 490px) {
    width: 350px;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
  @media (max-width: 375px) {
    font-size: 270px;
  }
`;

const ConfirmAlbumBoxes = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const ConfirmAlbumItems = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 35px auto;
  color: gray;
  font-size: 22px;
  letter-spacing: 1.5px;
  font-weight: 400;
  div {
    /* border-bottom: 3px solid gray; */
    margin-left: 15px;
    font-size: 22px;
  }
`;

const ConfirmAlbumLabel = styled.div`
  margin: 0;
  min-width: 160px;
  display: flex;
  font-weight: 700;
  align-items: center;
  word-wrap:break-word;
`;

const ConfirmAlbumButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  
  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px 0;
  }
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
          <>
            <ConfirmAlbumTitle>
              {/* <h2>If there are no issues, let's proceed to the next step.</h2> */}
              <h2>Confirm the Info</h2>
            </ConfirmAlbumTitle>
            <ConfirmAlbumList>
              <ConfirmAlbumForm>
                <ConfirmAlbumBoxes>
                  <ConfirmAlbumItems>
                    <ConfirmAlbumLabel>Author:</ConfirmAlbumLabel>
                    <div>{editor}</div>
                  </ConfirmAlbumItems>
                  <ConfirmAlbumItems>
                    <ConfirmAlbumLabel>Album Title:</ConfirmAlbumLabel>
                    <div>{name}</div>
                  </ConfirmAlbumItems>
                  <ConfirmAlbumItems>
                    <ConfirmAlbumLabel>Publish Date:</ConfirmAlbumLabel>
                    <div> {date}</div>
                  </ConfirmAlbumItems>
                  <ConfirmAlbumItems>
                    <ConfirmAlbumLabel>Short Intro:</ConfirmAlbumLabel>
                    <div>{description}</div>
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
          </>
        ) : (
          <SubmitAlbumInfo />
        )}
      </ConfirmAlbumContainer>
    </>
  );
};

export default ConfirmAlbumInfo;
