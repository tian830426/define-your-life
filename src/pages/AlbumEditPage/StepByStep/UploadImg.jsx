import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useTypewriter from "react-typewriter-hook";
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

// 文字打字機功能
// const MagicOcean = ["step1:", "step2:"];
// let index = 0;

const StepMenuBoxes = styled.div`
  width: 90%;
  height: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StepMenuTitle = styled.div`
  margin: 30px auto;
  color: gray;
  font-size: 20px;
`;

const StepMenuInput = styled.div``;

const StepMenuForm = styled.form`
  margin: 10px auto;

  label {
    display: flex;
    margin: 15px auto;
  }

  button {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: rgb(104, 142, 129);
    color: white;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 30px;
    letter-spacing: 2px;
    font-weight: 700;
  }
`;

const StepMenuUl = styled.ul`
  margin: auto;
`;

function StepMenu() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [show, setShow] = useState(true);

  // 建立相簿
  const [albums, setAlbums] = useState([]);

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
    if (name === "" || date === "" || description === "") {
      alert("please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "albums"), {
      Name: name,
      Date: date,
      Description: description,
    });

    console.log(name, date, description);
    setName("");
    setDate("");
    setDescription("");
    setShow(!show);
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

  // 從資料庫將資料刪除
  const deleteAlbum = async (id) => {
    await deleteDoc(doc(db, "albums", id));
  };

  return (
    <>
      <StepMenuBoxes>
        <StepMenuTitle>
          {show ? <h3>Let's try to make special album by yourself !</h3> : null}
        </StepMenuTitle>
        <StepMenuInput>
          {show ? (
            <StepMenuForm onSubmit={submit}>
              <label htmlFor="">
                album name :
                <input type="text" value={name} onChange={handleName} />
              </label>
              <label htmlFor="">
                date:
                <input type="date" value={date} onChange={handleDate} />
              </label>
              <label htmlFor="">
                {" "}
                description:
                <input
                  type="text"
                  value={description}
                  onChange={handleDescription}
                />
              </label>
              <button>submit</button>
            </StepMenuForm>
          ) : null}
        </StepMenuInput>

        <StepMenuUl>
          {albums.map((album, index) => (
            <Albums key={index} album={album} deleteAlbum={deleteAlbum} />
          ))}
        </StepMenuUl>
      </StepMenuBoxes>
    </>
  );
}

export default StepMenu;
