import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout, {
  Bgc,
} from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import { AuthContext } from "../AuthPage/UserAuthProvider";
import { StepContext } from "../../pages/AlbumEditPage/StepByStep/StepByStep";

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
  &:hover {
    transform: perspective(2000px);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.25);
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

const LibraryImage = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

const LibraryInfo = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  /* transform: translate(-50%, -50%); */
  padding: 20px;
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

function LibraryPage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const { imageUrls, setImageUrls } = useContext(StepContext);
  const [albums, setAlbums] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

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
                  <LibraryImage src={album.UrlArray[0]} />
                </ImgBox>
                <LibraryInfo>
                  <LibraryInfoName>{album.Name}</LibraryInfoName>
                  <LibraryInfoEditor>{album.Editor}</LibraryInfoEditor>
                  <LibraryInfoDescription>
                    {album.Description}
                  </LibraryInfoDescription>
                  <LibraryInfoDate>{album.Date}</LibraryInfoDate>
                </LibraryInfo>
              </LibraryCard>
            ))}
          </LibraryGrid>

          {/* <p>{params}</p> */}
          {/* {imageUrls.map((url) => {
          return <img src={url} />;
        })} */}
        </LibraryContainer>
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default LibraryPage;
