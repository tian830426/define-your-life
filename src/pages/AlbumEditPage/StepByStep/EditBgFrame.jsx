import React, { useState, useContext } from "react";
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

const EditorBgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
  width: 50%;
`;

const EditBgFrameBorderButton = styled.div`
  display: flex;
  margin: 20px auto;
  position: absolute;
  top: 85;
  left: 50%;
  transform: translate(-50%, -50%);
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

const EditBgFrame = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

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

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    setRawMessage(
      draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
    );
  };

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

  //upload albumInfo and message text
  // const onSelectFile = (event) => {
  //   // filelist 取得一張照片
  //   const selectFiles = event.target.files; // files[0] -> Blob
  //   // 取得多張照片後轉 filelist array
  //   const selectFilesArray = Array.from(selectFiles); // Blob[]
  //   // 將filelist array 裡的每張照片展開 並回傳 url
  //   const imagesArray = selectFilesArray.map((file) => {
  //     return URL.createObjectURL(file);
  //   }); // string[] object

  //   const cardsArray = imagesArray.map((card, index) => {
  //     return {
  //       id: index,
  //       text: card,
  //     };
  //   });

  //   console.log(cardsArray);

  //   //最新狀態會是在當前圖片後上 網址
  //   setSelectedImages((previousImages) => previousImages.concat(imagesArray)); // selectedImages => string[]

  //   // 因為上傳的照片需要blob，所以上傳照片的最新狀態就是當前圖片後加上 選取照片後的 blob[]
  //   setFiles((previousImages) => previousImages.concat(selectFilesArray));
  //   // files => Blob[]

  //   setCards((previousImages) => previousImages.concat(cardsArray));

  //   // setSelectedImages(imagesArray);
  // };
  const finish = async (e) => {
    // e.preventDefault(e);

    try {
      const urlArray = [];
      for (let i = 0; i < cards.length; i++) {
        const imageRef = ref(storage, `images/${cards[i].file.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, cards[i].file);
        const url = await getDownloadURL(snapshot.ref);
        urlArray.push(url);
      }
      // await uploadBytes(imageRef, cards[i].file).then((snapshot) => {
      //   // console.log(cards);
      //   // console.log(imageRef);
      //   getDownloadURL(snapshot.ref).then((url) => {
      //     // setImageUrls((prev) => [...prev, url]);
      //     // console.log(url);
      //   });
      //   alert("image upload");
      // });
      alert("image upload");
      const newDocRef = doc(collection(db, currentUser.email));
      await setDoc(newDocRef, {
        Editor: editor,
        Name: name,
        Date: date,
        Description: description,
        Message: message,
        UrlArray: urlArray,
      });
      navigate("/home/library");

      console.log("Document written with ID: ", newDocRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // 上傳照片
  // const [files, setFiles] = useState([]);

  // 上傳照片執行的 func
  // const uploadImg = () => {
  //   if (files == null) return;
  // for (let i = 0; i < files.length; i++) {
  //   const imageRef = ref(storage, `images/${files[i].name + v4()}`);
  //   uploadBytes(imageRef, files[i]).then((snapshot) => {
  //     // getDownloadURL(snapshot.ref).then((url) => {
  //     //   setImageUrls((prev) => [...prev, url]);
  //     // });
  //     // alert("image upload");
  //   });
  // }
  // };

  //
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  // 將資料存到firestorge
  // const submit = async (e) => {
  //   e.preventDefault(e);
  //   if (message === "") {
  //     return;
  //   }
  //   await addDoc(collection(db, "text"), {
  //     Message: message,
  //   });

  //   setMessage("");
  // };

  // useEffect(() => {
  //   const q = query(collection(db, "text"))
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let TextArr = [];
  //     querySnapshot.forEach((doc) => {
  //       TextArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setAlbums(TextArr);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // 從資料庫將資料刪除
  // const deleteText = async (id) => {
  //   await deleteDoc(doc(db, "text", id));
  //   setShow(true);

  // const [show, setShow] = useState(true);

  return (
    <EditorBgContainer>
      <EditorBgBoxes>
        <EditorAlbum>
          <Swiper
            effect="fade"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            //  pagination={{ clickable: true}}
            scrollbar={{ draggable: true }}
            //  onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {cards.map((image, index) => {
              // console.log(cards);
              // console.log(image);
              return (
                <SwiperSlide key={index}>
                  <EditorImg src={image.text} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </EditorAlbum>
        <React.Fragment>
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
        </React.Fragment>
      </EditorBgBoxes>
      <EditBgFrameBorderButton>
        <EditBgFrameButton onClick={() => prev()}>Prev</EditBgFrameButton>
        <EditBgFrameButton
          // onChange={onSelectFile}
          // multiple
          // accept="image/png, image/jpeg, image/jpg, image/svg"
          onClick={() => finish()}
        >
          Finish
        </EditBgFrameButton>
        {/* <EditBgFrameButton
          onClick={() => {
            next();
            uploadImg();
            handleMessage();
          }}
        >
          UPLOAD
        </EditBgFrameButton> */}
      </EditBgFrameBorderButton>
    </EditorBgContainer>
  );
};

export default EditBgFrame;
