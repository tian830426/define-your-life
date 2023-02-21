// import React, { useState, useContext } from "react";
// import styled from "styled-components";
// // import { SketchPicker } from "react-color";
// import { CirclePicker } from "react-color";
// import ColorItemBox from "./Finish";
// import { StepContext } from "../StepByStep/StepByStep";
// import Button from "../../../components/Button";

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

// const EditorBgContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const EditorBgBoxes = styled.div`
//   width: 100%;
//   height: 85%;
//   display: flex;
// `;

// const EditorImg = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin-top: 20px;
//   /* height: 70%;  */
//   /* width: 50%px; */
//   height: 380px;
//   object-fit: cover;
// `;

// const EditorAlbum = styled.div`
//   width: 50%;
// `;

// const EditBgFrameBorderButton = styled.div`
//   display: flex;
//   margin: 20px auto;
//   position: absolute;
//   top: 85;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const EditBgFrameButton = styled(Button)`
//   display: flex;
//   margin: 60px 20px;
//   font-size: 20px;
//   background: rgba(255, 255, 255, 0.1);
//   outline: 2.5px solid gray;
//   color: gray;

//   &:hover {
//     background: gray;
//   }
// `;

// const EditBgFrame = () => {
//   const {
//     prev,
//     next,
//     editor,
//     setEditor,
//     name,
//     setName,
//     date,
//     setDate,
//     description,
//     setDescription,
//     selectedImages,
//     setSelectedImages,
//     cards,
//     setCard,
//     message,
//     setMessage,
//     rawMessage,
//     setRawMessage,
//   } = useContext(StepContext);

//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   const onEditorStateChange = (newEditorState) => {
//     setEditorState(newEditorState);
//     setRawMessage(
//       draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
//     );
//   };

//   const handleEditorStateToMessage = () => {
//     setMessage(rawMessage);
//   };

//   const [currentColor, setCurrentColor] = useState("#c2c299");

//   const handleOnChange = (color) => {
//     setCurrentColor(color.hex);
//     console.log(color.hex);
//   };

//   const appStyle = {
//     backgroundColor: currentColor,
//     height: "100%",
//   };

//   const wrapperStyle = {
//     border: "1px solid #969696",
//   };

//   const editorStyle = {
//     height: "10rem",
//     padding: "1rem",
//   };

  

//   // 上傳照片
//   // const [files, setFiles] = useState([]);

//   // 上傳照片執行的 func
//   // const uploadImg = () => {
//   //   if (files == null) return;
//   //   for (let i = 0; i < files.length; i++) {
//   //     const imageRef = ref(storage, `images/${files[i].name + v4()}`);
//   //     uploadBytes(imageRef, files[i]).then((snapshot) => {
//   //       // getDownloadURL(snapshot.ref).then((url) => {
//   //       //   setImageUrls((prev) => [...prev, url]);
//   //       // });
//   //       // alert("image upload");
//   //     });
//   //   }
//   // };

//   //
//   const handleMessage = (event) => {
//     setMessage(event.target.value);
//   };

//   // 將資料存到firestorge
//   // const submit = async (e) => {
//   //   e.preventDefault(e);
//   //   if (message === "") {
//   //     return;
//   //   }
//   //   await addDoc(collection(db, "text"), {
//   //     Message: message,
//   //   });

//   //   setMessage("");
//   // };

//   // useEffect(() => {
//   //   const q = query(collection(db, "text"))
//   //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   //     let TextArr = [];
//   //     querySnapshot.forEach((doc) => {
//   //       TextArr.push({ ...doc.data(), id: doc.id });
//   //     });
//   //     setAlbums(TextArr);
//   //   });
//   //   return () => unsubscribe();
//   // }, []);

//   // 從資料庫將資料刪除
//   // const deleteText = async (id) => {
//   //   await deleteDoc(doc(db, "text", id));
//   //   setShow(true);

//   // const [show, setShow] = useState(true);

//   return (
//     <EditorBgContainer>
//       <div className="App" style={appStyle}>
//         <CirclePicker
//           color={currentColor}
//           onChangeComplete={handleOnChange}
//           // triangle="top-right"
//           colors={["#f1dfb6", "#d4c5ba", "#bad6c8", "#d8bebe", "#c5d5ec"]}
//         />
//         <EditorBgBoxes>
//           <EditorAlbum>
//             <Swiper
//               effect="fade"
//               modules={[Navigation, Pagination, Scrollbar, A11y]}
//               spaceBetween={0}
//               slidesPerView={1}
//               navigation
//               //  pagination={{ clickable: true}}
//               scrollbar={{ draggable: true }}
//               //  onSwiper={(swiper) => console.log(swiper)}
//               onSlideChange={() => console.log("slide change")}
//             >
//               {cards.map((image, index) => {
//                 // console.log(cards);
//                 // console.log(image);
//                 return (
//                   <SwiperSlide key={index}>
//                     <EditorImg src={image.text} alt="" />
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </EditorAlbum>
//           <React.Fragment>
//             <div
//               style={{
//                 // border: "1px solid #969696",
//                 borderRadius: "3px",
//                 width: "50%",
//                 height: "80%",
//                 padding: "1rem",
//               }}
//             >
//               <div dangerouslySetInnerHTML={{ __html: message }}></div>
//             </div>
//             {/* <div style={{ marginTop: "5%" }}>
//               <Editor
//                 initialEditorState={editorState}
//                 wrapperClassName="wrapper-class"
//                 wrapperStyle={wrapperStyle}
//                 editorStyle={editorStyle}
//                 editorClassName="demo-editor"
//                 onEditorStateChange={onEditorStateChange}
//                 toolbar={{
//                   options: [
//                     "inline",
//                     "blockType",
//                     "fontSize",
//                     "textAlign",
//                     "history",
//                     "colorPicker",
//                   ],
//                   inline: {
//                     options: ["italic", "bold"],
//                     bold: { className: "demo-option-custom" },
//                     italic: { className: "demo-option-custom" },
//                     underline: { className: "demo-option-custom" },
//                     strikethrough: { className: "demo-option-custom" },
//                     monospace: { className: "demo-option-custom" },
//                     superscript: { className: "demo-option-custom" },
//                     subscript: { className: "demo-option-custom" },
//                   },
//                   blockType: {
//                     className: "demo-option-custom-wide",
//                     dropdownClassName: "demo-dropdown-custom",
//                   },
//                   fontSize: { className: "demo-option-custom-medium" },
//                 }}
//               />
//             </div> */}
//             {/* <div style={{ marginTop: "2%" }}>
//           <button onClick={handleEditorStateToMessage}>submit</button>
//         </div> */}
//           </React.Fragment>
//         </EditorBgBoxes>
//         <EditBgFrameBorderButton>
//           <EditBgFrameButton onClick={() => prev()}>Prev</EditBgFrameButton>
//           <EditBgFrameButton onClick={() => next()}>Next</EditBgFrameButton>
//           {/* <EditBgFrameButton
//           onClick={() => {
//             next();
//             uploadImg();
//             handleMessage();
//           }}
//         >
//           UPLOAD
//         </EditBgFrameButton> */}
//         </EditBgFrameBorderButton>
//       </div>
//     </EditorBgContainer>

//     // <>
//     //   <ColorSwitcher>
//     //   <ColorButton>PPP</ColorButton>
//     //     <Heading>select color</Heading>
//     //     <ColorList >
//     //       {colors.map((color, idx) =>
//     //         <ColorItemBox color={color} />)}
//     //     </ColorList>
//     //   </ColorSwitcher>
//     // </>
//   );
// };

// export default EditBgFrame;
