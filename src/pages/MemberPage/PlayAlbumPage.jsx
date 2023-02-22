import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import animationBgimg from "../../assets/toy.jpg";

const BackToPrevious = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  outline: 1.5px solid rgb(104, 142, 129);
  color: rgb(104, 142, 129);
  margin: 15px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  padding: auto 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

// const Container = styled.div`
//   max-width: 1000px;
//   margin: 100px auto;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `;

// const Card = styled.div`
//   position: relative;
//   width: 300px;
//   height: 400px;
//   transform-style: preserve-3d;
//   transform: perspective(2000px);
//   background-color: white;
//   box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5);
//   transition: 1s;

//   &:hover {
//     transform: rotateY(-160deg);
//     transform: perspective(2000px);
//     /* ImgBox{
//       box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5);
//     } */
//   }
// `;

// const ImgBox = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   z-index: 1;

//   transform-origin: left;
//   transition: 2s;
//   transform: rotateY(-160deg);

//   &:hover {
//     box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5);
//   }
// `;

// const AnimationBgimg = styled.img`
//   width: 300px;
//   height: 400px;
// `;

// const TextWord = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding: 30px;
// `;


  
 


function PlayAlbumPage(props) {
  const navigate = useNavigate();

  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        
        {/* <Container>
          <Card>
            <ImgBox>
              <AnimationBgimg
                src={animationBgimg}
                alt="animationBgimg"
              ></AnimationBgimg>
            </ImgBox>

            <TextWord>
              <h2>Lorem ipsum dolor sit amet consectetur </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                facere perferendis eaque omnis ad est temporibus libero facilis
                delectus! Unde alias delectus porro quisquam provident,
                aspernatur temporibus in excepturi consectetur!
              </p>
            </TextWord>
          </Card>
        </Container> */}
        <BackToPrevious onClick={() => navigate(-1)}>回上一頁</BackToPrevious>
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default PlayAlbumPage;
