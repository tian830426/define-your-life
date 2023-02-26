import React, { useState } from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

import MoveInWidthwise from "./MoveInWidthwise";
import image1 from "../../assets/toy.jpg";
import image2 from "../../assets/mount.jpeg";
import image3 from "../../assets/musicPeople.JPG";
import image4 from "../../assets/cryPeople.JPG";
import image5 from "../../assets/mount.jpeg";

const Heading = styled.h1`
  text-align: center;
`;

const AlbumContainer = styled.div`
  margin-top: 100px;
`;

const PageContainer = styled.div`
  height: 100vh;
`;

const TestComponent = styled.div`
  display: flex;
  width: 1000vw;
`;

const TestItem = styled.div`
  position: relative;
  width:100vw;
  height: 100vh;
  flex: 0 0 10%;
  background: rgb(221, 214, 201);
`;

const Image1 = styled.div`
  width: 70vw;
  height: 70vh;
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
  width: 70vw;
  height: 100vh;
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
        <AlbumContainer>
          <PageContainer>
            <Heading>↓↓↓</Heading>
          </PageContainer>
          <MoveInWidthwise
            displayed={
              <TestComponent>
                <TestItem>
                  <Image1>123</Image1>
                </TestItem>
                <TestItem>
                  <Image2>456</Image2>
                  <Image3>789</Image3>
                </TestItem>
                <TestItem>
                  <Image1>789</Image1>
                </TestItem>
                <TestItem>
                  <Image5>456</Image5>
                  <Image6>123</Image6>
                </TestItem>
                <TestItem>
                  <Image4>123</Image4>
                </TestItem>
                <TestItem>
                  <Image1>123</Image1>
                </TestItem>
                <TestItem>
                  <Image2>456</Image2>
                  <Image3>789</Image3>
                </TestItem>
                <TestItem>
                  <Image1>789</Image1>
                </TestItem>
                <TestItem>
                  <Image5>456</Image5>
                  <Image6>123</Image6>
                </TestItem>
                <TestItem>
                  <Image4>123</Image4>
                </TestItem>
              </TestComponent>
            }
          />
          <PageContainer>
            <Heading>↑↑↑</Heading>
          </PageContainer>
        </AlbumContainer>
      </BackgroundLayout>
      {/* <FooterLayout /> */}
    </>
  );
}

export default HomePage;
