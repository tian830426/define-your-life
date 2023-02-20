import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import ConfirmAlbumInfo from "./ConfirmAlbumInfo";

const SubmitBoxes = styled.div`
  max-width: 75%;
  height: 85%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const SubmitTitle = styled.div`
  margin: 50px auto;
  color: gray;
  h2 {
    font-size: 2.2rem;
    color: transparent;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const SubmitInput = styled.div``;

const SubmitForm = styled.form`
  margin: auto;

  label {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 25px auto;
    color: gray;
    font-size: 18px;
    input {
      display: flex;
      justify-content: end;
      align-items: center;
      margin-left: 10px;
      padding: 0 10px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      outline: 1.5px solid gray;
      font-size: 18px;
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
      <SubmitTitle>
        {show ? <h2>Let's try to make special album by yourself !</h2> : null}
      </SubmitTitle>
      <SubmitInput>
        {show ? (
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
              <input type="text" value={name} onChange={handleName} required />
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
        ) : null}
      </SubmitInput>
      <SubmitUl>{show ? null : <ConfirmAlbumInfo />}</SubmitUl>
    </>
  );
}

export default SubmitAlbumInfo;
