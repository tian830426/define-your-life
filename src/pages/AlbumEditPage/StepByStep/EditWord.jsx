import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep/StepByStep";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorConvertToHTML from "../../../components/EditorConvertToHTML";
import { db } from "../../../components/firebase";
const EditorContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { storage } from "../../../components/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  listAll,
  list,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";

// const EditorBoxes = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   margin-bottom: 10px;
//   display: flex;
//   justify-content: space-evenly;
// `;

// const EditorAlbum = styled.div`
//   width: 50%;
// `;

// const EditorImg = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* width: 100%;
//   height: 80%; */
//   width: 100%;
//   height: 450px;
//   object-fit: cover;
// `;

const EditorTitele = styled.div`
  margin: 40px auto;
  padding: 0 50px;
  line-height: 70px;
  text-align: center;
  color: gray;
  h2 {
    font-size: 50px;
    /* color: transparent; */
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const EditorNote = styled.div`
  width: 100%;
  padding: 0 100px;
  /* color: transparent;  */
  /* background: rgb(207, 198, 175); */
  /* background-color: */
`;

const EditWordBorderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditWordButton = styled(Button)`
  display: flex;
  margin: 0px 20px;
  font-size: 20px;
  background: rgba(173, 161, 132, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const EditWord = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const {
    prev,
    next,
    editor,
    setEditor,
    name,
    setName,
    date,
    setDate,
    description,
    setDescription,
    selectedImages,
    setSelectedImages,
    files,
    setFiles,
    cards,
    setCards,
    imageUrls,
    setImageUrls,
    message,
    setMessage,
    rawMessage,
    setRawMessage,
    color,
    setColor,
    backgroundColor,
    setBackgroundColor,
  } = useContext(StepContext);

  const handleEditorStateToMessage = () => {
    setMessage(rawMessage);
  };

  const finish = async (e) => {
    try {
      const urlArray = [];
      for (let i = 0; i < cards.length; i++) {
        const imageRef = ref(storage, `images/${cards[i].file.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, cards[i].file);
        const url = await getDownloadURL(snapshot.ref);
        urlArray.push(url);
      }
      // alert("image upload");
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2);
      const uniqueId = `${timestamp}_${randomString}`;
      const newDocRef = doc(collection(db, "albums"), uniqueId);
      await setDoc(newDocRef, {
        Editor: editor,
        Name: name,
        Date: date,
        Description: description,
        Message: message,
        RawMessage: rawMessage,
        BackgroundColor: backgroundColor,
        UrlArray: urlArray,
        createdAt: new Date(),
      });

      const newDocRef2 = doc(
        db,
        "users",
        currentUser.email,
        "album",
        newDocRef.id
      );
      await setDoc(newDocRef2, {
        Editor: editor,
        Name: name,
        Date: date,
        Description: description,
        Message: message,
        UrlArray: urlArray,
        createdAt: new Date(),
      });
      navigate("/home/albumlibrary");

      console.log("Document written with ID: ", newDocRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <>
      <EditorContainer>
        <EditorTitele>
          <h2>Add Text To Your Album</h2>
        </EditorTitele>
        <EditorNote>
          <EditorConvertToHTML>Enter Text...</EditorConvertToHTML>
        </EditorNote>
        {/* </EditorBoxes> */}
      </EditorContainer>
      <EditWordBorderButton>
        <EditWordButton onClick={() => prev()}>Prev</EditWordButton>
        <EditWordButton
          onClick={() => {
            finish();
            handleEditorStateToMessage();
          }}
        >
          Finish
        </EditWordButton>
      </EditWordBorderButton>
    </>
  );
};

export default EditWord;
