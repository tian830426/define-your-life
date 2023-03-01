// import React, { useState } from "react";

// function ColorPicker() {
//   const [color, setColor] = useState("#FFFFFF");

//   const styles = {
//     backgroundColor: color,
//     height: "100vh",
//   };

//   return (
//     <div className="color-picker" style={styles}>
//       <input
//         type="color"
//         value={color}
//         onChange={(event) => setColor(event.target.value)}
//       />
//     </div>
//   );
// }

// export default ColorPicker;

import React, { useState } from "react";
import styled from "styled-components";

// import paintBrush from "../assets/iconmonstr-paintbrush-7.svg";
// function ColorPicker({ iconUrl }) {
//   const [color, setColor] = useState("#ffffff");

//     const styles = {
//     backgroundColor: color,
//     height: "100vh",
//   };

//   return (
//     <div className="color-picker">
//       <div className="color-icon" style={styles}>
//         <img src={paintBrush} alt="color icon" />
//       </div>
//       <input
//         type="color"
//         value={color}
//         onChange={(event) => setColor(event.target.value)}
//       />
//       <p>Selected color: {color}</p>
//     </div>
//   );
// }

const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28ddd0px;
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
const ColorBlockOne = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: #f8c8c8;
  cursor: pointer;
`;

const ColorBlockTwo = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: #fbf8e9;
  cursor: pointer;
`;
const ColorBlockThree = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: #cad8b8;
  cursor: pointer;
`;
const ColorBlockFour = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid rgb(255, 255, 255);
  outline: rgb(173, 173, 173) solid 2px;
  border-radius: 8px;
  margin-right: 16px;
  transition: all 0.1s ease-in 0s;
  background: #d7d1e6;
  cursor: pointer;
`;

// const ColorBlockFive = styled.div`
//   width: 32px;
//   height: 32px;
//   border: 2px solid rgb(255, 255, 255);
//   outline: rgb(173, 173, 173) solid 2px;
//   border-radius: 8px;
//   margin-right: 16px;
//   transition: all 0.1s ease-in 0s;
//   cursor: pointer;
// `;

const ColorFanBlock = () => {
  return (
    <>
      <ColorPicker>
        <ColorTitle>
          <h3>Change Background Color</h3>
        </ColorTitle>
        <ColorBoxes>
          <ColorBlockOne></ColorBlockOne>
          <ColorBlockTwo></ColorBlockTwo>
          <ColorBlockThree></ColorBlockThree>
          <ColorBlockFour></ColorBlockFour>
          {/* <ColorBlockFive></ColorBlockFive> */}
        </ColorBoxes>
      </ColorPicker>
    </>
  );
};

export default ColorFanBlock;
// export {ColorPicker,}
