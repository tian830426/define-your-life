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
import MoveInWidthwise from "../HomePage/MoveInWidthwise";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import TypewriterEffect from "../../components/TypewriterEffect";

import ImagePositionCenter, {
  ImageCenter,
} from "../../components/Template/ImagePositionCenter";
import ImagePositionLeftUpRightDown, {
  ImageLeftUp,
  ImageRightDown,
} from "../../components/Template/ImagePositionLeftUpRightDown";
import ImagePositionLeftDownRightUp, {
  ImageLeftDown,
  ImageRightUp,
} from "../../components/Template/ImagePositionLeftDownRightUp";

import ImagePositionFull, {
  ImageFull,
} from "../../components/Template/ImagePositionFull";

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
  background: rgb(239, 236, 230);
  position: relative;
`;

const Circle = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
  background: white;
  opacity: 0.2;
  border-radius: 50%;
`;

const Circle2 = styled.div`
  width: 300px;
  height: 300px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  position: absolute;
  transform: translate(-50%, -50%);
  background: white;
  opacity: 0.2;
  border-radius: 50%;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  h1 {
    margin: 50px 0;
    font-size: 80px;
    z-index: 2;
  }
  p {
    color: gray;
    font-size: 30px;
    line-height:50px;
    z-index: 2;
  }
`;

const TestComponent = styled.div`
  display: flex;
  /* height: 100vh; */
  width: ${(props) => props.count * 100}vw;
  /* width: 1000vw; */
  /* width: 700vw; */
  background: ${(props) => props.backgroundColor};
`;

const TestItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  /* flex: 0 0 10%; */
  /* background: rgb(221, 214, 201); */
`;

const StoryContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;

function SnapShowPage({ text, delay }) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(1);

  const currentUrl = window.location.href;
  const userID = currentUrl.match(/([^/]+)$/)[1];
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  // const [userID, setUserID] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "albums"));
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

  const aaa = (album) => {
    let currentGroup = [];
    const photoGroups = [];

    // 將照片分組，每組最多兩張照片
    if (album.SwitchLayout === "version-1") {
      album.UrlArray.forEach((url, index) => {
        currentGroup.push(url);
        console.log(url);
        if (currentGroup.length === 1 && photoGroups.length % 4 === 0) {
          photoGroups.push(currentGroup);
          currentGroup = [];
        } else if (currentGroup.length === 2 && photoGroups.length % 4 === 1) {
          photoGroups.push(currentGroup);
          currentGroup = [];
        } else if (currentGroup.length === 1 && photoGroups.length % 4 === 2) {
          photoGroups.push(currentGroup);
          currentGroup = [];
        } else if (currentGroup.length === 2 && photoGroups.length % 4 === 3) {
          photoGroups.push(currentGroup);
          currentGroup = [];
        }
      });
      if (currentGroup.length === 1) {
        photoGroups.push(currentGroup);
        currentGroup = [];
      }
    } else {
      album.UrlArray.forEach((url, index) => {
        currentGroup.push(url);
        photoGroups.push(currentGroup);
        currentGroup = [];
      });
    }
    // setItemCount(photoGroups.length);
    return photoGroups;
  };

  useEffect(() => {
    if (albums[0] == undefined) {
      return;
    }
    aaa(albums[0]);
    const photoGroups = aaa(albums[0]);

    setCount(photoGroups.length);
    console.log(photoGroups.length);
  }, [albums]);

  let testItemLen = 0;
  console.log(testItemLen);

  return (
    <>
      {/* <NavbarLayout /> */}
      {/* <BackgroundLayout> */}
      <AlbumContainer>
        <CustomCursor />
        <PageContainer>
          <Circle top={"20%"} left={"10%"}></Circle>
          <Circle2 top={"45%"} left={"90%"}></Circle2>
          <Circle top={"10%"} left={"70%"}></Circle>
          <Circle2 top={"75%"} left={"45%"}></Circle2>
          <Circle top={"70%"} left={"20%"}></Circle>
          <Circle2 top={"20%"} left={"40%"}></Circle2>
          <Circle2 top={"47%"} left={"52%"}></Circle2>
          <Circle top={"65%"} left={"75%"}></Circle>
          <Heading>
            <h1>Define Your Life</h1>
            <p>
              {albums.map((album) => {
                return album.Name;
              })}
            </p>
          </Heading>
        </PageContainer>
        <MoveInWidthwise
          height={`${count * 100}vh`}
          displayed={
            // ref={testComponentRef}
            <TestComponent
              count={count}
              backgroundColor={albums.map((album) => album.BackgroundColor)}
            >
              {albums.map((album) => {
                const photoGroups = aaa(album);

                // 將照片分組，每組最多兩張照片

                // const photoCount = album.UrlArray.length;
                // console.log(albums);
                // console.log(album.id);

                // const photoGroups = aaa(album);
                // console.log(photoGroups);
                // setPhotoGroups(photoGroups);
                // 渲染每個照片組
                let currentIndex = 0;
                return photoGroups.map((group, index) => {
                  // testItemLen += 1;
                  if (album.SwitchLayout == "version-1") {
                    let layout;
                    if (currentIndex % 4 === 0) {
                      layout = (
                        <TestItem key={index}>
                          <ImageCenter>
                            <img src={group[0]} />
                          </ImageCenter>
                        </TestItem>
                      );
                      currentIndex += 1;
                    } else if (currentIndex % 4 === 1) {
                      layout = (
                        <TestItem key={index}>
                          {group.length === 1 ? (
                            <ImageCenter>
                              <img src={group[0]} />
                            </ImageCenter>
                          ) : (
                            <>
                              <ImageLeftUp>
                                <img src={group[0]} />
                              </ImageLeftUp>
                              <ImageRightDown>
                                <img src={group[1]} />
                              </ImageRightDown>
                            </>
                          )}
                        </TestItem>
                      );
                      currentIndex += 1;
                    } else if (currentIndex % 4 === 2) {
                      layout = (
                        <TestItem key={index}>
                          <ImageFull>
                            <img src={group[0]} />
                          </ImageFull>
                        </TestItem>
                      );
                      currentIndex += 1;
                    } else if (currentIndex % 4 === 3) {
                      layout = (
                        <TestItem key={index}>
                          {group.length === 1 ? (
                            <ImageCenter>
                              <img src={group[0]} />
                            </ImageCenter>
                          ) : (
                            <>
                              <ImageLeftDown>
                                <img src={group[0]} />
                              </ImageLeftDown>
                              <ImageRightUp>
                                <img src={group[1]} />
                              </ImageRightUp>
                            </>
                          )}
                        </TestItem>
                      );
                      currentIndex += 1;
                    }
                    return layout;
                  } else if (album.SwitchLayout == "version-2") {
                    return (
                      <TestItem key={index}>
                        <ImageCenter>
                          <img src={group[0]} />
                        </ImageCenter>
                      </TestItem>
                    );
                  } else if (album.SwitchLayout == "version-3") {
                    return (
                      <TestItem key={index}>
                        <ImageFull>
                          <img src={group[0]} />
                        </ImageFull>
                      </TestItem>
                    );
                  }
                });
              })}
            </TestComponent>
          }
        />
        <PageContainer>
          <Heading>
            <h1>Story</h1>

            <StoryContainer>
              {albums.map((album) => {
                return (
                  <div key={album.id}>
                    <TypewriterEffect text={album.RawMessage} delay={100} />
                  </div>
                );
              })}
            </StoryContainer>
          </Heading>
        </PageContainer>
      </AlbumContainer>
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

export default SnapShowPage;
