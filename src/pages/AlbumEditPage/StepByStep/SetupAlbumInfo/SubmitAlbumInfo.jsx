import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import ConfirmAlbumInfo from "./ConfirmAlbumInfo";

const SubmitBoxes = styled.div`
  /* width: 90%;
  height: 90%; */
  display: flex;
  flex-direction: column;
`;

const SubmitTitle = styled.div`
  margin: 70px auto;
  color: gray;

  h2 {
    /* font-family: "Courier New", Courier, monospace; */
    font-size: 50px;
    /* color: transparent; */
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const SubmitInput = styled.div``;

const SubmitForm = styled.form`
  margin: auto;
  font-family: "Courier New", Courier, monospace;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    color: gray;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1.5px;
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      padding: 0 10px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      outline: 1.5px solid gray;
      font-size: 22px;

      &:active {
        color: white;
      }
    }
  }
`;

const SubmitButton = styled(Button)`
  margin: 60px auto;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const SubmitUl = styled.div``;

function SubmitAlbumInfo(props) {
  const [show, setShow] = useState(true);
  const { currentUser } = useContext(AuthContext);

  const {
    editor,
    setEditor,
    name,
    setName,
    date,
    setDate,
    description,
    setDescription,
  } = useContext(StepContext);

  const handleEditor = (event) => {
    setEditor(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault(e);
    if (editor === "" || name === "" || date === "" || description === "") {
      return;
    }
    try {
      setEditor(editor);
      setName(name);
      setDate(date);
      setDescription(description);
      setShow(false);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <SubmitBoxes>
        {show ? (
          <>
            <SubmitTitle>
              <h2>Let's try to make special album by yourself !</h2>
            </SubmitTitle>
            <SubmitInput>
              <SubmitForm onSubmit={submit}>
                <label htmlFor="">
                  Editor :
                  <input
                    type="text"
                    value={editor}
                    onChange={handleEditor}
                    required
                  />
                </label>{" "}
                <label htmlFor="">
                  Album Name :
                  <input
                    type="text"
                    value={name}
                    onChange={handleName}
                    required
                  />
                </label>{" "}
                <label htmlFor="">
                  Date :
                  <input type="date" value={date} onChange={handleDate} />
                </label>{" "}
                <label htmlFor="">
                  {" "}
                  Description :
                  <input
                    type="text"
                    value={description}
                    onChange={handleDescription}
                    required
                  />
                </label>
                <SubmitButton>Submit</SubmitButton>
              </SubmitForm>
            </SubmitInput>
          </>
        ) : null}

        {show ? null : (
          <SubmitUl>
            <ConfirmAlbumInfo />
          </SubmitUl>
        )}
      </SubmitBoxes>
    </>
  );
}

export default SubmitAlbumInfo;
