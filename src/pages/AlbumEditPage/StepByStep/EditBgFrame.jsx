import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../AuthPage/UserAuthProvider";
import { StepContext } from "../StepByStep/StepByStep";
import { useNavigate } from "react-router-dom";
import { db } from "../../../components/firebase";
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
import Button from "../../../components/Button";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import animationBgimg from "../../../assets/toy.jpg";
import layoutLined from "../../../assets/iconmonstr-layout-lined.svg";

import paintBrush from "../../../assets/iconmonstr-paintbrush-7.svg";

import colorFan from "../../../assets/iconmonstr-color-fan-2.svg";

import EditBgMoveInWidthwise from "../../HomePage/EditBgMoveInWidthwise";
import MultiChildScroller from "../../HomePage/MultiChildScroller";
import AlbumTemplateForOne, {
  EditBgImageCenter,
} from "../../MemberPage/AlbumTemplateForOne ";
import AlbumTemplateForTwo, {
  EditBgImageLeftUp,
  EditBgImageRightDown,
} from "../../MemberPage/AlbumTemplateForTwo";
import AlbumTemplateForThree, {
  EditBgImageLeftDown,
  EditBgImageRightUp,
} from "../../MemberPage/AlbumTemplateForThree";

import AlbumTemplateForFour, {
  EditBgImageFull,
} from "../../MemberPage/AlbumTemplateForFour";

import CustomCursor from "../../../components/CustomCursor";

import ColorFanBlock, { ColorPicker } from "../../../components/ColorFanBlock";

const Scroller = styled(MultiChildScroller)`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  /* border: 5px solid black; */
`;

const EditorBgContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const EditorBgTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  padding: 0 50px;
  line-height: 70px;
  text-align: center;
  color: gray;

  h2 {
    font-size: 50px;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const EditorBgIconList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 20px;
    color: gray;
  }
`;

const EditorBgBoxes = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
`;

// const EditorImg = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 300px;
//   height: 300px;
//   margin-top: 20px;
//   height: 380px;
//   object-fit: cover;
// `;

const EditorAlbum = styled.div`
  width: 100%;
`;

const EditBgFrameBorderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditBgFrameButton = styled(Button)`
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

const ParallaxGallery = styled.div`
  /* transform: translateX(
    ${(props) => (props.index - 1) * props.scrollPosition * 0.2}px
  ); */
`;

const ParallaxBox = styled.div`
  display: flex;
`;

// const Parallax1 = styled.img`
//   width: 800px;
//   height: 800px;
// `;

// const Parallax2 = styled.img`
//   width: 800px;
//   height: 800px;
// `;
// const Parallax3 = styled.img`
//   width: 800px;
//   height: 800px;
// `;

const Container = styled.div`
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const Heading = styled.div`
  margin: auto;
  /* margin-bottom: 50px; */
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: #d7d1b6;
  div {
    max-width: 1200px;
    font-size: 80px;
    margin: auto;
  }
`;

const AlbumContainer = styled.div`
  height: 100%;
  width: 100%;
  /* margin-top: 100px; */
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  /* height: 100vh; */
`;

// const TestComponent = styled.div`
//   display: flex;
//   /* width: ${(props) => props.itemCount * 100}vw; */
//   width: 1000vw;
//   height: 100%;
//   background: rgb(215, 214, 212);
// `;

const TestItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 100%;
  /* flex: 0 0 10%; */
