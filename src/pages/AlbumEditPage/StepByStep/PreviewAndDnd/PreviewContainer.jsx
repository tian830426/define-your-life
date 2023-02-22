import React, { useState, useCallback, useContext } from "react";
import update from "immutability-helper";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineCloudUpload } from "react-icons/ai";
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
  height: 100%;
  padding: 1.5rem 0;
  position: relative;
`;

const PreviewLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  margin: 20px auto;
  padding: 5px;
  border-radius: 50%;
  /* outline: 3px  ;  */
  background: rgba(0, 0, 0, 0.1);
  /* box-shadow: rgb(104, 142, 129) 2px 2px 2px 4px; */
  /* color: gray; */
  cursor: pointer;
  font-size: 20px;

  &:hover {
   
    opacity: 0.7;
    background: gray;
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

const PreviewAlbum = styled.ul`
  /* width: 100%; */
  /* height: 80%; */
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  overflow: auto;
`;

const PreviewImages = styled.li`
  margin: 16px 16px;
  margin-bottom: 60px;
  box-shadow: 0px 1px 2px 0px;
  position: relative;
  outline: 2px solid rgb(104, 142, 129);
  // background: rgb(104, 142, 129);
  padding: 10px 10px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    background-color: transparent;
    top: -16px;
    right: -16px;
    cursor: pointer;
    color: gray;
    font-size: 20px;

    &:hover {
      opacity: 0.7;
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
  position: absolute;
  bottom: 20px;
  left: 38%;
  /* transform: translate(0, -50%);  */
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

  // 上傳照片執行的 func
  // const uploadImg = () => {
  //   if (files == null) return;
  //   for (let i = 0; i < files.length; i++) {
  //     const imageRef = ref(storage, `images/${files[i].name + v4()}`);
  //     uploadBytes(imageRef, files[i]).then((snapshot) => {
  //       // getDownloadURL(snapshot.ref).then((url) => {
  //       //   setImageUrls((prev) => [...prev, url]);
  //       // });
  //       alert("image upload");
  //     });
  //   }
  // };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  // // console.log(onSelectFile);

  return (
    // <AlbumName.Consumer>
    //   <AlbumDate.Consumer>
    //     <AlbumDescription.Consumer>
    //       <Test.Consumer>

    //       </Test.Consumer>
    //     </AlbumDescription.Consumer>
    //   </AlbumDate.Consumer>
    // </AlbumName.Consumer>
    <PreviewBoxes>
      {/* <p>{name}</p>
     <p>{date}</p>
     <p>{description}</p>
     <p>{test}</p> */}
      {/* <div>{cards.map((card, i) => renderCard(card, i))}</div> */}
      <PreviewLabel>
        <AiOutlineCloudUpload />
        add images
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png, image/jpeg, image/jpg, image/svg"
        />
      </PreviewLabel>
      <br />
      {/* <button onClick={uploadImg}>
        UPLOAD {selectedImages.length} IMAGE
        {selectedImages.length === 1 ? "" : "S"}
      </button> */}
      {/* {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <PreviewImagesLen>
            limit 10 images.
            <br />
            <span>Please delete {selectedImages.length - 10} of them.</span>
          </PreviewImagesLen>
        ) : (
          <button onClick={uploadImg}>
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))} */}
      {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}

      <PreviewAlbum>
        {cards.map((card, index) => {
          return (
            <PreviewImages key={card}>
              {renderCard(cards[index], index)}
              {/* <img src={image} alt="upload images" /> */}

              <button
                onClick={() => {
                  // console.log(selectedImages);
                  setCards(cards.filter((e) => e !== card));
                  // let cat = selectedImages.filter((e) => e !== card);
                  // console.log(cat);
                }}
              >
                <TiDeleteOutline />
              </button>
              {/* <p>{index + 1}</p> */}
            </PreviewImages>
          );
        })}
      </PreviewAlbum>
      <PreviewBorderButton>
        <PreviewButton onClick={() => prev()}>Prev</PreviewButton>
        <PreviewButton onClick={() => next()}>Next</PreviewButton>
      </PreviewBorderButton>
    </PreviewBoxes>
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
