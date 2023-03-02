import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

import { AuthContext } from "../../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep";

import ConfirmAlbumInfo from "./ConfirmAlbumInfo";

const SubmitBoxes = styled.div`
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

const SubmitInputContainer = styled.div`
  margin: auto;
`;

const SubmitForm = styled.form`
  width: 500px;
  margin: 0 auto;
  /* background-color: rgba(255, 255, 255, 0.7); */
  font-family: "Courier New", Courier, monospace;
  /* border-radius: 20px; */
  span {
    display: flex;
    padding: 10px auto;
    color: #de6666;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin-top: 10px;
  }
`;
const SubmitInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px auto;
`;
const SubmitTag = styled.div`
  display: flex;
  color: gray;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 10x 10px;

  input {
    width: 80%;
    /* display: flex;
      justify-content: center;
      align-items: center; */
    margin-left: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    outline: 1.5px solid gray;
    font-size: 24px;

    &:active {
      color: white;
    }
  }
`;

const SubmitLabel = styled.div`
  margin: 0;
  min-width: 160px;
  display: flex;
  align-items: center;
`;

const SubmitButton = styled(Button)`
  margin: 60px auto;
  font-size: 22px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 1.5px;
  &:hover {
    background: gray;
  }
`;

const SubmitUl = styled.div``;

function SubmitAlbumInfo(props) {
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!editor) {
      formErrors.editor = "Please enter the editor's name";
    }
    if (!name) {
      formErrors.name = "Please enter the album name";
    }
    if (!date) {
      formErrors.date = "Please enter the date in the format: year/month/day";
    }
    if (!description) {
      formErrors.description = "Please enter the description";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setShow(true);
    }
  };

  return (
    <>
      <SubmitBoxes>
        {show ? null : (
          <>
            <SubmitTitle>
              <h2>Let's try to make special album by yourself !</h2>
            </SubmitTitle>
            <SubmitInputContainer>
              <SubmitForm onSubmit={handleSubmit}>
                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel>Editor:</SubmitLabel>
                    <input type="text" value={editor} onChange={handleEditor} />
                  </SubmitTag>
                  {errors.editor ? <span>{errors.editor}</span> : null}
                </SubmitInputBlock>

                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel> Album Name:</SubmitLabel>
                    <input type="text" value={name} onChange={handleName} />
                  </SubmitTag>
                  {errors.name ? <span>{errors.name}</span> : null}
                </SubmitInputBlock>

                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel> Date:</SubmitLabel>
                    <input type="date" value={date} onChange={handleDate} />
                  </SubmitTag>
                  {errors.date ? <span>{errors.date}</span> : null}
                </SubmitInputBlock>
                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel>Description:</SubmitLabel>
                    <input
                      type="text"
                      value={description}
                      onChange={handleDescription}
                    />
                  </SubmitTag>
                  {errors.description ? (
                    <span>{errors.description}</span>
                  ) : null}
                </SubmitInputBlock>

                <SubmitButton type="submit">Submit</SubmitButton>
              </SubmitForm>
            </SubmitInputContainer>
          </>
        )}

        {show ? (
          <SubmitUl>
            <ConfirmAlbumInfo />
          </SubmitUl>
        ) : null}
      </SubmitBoxes>
    </>
  );
}

export default SubmitAlbumInfo;
