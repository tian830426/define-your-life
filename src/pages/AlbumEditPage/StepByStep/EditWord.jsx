import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StepContext } from "../StepByStep/StepByStep";
import Button from "../../../components/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorConvertToHTML from "../../../components/EditorConvertToHTML";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const EditorBoxes = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const EditorAlbum = styled.div`
  width: 50%;
`;

const EditorImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%;
  height: 80%; */
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

const EditorNote = styled.div`
  width: 50%;
  background: #6c6262;
`;

const EditorTitele = styled.div`
  padding: 20px;
  h2 {
    color: white;
    margin: 0 auto;
  }
`;

const EditWordBorderButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 38%;
`;
const EditWordButton = styled(Button)`
  display: flex;
  margin: 0px 20px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;



const EditWord = () => {
  const {
    prev,
    next,
    selectedImages,
    setSelectedImages,
    cards,
    setCards,
    message,
    setMessage,
    rawMessage,
    setRawMessage,
    // editorState,
    // setEditorState,
  } = useContext(StepContext);
  return (
    <EditorContainer>
      <EditorBoxes>
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
        <EditorNote>
          <EditorTitele>
            <h2>Note</h2>
          </EditorTitele>
          <EditorConvertToHTML></EditorConvertToHTML>
        </EditorNote>
      </EditorBoxes>
      <EditWordBorderButton>
        <EditWordButton onClick={() => prev()}>Prev</EditWordButton>
        <EditWordButton
          onClick={() => {
            next();
            handleEditorStateToMessage();
          }}
        >
          Next
        </EditWordButton>
      </EditWordBorderButton>
    </EditorContainer>
  );
};

export default EditWord;
