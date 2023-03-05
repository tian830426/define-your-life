import React, { useState } from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
// import theme,{breakpoints} from "../../components/theme";

// import MoveInWidthwise from "./MoveInWidthwise";
import MoveIn from "./MoveIn";

import image1 from "../../assets/clock.JPG";
import image2 from "../../assets/cryPeople.JPG";
import image3 from "../../assets/FWJO2781.JPG";
import image4 from "../../assets/toy.jpg";
import image5 from "../../assets/IMG_0004.jpg";
import image6 from "../../assets/MODH9013.JPG";
import image7 from "../../assets/IMG_3021.JPG";

import DomoOne from "../../assets/Domo-1.png";
import DomoTwo from "../../assets/Domo-2.png";

const SectionContainer = styled.div`
  /* max-width: 1200px; */
  margin: auto;
  width: 100%;
  height: 75vh;
  background: rgb(239, 236, 230);
  position: relative;

  @media (max-width: 1024) {
    width: 80%;
  }
`;

const SectionBoxes = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* max-width: 1200px; */
  /* width: 85%;
  height: 100%;
  padding: 0px; */

  width: 90%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 30px;
  padding-top: 100px;
  margin: 0 auto;
`;

const SectionText = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  height: 75%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 50px;
  color: black;
  opacity: 0.8;
`;
const Solgn = styled.div`
  font-size: 30px;
  color: gray;
  margin-top: 20px;
  line-height: 50px;
  text-align: start;
`;

const SectionImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  img {
    width: 100%;
  }
`;
const Scroller = styled(MoveIn)`
  width: 80%;
  height: 80%;
  border-radius: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 10, 0.3);
`;

const TestItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* flex: 0 0 10%; */
  background: rgb(246, 239, 230);
`;

const Image1 = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 65%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image2 = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 15%;
  left: 12.5%;
  width: 40%;
  height: 45%;
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image3 = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 40%;
  left: 47.5%;
  width: 40%;
  height: 45%;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image4 = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image5 = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  object-fit: cover;
  position: absolute;
  width: 40%;
  height: 45%;
  display: flex;
  align-items: end;
  top: 40%;
  right: 47.5%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image6 = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  top: 15%;
  right: 12.5%;
  width: 40%;
  height: 45%;
  display: flex;
  justify-content: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// return (
//   <div >
//     <div ref={scrollARef} onScroll={handleScroll}>
//       Scroll A
//     </div>
//     <div ref={scrollBRef} onScroll={handleScroll}>
//       Scroll B
//     </div>
//   </div>
// );
// }

function HomePage() {
  //滾動監聽事件
  // const scrollARef = useRef(null);
  // const scrollBRef = useRef(null);

  // const handleScroll = (event) => {
  //   if (event.target === scrollARef.current) {
  //     console.log("Scroll A is scrolling");
  //   } else if (event.target === scrollBRef.current) {
  //     console.log("Scroll B is scrolling");
  //   } else if (
  //     event.target === document.body ||
  //     event.target === document.documentElement
  //   ) {
  //     console.log("Screen is scrolling");
  //   }
  // };

  // ref={scrollARef} onScroll={handleScroll}
  return (
    <>
      <NavbarLayout />
      <SectionContainer>
        <SectionBoxes>
          <SectionText>
            <Title>Your Digital Photo Album</Title>
            <Solgn>
            Upload and organize your photos with simple drag-and-drop.
            </Solgn>
          </SectionText>
          <SectionImg>
            <img src={DomoOne} alt="" />
          </SectionImg>
        </SectionBoxes>
      </SectionContainer>
      <SectionContainer>
        <SectionBoxes>
          <SectionImg>
            <img src={DomoTwo} alt="" />
          </SectionImg>
          <SectionText>
            <Title>Keep and Share Your Moment</Title>
            <Solgn>
            Now, your album comes with its own story.
            </Solgn>
          </SectionText>
        </SectionBoxes>
      </SectionContainer>
      <SectionContainer>
        <SectionBoxes>
          <SectionText>
            <Title>Manage Your Albums in One Place</Title>
            <Solgn>
            Never be overwhelmed by the excessive functionality. Keep your albums tidy in one place.
            </Solgn>
          </SectionText>
          <SectionImg>
            <Scroller>
              <TestItem>
                <Image1>
                  <img src={image1}></img>
                </Image1>
              </TestItem>
              <TestItem>
                <Image2>
                  <img src={image2}></img>
                </Image2>
                <Image3>
                  {" "}
                  <img src={image3}></img>
                </Image3>
              </TestItem>
              <TestItem>
                <Image4>
                  {" "}
                  <img src={image4}></img>
                </Image4>
              </TestItem>
              <TestItem>
                <Image1>
                  {" "}
                  <img src={image5}></img>
                </Image1>
              </TestItem>
              <TestItem>
                <Image5>
                  <img src={image6}></img>
                </Image5>
                <Image6>
                  <img src={image7}></img>
                </Image6>
              </TestItem>
            </Scroller>
          </SectionImg>
        </SectionBoxes>
      </SectionContainer>
      <FooterLayout />
    </>
  );
}

export default HomePage;
