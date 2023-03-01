import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../AuthPage/UserAuthProvider";
import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../components/firebase";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import animationBgimg from "../../assets/toy.jpg";
import MoveInWidthwise from "../../pages/HomePage/MoveInWidthwise";

import AlbumTemplateForOne, { ImageCenter } from "./AlbumTemplateForOne ";
import AlbumTemplateForTwo, {
  ImageLeftUp,
  ImageRightDown,
} from "./AlbumTemplateForTwo";
import AlbumTemplateForThree, {
  ImageLeftDown,
  ImageRightUp,
} from "./AlbumTemplateForThree";

import AlbumTemplateForFour, { ImageFull } from "./AlbumTemplateForFour";

import CustomCursor from "../../components/CustomCursor";

const ButtonFlex = styled.div`
  /* max-width: 1200px; */
  display: flex;
  padding-bottom: 50px;
  justify-content: center;
`;

const CopyBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* position: relative; */
`;

const CopeAlbumUrl = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  outline: 1.5px solid rgb(104, 142, 129);
  color: rgb(104, 142, 129);
  margin: 15px 15px;
  /* display: flex;
  justify-content: center;
  text-align: center; */
  line-height: 30px;
  padding: auto 15px;
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const CopiedAlbumUrl = styled.span`
  position: absolute;
  top: -20px;
  left: 40px;
  /* color: perspective; */
  background: rgba(255, 255, 255, 0.1);
  z-index: 999;
`;

const BackToPrevious = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  outline: 1.5px solid rgb(104, 142, 129);
  color: rgb(104, 142, 129);
  margin: 15px 15px;
  /* display: flex;
  justify-content: center;
  text-align: center; */
  line-height: 30px;
  padding: auto 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const AlbumContainer = styled.div`
  /* margin-top: 100px; */
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3e1d6;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  h1 {
    margin: 30px 0;
    font-size: 80px;
  }
  p {
    color:gray;
    font-size: 60px;
  }
`;

const TestComponent = styled.div`
  display: flex;
  /* width: ${(props) => props.itemCount * 100}vw; */
  width: 1000vw;
  background: rgb(215, 214, 212);
`;

const TestItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex: 0 0 10%;
  /* background: rgb(221, 214, 201); */
`;

