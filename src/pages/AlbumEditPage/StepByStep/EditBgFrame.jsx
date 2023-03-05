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

// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

import layoutLined from "../../../assets/iconmonstr-layout-lined.svg";

import paintBrush from "../../../assets/iconmonstr-paintbrush-7.svg";

import colorFan from "../../../assets/iconmonstr-color-fan-2.svg";

import MultiChildScroller from "../../HomePage/MultiChildScroller";

import ImagePositionCenter, {
  EditBgImageCenter,
} from "../../../components/Template/ImagePositionCenter";
import ImagePositionLeftUpRightDown, {
  EditBgImageLeftUp,
  EditBgImageRightDown,
} from "../../../components/Template/ImagePositionLeftUpRightDown";
import ImagePositionLeftDownRightUp, {
  EditBgImageLeftDown,
  EditBgImageRightUp,
} from "../../../components/Template/ImagePositionLeftDownRightUp";

import ImagePositionFull, {
  EditBgImageFull,
} from "../../../components/Template/ImagePositionFull";

import CustomCursor from "../../../components/CustomCursor";

// import ColorFanBlock, {
//   ColorBlockOne,
//   ColorBlockTwo,
//   ColorBlockThree,
//   ColorBlockFour,
// } from "../../../components/ColorFanBlock";

const Scroller = styled(MultiChildScroller)`
  width: 80%;
  height: 100%;
  /* margin-bottom: 25px; */
  border-radius: 15px;
  background-color: "#e7e3ef";
  background-color: ${(props) => props.backgroundColor};
  /* color: ${(props) => props.color}; */
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
  margin-left: 40px;
`;

