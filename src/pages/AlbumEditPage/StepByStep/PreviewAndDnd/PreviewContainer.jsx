import React, { useState, useCallback, useContext } from "react";
import update from "immutability-helper";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineCloudUpload } from "react-icons/ai";
import uploadImageIcon from "../../../../assets/iconmonstr-picture-8.svg";
import { storage } from "../../../../components/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  listAll,
  list,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
// useRef,useEffect
import PreviewImage from "./PreviewImage";
import { StepContext } from "../StepByStep";
import Button from "../../../../components/Button";

const PreviewBoxes = styled.section`
  width: 100%;
  height: 90%;
  /* padding: 1.5rem 0; */
  position: relative;
`;

const PreviewTitle = styled.div`
  margin: 30px auto;
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
  p {
    font-size: 24px;
    text-align: center;
  }
`;
const PreviewLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  height: 280px;
  /* padding: 20px; */
  margin: 0 40px 40px 20px;
  opacity: 0.7;
  border: 5px dashed gray;
  border-radius: 12px;
  /* background: rgba(0, 0, 0, 0.1); */
  /* box-shadow: rgb(104, 142, 129) 2px 2px 2px 4px; */
  color: gray;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    color: gray;
    opacity: 0.7;
  }

  &:hover {
    opacity: 1;
    color: white;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    padding-top: 0.5rem;
  }

  input {
    display: none;
  }
`;
const PreviewAlbum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const PreviewAlbumSwiper = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  align-items: center;
  margin: auto;
  overflow-y: auto; 
  overflow-x: scroll;
  /* overflow-y: hidden; */
`;

const PreviewImages = styled.div`
  margin: 20px 20px;
  /* margin-bottom: 50px; */
  /* box-shadow: 0px 1px 2px 0px; */
  position: relative;
  /* outline: 2px solid rgb(104, 142, 129); */
  background: white;
  padding: 20px 20px 60px 20px;
  border-radius: 12px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
  }

  button {
    border-radius: 50%;
    position: absolute;
    background-color: transparent;
    top: -20px;
    right: -20px;
    cursor: pointer;
    font-size: 20px;
    svg {
      width: 30px;
      height: 30px;
      color: rgb(165, 165, 165);
      opacity: 0.5;
      &:hover {
        width: 32px;
        height: 32px;
        opacity: 1;
      }
    }
  }
`;

const PreviewImagesLen = styled.p`
  display: flex;
  margin: 5px auto;
  text-align: center;
  justify-content: center;
  span {
    color: red;
  }
`;

const PreviewBorderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* position: absolute;
  bottom: 20px; */
  /* left: 50%; */
  /* transform: translate(0, -50%);   */
`;

const PreviewButton = styled(Button)`
  display: flex;
  margin: 0 20px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2.5px solid gray;
  color: gray;

  &:hover {
    background: gray;
  }
`;

const PreviewContainer = (props) => {
  const {
    prev,
    next,
    selectedImages,
    setSelectedImages,
    cards,
    setCards,
    // editorState,
    // setEditorState
  } = useContext(StepContext);

  // 點選照片
  // const [selectedImages, setSelectedImages] = useState([]);

  // 上傳照片
  const [files, setFiles] = useState([]);
  const [show, setShow] = useState(true);
  // const [cards, setCards] = useState([]);

  // const [imageUrls, setImageUrls] = useState([]);
  // const imagesListRef = ref(storage, "images/");

  // 選取照片執行的 func
  const onSelectFile = (event) => {
    // filelist 取得一張照片
    const selectFiles = event.target.files; // files[0] -> Blob
    // 取得多張照片後轉 filelist array
    const selectFilesArray = Array.from(selectFiles); // Blob[]
    // 將filelist array 裡的每張照片展開 並回傳 url
    const imagesArray = selectFilesArray.map((file) => {
      return URL.createObjectURL(file);
    }); // string[] object

    const cardsArray = selectFilesArray.map((file, index) => {
      return {
        id: index,
        text: URL.createObjectURL(file),
        file: file,
      };
    });

    console.log(cardsArray);

    //最新狀態會是在當前圖片後上 網址
    setSelectedImages((previousImages) => previousImages.concat(imagesArray)); // selectedImages => string[]

    // 因為上傳的照片需要blob，所以上傳照片的最新狀態就是當前圖片後加上 選取照片後的 blob[]
    setFiles((previousImages) => previousImages.concat(selectFilesArray));
    // files => Blob[]

    setCards((previousImages) => previousImages.concat(cardsArray));

    // setSelectedImages(imagesArray);
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <PreviewImage
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);

  return (
    <>
      <PreviewBoxes>
        <PreviewTitle>
          <h2>UpLoad and Sort Photos</h2>
          <p>Try to drag and drog for sorting photos</p>
        </PreviewTitle>
        <PreviewAlbum>
          <PreviewAlbumSwiper>
            {cards.map((card, index) => {
              return (
                <PreviewImages key={card}>
                  {renderCard(cards[index], index)}
                  {/* <img src={image} alt="upload images" /> */}

                  <button
                    onClick={() => {
                      setCards(cards.filter((e) => e !== card));
                    }}
                  >
                    <TiDeleteOutline />
                  </button>
                  {/* <p>{index + 1}</p> */}
                </PreviewImages>
              );
            })}
            <br />
            <PreviewLabel>
              <img src={uploadImageIcon}></img>
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png, image/jpeg, image/jpg, image/svg"
              />
            </PreviewLabel>
          </PreviewAlbumSwiper>
        </PreviewAlbum>
      </PreviewBoxes>
      <PreviewBorderButton>
        <PreviewButton onClick={() => prev()}>Prev</PreviewButton>
        <PreviewButton onClick={() => next()}>Next</PreviewButton>
      </PreviewBorderButton>
    </>
  );
};

export default PreviewContainer;

{
  /* <div className="App">
  <input
    type="file"
    onChange={(event) => {
      setImageUpload(event.target.files[0]);
    }}
  />
  <button onClick={uploadFile}> Upload Image</button>
  {imageUrls.map((url) => {
    return <img src={url} />;
  })}
  </div> */
}
