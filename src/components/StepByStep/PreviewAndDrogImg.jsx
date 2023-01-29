import React, { useState } from "react";
import styled from "styled-components";

const PreviewCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PreviewImgBoxes = styled.div`
  width: 80%;
  height: 48vh;
  margin: 20px 0;
  border: 2px solid saddlebrown;
  border-radius: 20px;
  text-align: center;

  p {
    margin-top: -10px;
    color: #777;
  }
`;

const PreviewAndDrogImg = () => {
  const [imgView, setimgView] = useState(null);
  const [error, setError] = useState(false);
  const handleImageChange = (ele) => {
    setError(false);
    const selected = ele.target.files[0];
    console.log(selected);
    const ALLOWED_TYPES = ["image/png", "image/jpg", "image/svg", "image/jpeg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let render = new FileReader();
      render.onloadend = () => {
        setimgView(render.result);
      };
      render.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <PreviewCenter>
      <PreviewImgBoxes>
        <h2>Image Preview Box</h2>
        {error && <p>格式錯誤</p>}
        <div
          className="imgView"
          style={{
            background: imgView
              ? `url("${imgView}") no-repeat center/cover`
              : "#9A9483",
          }}
        >
          {!imgView && (
            <>
              <p>ass an image</p>
              <label htmlFor="fileUpload">請選擇圖檔</label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
              <span>(png, jpg or svg)</span>
            </>
          )}
        </div>
        {imgView && (
          <button onClick={() => setimgView(null)}> remove img</button>
        )}
      </PreviewImgBoxes>
    </PreviewCenter>
  );
};

export default PreviewAndDrogImg;
