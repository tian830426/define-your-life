import React, { useState } from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

// import MoveInWidthwise from "./MoveInWidthwise";
import MoveIn from "./MoveIn";
import image1 from "../../assets/toy.jpg";
import image2 from "../../assets/mount.jpeg";
import image3 from "../../assets/musicPeople.JPG";
import image4 from "../../assets/cryPeople.JPG";
import image5 from "../../assets/mount.jpeg";

const Scroller = styled(MoveIn)`
  width: 900px;
  height: 600px;
  border: 5px solid black;
`;
// const TestComponent = styled.div`
//   display: flex;
//   width: 1000px;
//   height: 700px;
// `;

const TestItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 0 0 10%;
  background: rgb(221, 214, 201);
`;

const Image1 = styled.div`
  width: 70%;
  height: 70%;
  background-image: url(${image1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image2 = styled.div`
  width: 400px;
  height: 600px;
  background-image: url(${image2});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 15%;
  left: 20%;
  /* transform: translate(-50%, -50%); */
`;

const Image3 = styled.div`
  width: 750px;
  height: 450px;
  background-image: url(${image3});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 40%;
  left: 45%;
  /* transform: translate(-50%, -50%); */
`;

const Image4 = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${image4});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(0, -50%);
`;

const Image5 = styled.div`
  width: 800px;
  height: 500px;
  background-image: url(${image5});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 35%;
  left: 25%;
  /* transform: translate(-50%, -50%); */
`;

const Image6 = styled.div`
  width: 650px;
  height: 400px;
  background-image: url(${image5});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 20%;
  left: 60%;
  /* transform: translate(-50%, -50%); */
`;
function HomePage() {
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        <Scroller>
          <TestItem>
            <Image1></Image1>
          </TestItem>
          <TestItem>
            <Image2></Image2>
            <Image3></Image3>
          </TestItem>
          <TestItem>
            <Image1></Image1>
          </TestItem>
          <TestItem>
            <Image5></Image5>
            <Image6></Image6>
          </TestItem>
          <TestItem>
            <Image4></Image4>
          </TestItem>
          <TestItem>
            <Image1></Image1>
          </TestItem>
          <TestItem>
            <Image2></Image2>
            <Image3></Image3>
          </TestItem>
          <TestItem>
            <Image1></Image1>
          </TestItem>
          <TestItem>
            <Image5></Image5>
            <Image6></Image6>
          </TestItem>
          <TestItem>
            <Image4></Image4>
          </TestItem>
        </Scroller>
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default HomePage;

// import React from "react";
// import styled from "styled-components";

// // 定義三種不同的版型
// const CenterLayout = [1, 1, 1, 1, 1];
// const OverlappingLayout = [[1, 1], [1, 1], [1, 1]];
// const MixLayout = [[1], [2, 3], [4], [5, 6]];

// // 根據版型順序陣列選擇版型
// const getLayout = (photoCount) => {
//   switch (photoCount) {
//     case 1:
//       return CenterLayout;
//     case 2:
//       return OverlappingLayout;
//     default:
//       const index = photoCount - 3;
//       if (index < MixLayout.length) {
//         return MixLayout[index];
//       }
//       return CenterLayout;
//   }
// };

// const shuffleArray = (array) => {
//   // 洗牌算法
//   // ...
// };

// const HomePage = ({ albums }) => {
//   const ImageCenter = styled.div`
//     text-align: center;
//     margin: auto;
//   `;

//   const ImageLeft = styled.div`
//     float: left;
//     width: 50%;
//   `;

//   const ImageRight = styled.div`
//     float: right;
//     width: 50%;
//   `;

//   const TestList = styled.ul`
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   `;

//   const TestItem = styled.li`
//     display: inline-block;
//     width: 50%;
//     box-sizing: border-box;
//     padding: 5px;
//     margin: 0;
//   `;

//   return (
//     <div>
//       {albums.map((album) => {
//         const photoCount = album.UrlArray.length;
//         const layout = getLayout(photoCount);
//         let index = 0;
//         return layout.map((row, i) => {
//           const images = row.map(() => {
//             const url = album.UrlArray[index];
//             index++;
//             return (
//               <TestItem key={url}>
//                 <ImageCenter>
//                   <img src={url} style={{ width: "100%" }} />
//                 </ImageCenter>
//               </TestItem>
//             );
//           });
//           return (
//             <TestList key={`${album.id}-${i}`}>
//               {images}
//             </TestList>
//           );
//         });
//       })}
//     </div>
//   );
// };

// export default HomePage;