`;

// const EditBgImageCenter = styled(ImageCenter)`
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   object-fit: cover;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   img {
//     /* width: 50vw;
//     height: 65vh; */
//     width: 600x;
//     height: 600px;
//     object-fit: cover;
//   }
// `;

const EditBgFrame = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [color, setColor] = useState("#FFFFFF");
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
  } = useContext(StepContext);

  // const containerRef = useRef(null);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageXOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop } = containerRef.current;
  //     setScrollPosition(scrollTop);
  //   };
  //   containerRef.current.addEventListener("scroll", handleScroll);

  //   return () =>
  //     containerRef.current.removeEventListener("scroll", handleScroll);
  // }, []);

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const onEditorStateChange = (newEditorState) => {
  //   setEditorState(newEditorState);
  //   setRawMessage(
  //     draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
  //   );
  // };

  const handleEditorStateToMessage = () => {
    setMessage(rawMessage);
  };

  const wrapperStyle = {
    border: "1px solid #969696",
  };

  const editorStyle = {
    height: "10rem",
    padding: "1rem",
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
      alert("image upload");
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
      navigate("/home/library");

      console.log("Document written with ID: ", newDocRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleColorFanBlock = () => {
    setShow(!show);
  };

  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  let currentGroup = [];
  const photoGroups = [];

  cards.forEach((album, index) => {
    currentGroup.push(album);
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
  let currentIndex = 0;

  return (
    <>
      <EditorBgContainer>
        <EditorBgTitle>
          <h2>Palette and Layout</h2>
          <EditorBgIconList>
            <img src={layoutLined} />
            <img src={paintBrush}></img>
            <img src={colorFan} onClick={handleColorFanBlock}></img>
            <div>
              <input
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              ></input>{" "}
            </div>
            {show && <ColorFanBlock />}
          </EditorBgIconList>
        </EditorBgTitle>
        {/* <EditorBgBoxes> */}
        {/* <EditorAlbum> */}
        <CustomCursor />
        {/* <PageContainer>
              <Heading>
                <div>Define Your Life</div>
                <div>12345</div>
              </Heading>
            </PageContainer> */}
        <Scroller>
          {photoGroups.map((group) => {
            let layout;
            if (currentIndex % 4 === 0) {
              layout = (
                <TestItem key={`${group[0].text}-${currentIndex}`}>
                  <EditBgImageCenter>
                    <img src={group[0].text} key={group[0]} />
                  </EditBgImageCenter>
                </TestItem>
              );

              currentIndex += 1;
            } else if (currentIndex % 4 === 1) {
              layout = (
                <TestItem key={`${group[0].text}-${currentIndex}`}>
                  <EditBgImageLeftUp>
                    <img src={group[0].text} key={group[0]} />
                  </EditBgImageLeftUp>
                  {group.length > 1 && (
                    <EditBgImageRightDown>
                      <img src={group[1].text} key={group[1]} />
                    </EditBgImageRightDown>
                  )}
                  {group.length === 1 && <EditBgImageCenter />}
                </TestItem>
              );
              currentIndex += 1;
            } else if (currentIndex % 4 === 2) {
              layout = (
                <TestItem key={`${group[0].text}-${currentIndex}`}>
                  <EditBgImageFull>
                    <img src={group[0].text} key={group[0]} />
                  </EditBgImageFull>
                </TestItem>
              );
              currentIndex += 1;
            } else if (currentIndex % 4 === 3) {
              layout = (
                <TestItem key={`${group[0].text}-${currentIndex}`}>
                  <EditBgImageLeftDown>
                    <img src={group[0].text} key={group[0]} />
                  </EditBgImageLeftDown>
                  {group.length > 1 && (
                    <EditBgImageRightUp>
                      <img src={group[1].text} key={group[1]} />
                    </EditBgImageRightUp>
                  )}
                  {group.length === 1 && <EditBgImageCenter />}
                </TestItem>
              );
              currentIndex += 1;
            }
            return layout;
          })}
          {/* </TestComponent> */}
        </Scroller>
        {/* <PageContainer>
              <Heading>
                <h1>Story</h1>
              </Heading>
            </PageContainer> */}
        {/* </EditorAlbum> */}

        {/* <React.Fragment>
            <div
              style={{
                // border: "1px solid #969696",
                borderRadius: "3px",
                width: "50%",
                height: "80%",
                padding: "1rem",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: message }}></div>
            </div>
          </React.Fragment> */}
        {/* </EditorBgBoxes> */}
      </EditorBgContainer>
      <EditBgFrameBorderButton>
        <EditBgFrameButton onClick={() => prev()}>Prev</EditBgFrameButton>
        <EditBgFrameButton onClick={() => finish()}>Finish</EditBgFrameButton>
      </EditBgFrameBorderButton>
    </>
  );
};

export default EditBgFrame;
//  <div key={index}>
//       <EditorImg src={image.text} alt="" />
//  </div>