function PlayAlbumPage(props) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [copied, setCopied] = useState(false);
  // const testComponentRef = useRef(null);

  const currentUrl = window.location.href;
  const userID = currentUrl.match(/([^/]+)$/)[1];
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  // const [userID, setUserID] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "albums"));
    console.log(q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let albumsArr = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        if (doc.id == userID) {
          albumsArr.push({ ...doc.data(), id: doc.id });
        }
      });
      console.log(albumsArr);
      const UrlArrayLen = albumsArr[0].UrlArray;
      // console.log(UrlArrayLen);
      console.log(albumsArr[0].Name);
      // console.log(albumsArr)
      setAlbums(albumsArr);
    });
    return () => unsubscribe();
  }, [currentUser]);

  // useEffect(() => {
  //   if (testComponentRef.current) {
  //     const testItems =
  //       testComponentRef.current.querySelectorAll(":scope > div"); // Get all direct child divs of TestComponent
  //     const itemCount = testItems.length;
  //     const newWidth = itemCount * 100 + "vw"; // Calculate the new width
  //     testComponentRef.current.style.width = newWidth; // Set the new width
  //   }
  // });

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      console.log("Link copied to clipboard!");
      setTimeout(() => {
        setCopied(false);
      }, 3000); // 设置 3 秒钟的定时器
    } catch (error) {
      console.error("Failed to copy link: ", error);
    }
  };

  const handleMouseLeave = () => {
    setCopied(false);
  };
  console.log("123");
  // console.log(albums);
  // console.log(albums[0]);
  // console.log(name);
  // console.log(albums[0].Name)
  // console.log(albums[0].name)

  return (
    <>
      {/* <NavbarLayout /> */}
      {/* <BackgroundLayout> */}
      <AlbumContainer>
        <CustomCursor />
        <PageContainer>
          <Heading>
            <h1>Define Your Life</h1>
            <p>
              {albums.map((album) => {
                console.log(album);
                console.log(album.Name);
                return album.Name;
              })}
            </p>
            {/* <p>{albums[0].name}</p> */}
          </Heading>
        </PageContainer>
        <MoveInWidthwise
          displayed={
            // ref={testComponentRef}
            <TestComponent>
              {albums.map((album) => {
                const photoCount = album.UrlArray.length;
                console.log(albums);
                console.log(album.id);
                // console.log(url);

                let currentGroup = [];
                const photoGroups = [];

                // 將照片分組，每組最多兩張照片
                album.UrlArray.forEach((url, index) => {
                  currentGroup.push(url);
                  console.log(url);
                  if (
                    currentGroup.length === 1 &&
                    photoGroups.length % 4 === 0
                  ) {
                    photoGroups.push(currentGroup);
                    currentGroup = [];
                  } else if (
                    currentGroup.length === 2 &&
                    photoGroups.length % 4 === 1
                  ) {
                    photoGroups.push(currentGroup);
                    currentGroup = [];
                  } else if (
                    currentGroup.length === 1 &&
                    photoGroups.length % 4 === 2
                  ) {
                    photoGroups.push(currentGroup);
                    currentGroup = [];
                  } else if (
                    currentGroup.length === 2 &&
                    photoGroups.length % 4 === 3
                  ) {
                    photoGroups.push(currentGroup);
                    currentGroup = [];
                  }
                  // (currentGroup.length === 2 || index === photoCount - 1) {
                  //   photoGroups.push(currentGroup);
                  //   currentGroup = [];
                  // }
                });

                // 渲染每個照片組
                let currentIndex = 0;
                return photoGroups.map((group) => {
                  let layout;
                  if (currentIndex % 4 === 0) {
                    layout = (
                      <TestItem key={`${album.id}-${currentIndex}`}>
                        <ImageCenter>
                          <img src={group[0]} key={group[0]} />
                        </ImageCenter>
                      </TestItem>
                    );
                    currentIndex += 1;
                  } else if (currentIndex % 4 === 1) {
                    layout = (
                      <TestItem key={`${album.id}-${currentIndex}`}>
                        <ImageLeftUp>
                          <img src={group[0]} key={group[0]} />
                        </ImageLeftUp>
                        {group.length > 1 && (
                          <ImageRightDown>
                            <img src={group[1]} key={group[1]} />
                          </ImageRightDown>
                        )}
                        {group.length === 1 && <ImageCenter />}
                      </TestItem>
                    );
                    currentIndex += 1;
                  } else if (currentIndex % 4 === 2) {
                    layout = (
                      <TestItem key={`${album.id}-${currentIndex}`}>
                        <ImageFull>
                          <img src={group[0]} key={group[0]} />
                        </ImageFull>
                      </TestItem>
                    );
                    currentIndex += 1;
                  } else if (currentIndex % 4 === 3) {
                    layout = (
                      <TestItem key={`${album.id}-${currentIndex}`}>
                        <ImageLeftDown>
                          <img src={group[0]} key={group[0]} />
                        </ImageLeftDown>
                        {group.length > 1 && (
                          <ImageRightUp>
                            <img src={group[1]} key={group[1]} />
                          </ImageRightUp>
                        )}
                        {group.length === 1 && <ImageCenter />}
                      </TestItem>
                    );
                    currentIndex += 1;
                  }
                  return layout;
                });
              })}
            </TestComponent>
          }
        />
        <PageContainer>
          <Heading>
            <h1>Story</h1>
          </Heading>
        </PageContainer>
      </AlbumContainer>
      <>
        {/* {albums.map((album) => (
            <TestComponent key={album.id}>
              {album.UrlArray.map((url) => (
                <TestItem key={url}>
                  <img src={url} style={{ width: 300, height: 300 }} />
                </TestItem>
              ))}
            </TestComponent>
          ))} */}
      </>
      <ButtonFlex>
        <CopyBox>
          <div>
            <CopeAlbumUrl onClick={handleCopyUrl}>Copy Url</CopeAlbumUrl>
            {copied && (
              <CopiedAlbumUrl onMouseLeave={handleMouseLeave}>
                Copied to clipboard !
              </CopiedAlbumUrl>
            )}
          </div>
          <BackToPrevious onClick={() => navigate(-1)}>Prev</BackToPrevious>
        </CopyBox>
      </ButtonFlex>

      {/* </BackgroundLayout> */}
      <FooterLayout />
    </>
  );
}

export default PlayAlbumPage;
