import React, { useState, useEffect, useContext } from "react";
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

const albums = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    image: mountImg,
  },
  {
    id: 2,
    title: "Thriller",
    artist: "Michael Jackson",
    image: mountImg,
  },
  {
    id: 3,
    title: "Abbey Road",
    artist: "The Beatles",
    image: mountImg,
  },
  {
    id: 4,
    title: "Abbey Road",
    artist: "The Beatles",
    image: mountImg,
  },
];

function LibraryPage() {
  const { currentUser } = useContext(AuthContext);
  const { imageUrls, setImageUrls } = useContext(StepContext);
  
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
            <Card key={album.id}>
              <Image src={album.image} alt={album.title} />
              <Info>
                <Title>{album.title}</Title>
                <Artist>{album.artist}</Artist>
              </Info>
            </Card>
          ))}
        </Grid>

        {/* {imageUrls.map((url) => {
          return <img src={url} />;
        })} */}
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default LibraryPage;