const EditorBgIconItem = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: white;
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  img {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 20px;
    color: gray;
    opacity: 0.8;

    &:hover {
      width: 52px;
      height: 52px;
      opacity: 1;
    }
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

const ScrollerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75%;
`;

const EditBgFrameBorderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const EditBgFrameButton = styled(Button)`
  display: flex;
  margin: 0px 20px;
  font-size: 20px;
  background: rgba(173, 161, 132, 0.1);
  outline: 2.5px solid gray;
  color: gray;
  /* opacity: 0.8; */
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
  align-items: center;
  width: 100%;
  height: 100%;
  /* flex: 0 0 10%; */
`;

// Layout

const LayoutPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 130px;
  left: 650px;
  padding: 16px;
  border-radius: 8px;
  z-index: 1000;
`;

const LayoutTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: gray;
  padding-bottom: 16px;
  margin-right: 4px;
`;
const LayoutBoxes = styled.div`
  display: flex;
  height: auto;
  -webkit-box-pack: start;
  justify-content: start;
  width: 100%;
  padding-bottom: 24px;
`;

const LayoutButton = styled.button`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
//

const PalettePicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 130px;
  left: 650px;
  padding: 16px;
  border-radius: 8px;
  z-index: 1000;
`;

const PaletteTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: gray;
  padding-bottom: 16px;
  margin-right: 4px;
`;
const PaletteBoxes = styled.div`
  display: flex;
  height: auto;
  -webkit-box-pack: start;
  justify-content: start;
  width: 100%;
  padding-bottom: 24px;
`;

const PaletteButton = styled.button`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
`;

//color fan
const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 130px;
  left: 650px;
  padding: 16px;
  border-radius: 8px;
  z-index: 1000;
`;

const ColorTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: gray;
  padding-bottom: 16px;
  margin-right: 4px;
`;
const ColorBoxes = styled.div`
  display: flex;
  height: auto;
  -webkit-box-pack: start;
  justify-content: start;
  width: 100%;
  padding-bottom: 24px;
`;

const ColorFanButton = styled.button`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
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
  const [showLayout, setShowLayout] = useState(false);
  // const [switchLayout, setSwitchLayout] = useState("version-1");
  const [showPalette, setShowPalette] = useState(false);
  const [showColorFan, setShowColorFan] = useState(false);
  // const [backgroundColor, setBackgroundColor] = useState("");

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
    version,
    setVersion,
    switchLayout, 
    setSwitchLayout
  } = useContext(StepContext);

  // useEffect(() => {
  //   if (backgroundColor !== "") {
  //     db.collection("backgroundColors").doc("current").set({
  //       backgroundColor,
  //     });
  //   }
  // }, [backgroundColor, db]);

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

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  //Layout
  const handleLayoutBlock = () => {
    setShowLayout(!showLayout);
    setShowPalette(showPalette);
    setShowColorFan(showColorFan);
  };

  // function handleLayoutChange() {
  //   setSwitchLayout(switchLayout);
  // }
  const handleLayoutChange = (layoutOption) => {
    setSwitchLayout(layoutOption);
  };

  // Palette
  const handlePaletteBlock = (e) => {
    e.preventDefault();
    setShowPalette(!showPalette);
  };

  function handlePaletteChange(color) {
    setBackgroundColor(color);
  }

  //  colorfan
  const handleColorFanBlock = (e) => {
    e.preventDefault();
    setShowColorFan(!showColorFan);
  };

  function handleColorChange(color) {
    setBackgroundColor(color);
  }

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
  // console.log(cards.length);
  if (switchLayout === "version-1") {
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
    if (currentGroup.length === 1) {
      photoGroups.push(currentGroup);
      currentGroup = [];
    }
  } else {
    cards.forEach((album, index) => {
      currentGroup.push(album);
      photoGroups.push(currentGroup);
      currentGroup = [];
    });
  }
  console.log(photoGroups.length);

  let currentIndex = 0;

  return (
    <>
      <EditorBgContainer>
        <EditorBgTitle>
          {/* <h2>Palette and Layout</h2> */}
          <h2>Change Photo Layout and Color Theme</h2>
          <EditorBgIconList>
            <EditorBgIconItem>
              <img src={layoutLined} onClick={(event)=>{
                //  event.stopPropagation();
                 event.preventDefault();
                handleLayoutBlock()
              }}/>
            </EditorBgIconItem>
            <EditorBgIconItem>
              {" "}
              <img src={paintBrush} onClick={handlePaletteBlock}></img>
            </EditorBgIconItem>
            <EditorBgIconItem>
              <img src={colorFan} onClick={handleColorFanBlock}></img>
            </EditorBgIconItem>

            {/* 切換版面 */}
            {showLayout && (
              <LayoutPicker>
                <LayoutTitle>
                  <h3>Change Photo Layout</h3>
                </LayoutTitle>
                <LayoutBoxes>
                  <LayoutButton
                    onClick={() => handleLayoutChange("version-1")}
                  ></LayoutButton>
                  <LayoutButton
                    onClick={() => handleLayoutChange("version-2")}
                  ></LayoutButton>
                  <LayoutButton
                    onClick={() => handleLayoutChange("version-3")}
                  ></LayoutButton>
                  {/* <LayoutButton
                    onClick={() => handleLayoutChange("verson-4")}
                  ></LayoutButton> */}
                </LayoutBoxes>
              </LayoutPicker>
            )}
            {/* 
              palette */}
            {showPalette && (
              <PalettePicker>
                <PaletteTitle>
                  <h3>Change Background Color</h3>
                </PaletteTitle>
                <PaletteBoxes>
                  <div>
                    <input
                      type="color"
                      value={color}
                      onChange={(event) =>
                        handlePaletteChange(event.target.value)
                      }
                    ></input>{" "}
                  </div>
                </PaletteBoxes>
              </PalettePicker>
            )}
            {/* colorfan */}
            {showColorFan && (
              <ColorPicker>
                <ColorTitle>
                  <h3>Change Background Color</h3>
                </ColorTitle>
                <ColorBoxes>
                  <ColorFanButton
                    background="red"
                    onClick={() => handleColorChange("#ffffff")}
                  ></ColorFanButton>
                  <ColorFanButton
                    background="green"
                    onClick={() => handleColorChange("#fffff7")}
                  ></ColorFanButton>
                  <ColorFanButton
                    background="blue"
                    onClick={() => handleColorChange("rgb(249, 247, 238)")}
                  ></ColorFanButton>
                  <ColorFanButton
                    background="yellow"
                    onClick={() => handleColorChange(" #f1dfdf")}
                  ></ColorFanButton>
                </ColorBoxes>
              </ColorPicker>
            )}
          </EditorBgIconList>
        </EditorBgTitle>
        <ScrollerContainer>
          <CustomCursor />
          {/* version-1 */}
          {/* <Scroller> */}
          {switchLayout === "version-1" ? (
            <Scroller backgroundColor={backgroundColor}>
              {photoGroups.map((group, index) => {
                let layout;
                if (currentIndex % 4 === 0) {
                  layout = (
                    <TestItem key={index}>
                      <EditBgImageCenter>
                        <img src={group[0].text} />
                      </EditBgImageCenter>
                    </TestItem>
                  );

                  currentIndex += 1;
                } else if (currentIndex % 4 === 1) {
                  layout = (
                    <TestItem key={index}>
                      {group.length == 1 ? (
                        <EditBgImageFull>
                          <img src={group[0].text} />
                        </EditBgImageFull>
                      ) : (
                        <>
                          {" "}
                          <EditBgImageLeftUp>
                            <img src={group[0].text} />
                          </EditBgImageLeftUp>
                          <EditBgImageRightDown>
                            <img src={group[1].text} />
                          </EditBgImageRightDown>
                        </>
                      )}
                    </TestItem>
                  );
                  currentIndex += 1;
                } else if (currentIndex % 4 === 2) {
                  layout = (
                    <TestItem key={index}>
                      <EditBgImageFull>
                        <img src={group[0].text} />
                      </EditBgImageFull>
                    </TestItem>
                  );
                  currentIndex += 1;
                } else if (currentIndex % 4 === 3) {
                  layout = (
                    <TestItem key={index}>
                      {group.length === 1 ? (
                        <EditBgImageCenter>
                          <img src={group[0].text} />
                        </EditBgImageCenter>
                      ) : (
                        <>
                          <EditBgImageLeftDown>
                            <img src={group[0].text} />
                          </EditBgImageLeftDown>
                          <EditBgImageRightUp>
                            <img src={group[1].text} />
                          </EditBgImageRightUp>
                        </>
                      )}
                    </TestItem>
                  );
                  currentIndex += 1;
                }
                return layout;
              })}
            </Scroller>
          ) : switchLayout === "version-2" ? (
            <Scroller backgroundColor={backgroundColor}>
              {photoGroups.map((group, index) => {
                let layout;
                layout = (
                  <TestItem key={index}>
                    <EditBgImageCenter>
                      <img src={group[0].text} />
                    </EditBgImageCenter>
                  </TestItem>
                );
                return layout;
              })}
            </Scroller>
          ) : switchLayout === "version-3" ? (
            <Scroller backgroundColor={backgroundColor}>
              {photoGroups.map((group, index) => {
                let layout;
                layout = (
                  <TestItem key={index}>
                    <EditBgImageFull>
                      <img src={group[0].text} />
                    </EditBgImageFull>
                  </TestItem>
                );
                return layout;
              })}
            </Scroller>
          ) : (
            switchLayout === "version-4"(<Finish />)
          )}
          {/* </Scroller> */}
        </ScrollerContainer>
      </EditorBgContainer>
      <EditBgFrameBorderButton>
        <EditBgFrameButton onClick={() => prev()}>Prev</EditBgFrameButton>
        <EditBgFrameButton onClick={() => next()}>Next</EditBgFrameButton>
      </EditBgFrameBorderButton>
    </>
  );
};

export default EditBgFrame;
