import React, { useState, useContext } from "react";
import styled from "styled-components";
// import { SketchPicker } from "react-color";
import { CirclePicker } from "react-color";
import ColorItemBox from "./Finish";
import Button from "../../../components/Button";

// const ColorSwitcher = styled.div`
//   width:10rem;
//   background-color:white;
//   padding:1rem;
//   position:absolute;
//   right:0;
//   top:50%;
//   transform:translate(0,-50%)

// `;

// const Heading = styled.div`
//   font-size: 1.2rem;
//   margin-bottom:1.2rem
// `;

// const ColorList = styled.div`
// display:grid;
// display-template-columns:repeat(3,1fr)
// gap:1rem;
// `;

// const ColorItem = styled.div`
//   width: 2rem;
//   height: 2rem;
//   border-radius: 50%;
//   background-color: red;
// `;

// const colorItem = {
//   width: "2rem",
//   height: "2rem",
//   borderRadius: "50%",
//   backgroundColor: "red",
// }

// const ColorButton = styled.button`
//   width:3rem;
//   hight:3rem;
//   background-color:white;
//   border:none;
//   color:red;
//   position:absolute;
//   right:0;
//   top:50%;
//   transform:translate(-100%,-50%)
//   display:grid;
//   place-items:center;

// `

const EditBgFrameBorderButton = styled.div`
  display: flex;
  margin: 20px auto;
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
  const { prev, next, selectedImages, setSelectedImages } = useContext(StepContext);
  const [currentColor, setCurrentColor] = useState("#ff6");

  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
    console.log(color.hex);
  };

  const appStyle = {
    backgroundColor: currentColor,
    height: "100",
  };

  // const colors = [
  //   "#387b8e",
  //   "#2d3436",
  //   "#2d3436",
  //   "#2d3436",
  //   "#2d3436",
  //   "#2d3436",
  // ];
  return (
    <div className="App" style={appStyle}>
      <h1>hello</h1>
      <CirclePicker color={currentColor} onChangeComplete={handleOnChange} />
      <EditBgFrameBorderButton>
        <EditBgFrameButton onClick={() => prev()}>Prev</EditBgFrameButton>
        <EditBgFrameButton onClick={() => next()}>Next</EditBgFrameButton>
      </EditBgFrameBorderButton>
    </div>
    // <>
    //   <ColorSwitcher>
    //   <ColorButton>PPP</ColorButton>
    //     <Heading>select color</Heading>
    //     <ColorList >
    //       {colors.map((color, idx) =>
    //         <ColorItemBox color={color} />)}
    //     </ColorList>
    //   </ColorSwitcher>
    // </>
  );
};

export default EditBgFrame;
