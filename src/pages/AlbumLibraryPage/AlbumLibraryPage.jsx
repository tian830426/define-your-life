import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout, {
  Bgc,
} from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import { AuthContext } from "../AuthPage/UserAuthProvider";
import { StepContext } from "../AlbumEditPage/StepByStep/StepByStep";

import mountImg from "../../assets/mount.jpeg";
// import AlbumForm from "./testAlbumForm";
// import AlbumItem from "./testAlbumItem";

import { db } from "../../components/firebase";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { storage } from "../../components/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  listAll,
  list,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";

import trashCan from "../../assets/iconmonstr-trash-can-lined.svg";
import pencil from "../../assets/iconmonstr-pencil-8.svg";

const LibraryContainer = styled.div`
  max-width: 1200px;
  width: 85%;
  /* padding-top: 70px; */
  padding-bottom: 50px;
  margin: 50px auto;
`;

const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

const LibraryCard = styled.div`
  /* width: 300px;
  height: 350px; */
  /* padding-bottom: 60px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 10, 0.3) inset; */
  position: relative;
  width: 300px;
  height: 350px;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  background: #fff;
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.25);
  transition: 1s;
  border-radius: 5px;
  margin: 20px 0;
  /* box-shadow: rgba(0, 0, 0, 1) 5px 10px 20px; */
  &:hover {
    transform: perspective(2000px);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.25);
  }

  &::after {
    content: "";
    background-color: #afafaf;
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    transform: skewY(45deg);
  }

  &::before {
    content: "";
    background-color: #9c9c9c;
    position: absolute;
    left: 8px;
    bottom: -15px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid #000; */
  transform-origin: left;
  z-index: 1;
  transition: 2s;

  ${LibraryCard}:hover & {
    transform: rotateY(-160deg);
  }
`;
const TranshCanBoxes = styled.div`
  display: flex;
  position: absolute;
  margin: 8px;
  top: 0;
  right: 0;
`;
const TranshCanBox = styled.div`
  margin: 5px;
  width: 35px;
  height: 35px;
  background: #dddad9;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.5;
  color: white;
  &:hover {
    opacity: 1;
  }
`;

const TranshCanIcon = styled.img`
  padding: 5px;
  margin: auto;
  color: white;
  svg {
  }
`;

const LibraryImage = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

const LibraryInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  /* transform: translate(-50%, -50%); */
  padding: 20px;
  overflow: auto;
`;

const LibraryInfoName = styled.h2`
  font-size: 26px;
  padding: 10px 10px;
`;

const LibraryInfoEditor = styled.p`
  font-size: 20px;
  color: #666;
  padding: 10px 10px;
`;

const LibraryInfoDescription = styled.p`
  font-size: 20px;
  color: #666;
  padding: 10px 10px;
`;
const LibraryInfoDate = styled.p`
  font-size: 20px;
  color: #666;
  padding: 10px 10px;
`;

function AlbumLibraryPage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const { imageUrls, setImageUrls } = useContext(StepContext);
  const [albums, setAlbums] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("Hello, world!");
  const [isEditing, setIsEditing] = useState(false);

  // const [isEditing, setIsEditing] = useState(false);
  const [albumName, setAlbumName] = useState(albums.Name);
  const [editor, setEditor] = useState(albums.Editor);
  const [description, setDescription] = useState(albums.Description);

  // useEffect(() => {
  //   const q = query(collection(db, "albums"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let albumsArr = [];
  //     querySnapshot.forEach((doc) => {
  //       albumsArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setAlbums(albumsArr);
  //   });
  //   return () => unsubscribe();
  // }, []);

  //生命週期 先做同步 在做非同步
  //渲染之前被定義 渲染後被執行
  // 特定情況下 1.會執行第一次 2.狀態改變才重新執行一次
  useEffect(() => {
    if (currentUser != undefined) {
      const q = query(collection(db, "users", currentUser.email, "album"));

      console.log(q);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let albumsArr = [];
        querySnapshot.forEach((doc) => {
          albumsArr.push({ ...doc.data(), id: doc.id });
        });
        console.log(albumsArr);
        setAlbums(albumsArr);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  if (currentUser == undefined) {
    console.log("loading");
    return "loading";
  }

  const deleteAlbum = async (albumId) => {
    if (currentUser != undefined) {
      try {
        await deleteDoc(doc(db, "albums", albumId));
        await deleteDoc(doc(db, "users", currentUser.email, "album", albumId));
        console.log("Album deleted successfully.");
      } catch (error) {
        console.error("Error deleting album: ", error);
      }
    }
  };

  const handleEditClick = (album) => {
    setIsEditing(true);
    setAlbumName(album.Name);
    setEditor(album.Editor);
    setDescription(album.Description);
  };

  // const handleSaveClick = () => {
  //   setIsEditing(false);
  // };
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSaveClick = async (albumId) => {
    setIsEditing(false);
    if (currentUser != undefined) {
      try {
        const albumRef = doc(db, "albums", albumId);
        await updateDoc(albumRef, {
          Name: albumName,
          Editor: editor,
          Description: description,
        });
        // console.log("Album updated successfully.");
      } catch (error) {
        console.error("Error updating album: ", error);
      }
    }
  };
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        <LibraryContainer>
          <LibraryGrid>
            {albums.map((album) => (
              <LibraryCard
                key={album.id}
                onClick={() => {
                  navigate(album.id);
                  console.log(album);
                }}
              >
                <ImgBox>
                  <LibraryImage src={album.UrlArray[0]} alt="" />
                </ImgBox>
                <div>
                  {isEditing ? (
                    <div>
                      <input
                        value={albumName}
                        onChange={(e) => setAlbumName(e.target.value)}
                      />
                      <input
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                      />
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <button onClick={handleSaveClick}>儲存</button>
                      <button onClick={handleCancelClick}>取消</button>
                    </div>
                  ) : (
                    <div>
                      <LibraryInfo>
                        <LibraryInfoName>{album.Name}</LibraryInfoName>
                        <LibraryInfoEditor>{album.Editor}</LibraryInfoEditor>
                        <LibraryInfoDescription>
                          {album.Description}
                        </LibraryInfoDescription>
                        <LibraryInfoDate>{album.Date}</LibraryInfoDate>
                      </LibraryInfo>
                      <TranshCanBoxes>
                        <TranshCanBox>
                          <TranshCanIcon
                            src={pencil}
                            onClick={(event) => {
                              event.stopPropagation();
                              handleEditClick(album.id);
                            }}
                          ></TranshCanIcon>
                        </TranshCanBox>
                        <TranshCanBox>
                          {" "}
                          <TranshCanIcon
                            src={trashCan}
                            onClick={(event) => {
                              event.stopPropagation();
                              deleteAlbum(album.id);
                            }}
                          ></TranshCanIcon>
                        </TranshCanBox>
                      </TranshCanBoxes>
                    </div>
                  )}
                </div>
              </LibraryCard>
            ))}
          </LibraryGrid>

          {/* <p>{params}</p> */}
          {/* {imageUrls.map((url) => {
          return <img src={url} />;
        })} */}
        </LibraryContainer>
        {/* <div>
          {isEditing ? (
            <textarea value={content} onChange={handleChange} />
          ) : (
            <p>{content}</p>
          )}
          <button onClick={isEditing ? handleSaveClick : handleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div> */}
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default AlbumLibraryPage;
