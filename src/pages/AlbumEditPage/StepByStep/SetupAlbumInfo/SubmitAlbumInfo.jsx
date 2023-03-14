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

const SubmitTitle = styled.div`
  height: 20%;
  margin: 70px auto;
  padding: 0 50px;
  line-height: 70px;
  text-align: center;
  color: gray;
  /* border-bottom: 5px solid gray; */

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

const SubmitInputContainer = styled.div`
  margin: auto;
`;

const SubmitForm = styled.form`
  width: 500px;
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
    width: 310px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
  @media (max-width: 375px) {
    font-size: 270px;
  }

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

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px 0;
  }

  input {
    width: 80%;
    color: gray;
    border-bottom: 3px solid gray;
    caret-color: auto; /* 預設 */
    caret-color: transparent; /* 透明 */
    caret-color: gray; /* 指定色 */
    outline: none; /* 外框效果 */
    /* display: flex;
      justify-content: center;
      align-items: center; */
    margin-left: 15px;
    padding: 5px 10px;
    /* border-radius: 10px; */
    background: rgba(255, 255, 255, 0);
    /* outline: 1.5px solid gray; */
    font-size: 22px;

    @media (max-width: 490px) {
      margin: 5px 0;
      width: 100%;
    }

    &:active {
      color: white;
    }
  }
`;
const Textarea = styled.textarea`
  max-width: 320px;
  max-height: 100px;
  background: rgba(255, 255, 255, 0.1);
  width: 80%;
  border-bottom: 3px solid gray;
  caret-color: auto;
  caret-color: transparent;
  caret-color: gray;
  outline: none;
  margin-left: 15px;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0);
  /* outline: 1.5px solid gray; */
  font-size: 22px;
  color: gray;
  border: 2px solid gray;
  background: rgb(239, 236, 230);
  padding: 5px;
  line-height: 1.5;
  @media (max-width: 490px) {
    width: 100%;
    margin: 5px 0;
    max-width: 100%;
    max-height: 100%;
  }

  &:active {
    color: gray;
    opacity: 0.5;
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
  /* font-family: "Courier New", Courier, monospace; */
  letter-spacing: 1.5px;
  @media (max-width: 490px) {
    margin: 20px auto;
    max-width: 400px;
    max-height: 100px;
  }

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
  // const handleDescription = () => {
  //   setDescription("");
  // };
  const handleDescription = (event) => {
    if (event.target.value.length <= "50") {
      setDescription(event.target.value);
    }
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
              {/* <h2>Let's try to make special album by yourself !</h2> */}
              <h2>Edit Album's Info</h2>
            </SubmitTitle>
            <SubmitInputContainer>
              <SubmitForm onSubmit={handleSubmit}>
                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel>Author:</SubmitLabel>
                    <input type="text" value={editor} onChange={handleEditor} />
                  </SubmitTag>
                  {errors.editor ? <span>{errors.editor}</span> : null}
                </SubmitInputBlock>

                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel>Album Title:</SubmitLabel>
                    <input type="text" value={name} onChange={handleName} />
                  </SubmitTag>
                  {errors.name ? <span>{errors.name}</span> : null}
                </SubmitInputBlock>

                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel>Publish Date:</SubmitLabel>
                    <input type="date" value={date} onChange={handleDate} />
                  </SubmitTag>
                  {errors.date ? <span>{errors.date}</span> : null}
                </SubmitInputBlock>
                <SubmitInputBlock>
                  <SubmitTag>
                    <SubmitLabel>Short Intro:</SubmitLabel>
                    <Textarea
                      placeholder="limit 50 words"
                      type="text"
                      value={description}
                      onChange={handleDescription}
                      maxLength="50"
                      rows="4"
                      onClick={handleDescription}
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
