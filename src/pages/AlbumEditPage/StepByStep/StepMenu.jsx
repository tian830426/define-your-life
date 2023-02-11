import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../../components/firebase";
import Albums from "./Albums";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Button from "../../../components/Button";

// export const AlbumName = React.createContext();
// export const AlbumDate = React.createContext();
// export const AlbumDescription = React.createContext();

// export const Test = React.createContext();

// 文字打字機功能
// const MagicOcean = ["step1:", "step2:"];
// let index = 0;
// .attrs({ className: stepMenuBoxes })

const StepMenuBoxes = styled.div`
  max-width: 75%;
  height: 85%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const StepMenuTitle = styled.div`
  margin: 50px auto;
  color: gray;
  h2 {
    font-size: 2.2rem;
    color: transparent;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const StepMenuInput = styled.div``;

const StepMenuForm = styled.form`
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

const StepMenuButton = styled(Button)`
  margin: 60px auto;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const StepMenuUl = styled.div``;

function StepMenu(props) {
  const [editor, setEditor] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [show, setShow] = useState(true);

  // 建立相簿
  const [albums, setAlbums] = useState([]);

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

  // 將資料存到firestorge
  const submit = async (e) => {
    e.preventDefault(e);
    if (editor === "" || name === "" || date === "" || description === "") {
      return;
    }
    await addDoc(collection(db, "albums"), {
      Editor: editor,
      Name: name,
      Date: date,
      Description: description,
    });

    // console.log(name, date, description);
    setEditor("");
    setName("");
    setDate("");
    setDescription("");
    setShow(false);
  };

  useEffect(() => {
    const q = query(collection(db, "albums"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let albumsArr = [];
      querySnapshot.forEach((doc) => {
        albumsArr.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(albumsArr);
    });
    return () => unsubscribe();
  }, []);

  // const navigate = useNavigate();
  // 從資料庫將資料刪除
  const deleteAlbum = async (id) => {
    await deleteDoc(doc(db, "albums", id));
    setShow(true);
    // props.prev();
    // navigate("/home/edit");
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/home/edit");
  //   }, 3000);
  // }, [navigate]);

  console.log(albums);

  return (
    <>
      {/* <StepMenuBoxes> */}
        <StepMenuTitle>
          {show ? <h2>Let's try to make special album by yourself !</h2> : null}
        </StepMenuTitle>
        <StepMenuInput>
          {show ? (
            <StepMenuForm onSubmit={submit}>
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
              <StepMenuButton>Submit</StepMenuButton>
            </StepMenuForm>
          ) : null}
        </StepMenuInput>
        <StepMenuUl>
          {albums.map((album, index) => (
            <Albums key={index} album={album} deleteAlbum={deleteAlbum} />
          ))}
        </StepMenuUl>
      {/* </StepMenuBoxes> */}
    </>
  );
}

export default StepMenu;
