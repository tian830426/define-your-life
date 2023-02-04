import React from "react";
import { useState, useEffect, useRef } from "react";
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

export const AlbumName = React.createContext();
export const AlbumDate = React.createContext();
export const AlbumDescription = React.createContext();

export const Test = React.createContext();

// export const AlbumContext = React.createContext({
//   AlbumName: "",
//   AlbumDate: "",
//   AlbumDescription: "",
// });

// 文字打字機功能
// const MagicOcean = ["step1:", "step2:"];
// let index = 0;
// .attrs({ className: stepMenuBoxes })

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
  margin: 20px auto;

  label {
    display: flex;
    margin: 20px auto;
    color: gray;

    input {
      margin-left: 10px;
      padding: 0px 5px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      outline: 1.5px solid gray;
    }
  }

  button {
    width: 120px;
    height: 30px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    outline: 1.5px solid gray;
    color: gray;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 30px;
    padding: auto 15px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      background: gray;
      color: white;
    }
  }
`;

const StepMenuUl = styled.ul`
  margin: auto;
`;

function StepMenu() {

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
    if (name === "" || date === "" || description === "") {
      alert("please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "albums"), {
      Editor: editor,
      Album_Name: name,
      Date: date,
      Description: description,
    });

    // console.log(name, date, description);
    setEditor("")
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
      {/* <AlbumContext.Provider value={(name, date, description)}>
       
      </AlbumContext.Provider> */}

      <AlbumName.Provider value={name}>
        <AlbumDate.Provider value={date}>
          <AlbumDescription.Provider value={description}>
            
              <StepMenuBoxes>
                <StepMenuTitle>
                  {show ? (
                    <h3>Let's try to make special album by yourself !</h3>
                  ) : null}
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
                        />
                      </label>
                      <label htmlFor="">
                        Album Name :
                        <input type="text" value={name} onChange={handleName} />
                      </label>
                      <label htmlFor="">
                        Date:
                        <input type="date" value={date} onChange={handleDate} />
                      </label>
                      <label htmlFor="">
                        {" "}
                        Description:
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
                    <Albums
                      key={index}
                      album={album}
                      deleteAlbum={deleteAlbum}
                    />
                  ))}
                </StepMenuUl>
              </StepMenuBoxes>
            
          </AlbumDescription.Provider>
        </AlbumDate.Provider>
      </AlbumName.Provider>
    </>
  );
}

export default StepMenu;
