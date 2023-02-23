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

// import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import

const EditorBgContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;

const EditorBgTitle = styled.div`
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

const EditorBgBoxes = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
`;

const EditorImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  /* height: 70%;  */
  /* width: 50%px; */
  height: 380px;
  object-fit: cover;
`;

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
  margin: 60px 20px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const ParallaxGallery = styled.div`
  transform: translateX(${props => (props.index - 1) * props.scrollPosition * 0.2}px);
`;

const EditBgFrame = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

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

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = containerRef.current;
      setScrollPosition(scrollTop);
    };
    containerRef.current.addEventListener("scroll", handleScroll);

    return () =>
      containerRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const onEditorStateChange = (newEditorState) => {
  //   setEditorState(newEditorState);
  //   setRawMessage(
  //     draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
  //   );
  // };

  // const handleEditorStateToMessage = () => {
  //   setMessage(rawMessage);
  // };

  // const wrapperStyle = {
  //   border: "1px solid #969696",
  // };

  // const editorStyle = {
  //   height: "10rem",
  //   padding: "1rem",
  // };

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

  // const handleMessage = (event) => {
  //   setMessage(event.target.value);
  // };

  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <EditorBgContainer>
        <EditorBgTitle>
          <h2>Preview</h2>
        </EditorBgTitle>
        <EditorBgBoxes>
          <EditorAlbum>
            {/* <Swiper
              effect="fade"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={10}
              navigation
              //  pagination={{ clickable: true}}
              scrollbar={{ draggable: true }}
              //  onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {cards.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <EditorImg src={image.text} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
            <div ref={containerRef}>
              {cards.map((image, index) => {
                return (
                  <ParallaxGallery key={index} scrollPosition={scrollPosition}>
                    <EditorImg src={image.text} alt="" />
                  </ParallaxGallery>
                  // <SwiperSlide key={index}>
                  //   <EditorImg src={image.text} alt="" />
                  // </SwiperSlide>
                );
              })}
            </div>
          </EditorAlbum>
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
        </EditorBgBoxes>
      </EditorBgContainer>
      <EditBgFrameBorderButton>
        <EditBgFrameButton onClick={() => prev()}>Prev</EditBgFrameButton>
        <EditBgFrameButton onClick={() => finish()}>Finish</EditBgFrameButton>
      </EditBgFrameBorderButton>
    </>
  );
};

export default EditBgFrame;
