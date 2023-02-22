import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
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

// 上傳相簿後從這裡讀取 讀取 firebase 圖片 相簿資訊 note文字內容

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0 100px;
  margin: 200px auto;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Artist = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666;
`;

// const albums = [
//   {
//     id: 1,
//     title: "The Dark Side of the Moon",
//     artist: "Pink Floyd",
//     image: mountImg,
//   },
//   {
//     id: 2,
//     title: "Thriller",
//     artist: "Michael Jackson",
//     image: mountImg,
//   },
//   {
//     id: 3,
//     title: "Abbey Road",
//     artist: "The Beatles",
//     image: mountImg,
//   },
//   {
//     id: 4,
//     title: "Abbey Road",
//     artist: "The Beatles",
//     image: mountImg,
//   },
// ];

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
      const q = query(collection(db, "users", currentUser.email ,"album"));

      // const q = query(collection(db, "users",currentUser.email));
      // const q = query(collection(db, "users"), where("email", "==", currentUser.email));
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

  // function play() {
  //   navigate("playAlbum");
  // }

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        <Grid>
          {albums.map((album) => (
            <Card
              key={album.id}
              onClick={() => {
                navigate(album.id);
                console.log(album);
              }}
            >
              <Image src={album.UrlArray[0]} />
              <Info>
                <Title>{album.Editor}</Title>
                <Artist>{album.Name}</Artist>
              </Info>
            </Card>
          ))}
        </Grid>

        {/* <p>{params}</p> */}
        {/* {imageUrls.map((url) => {
          return <img src={url} />;
        })} */}
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default LibraryPage;
