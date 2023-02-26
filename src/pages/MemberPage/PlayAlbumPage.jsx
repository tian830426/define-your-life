import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthPage/UserAuthProvider";
import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../components/firebase";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import animationBgimg from "../../assets/toy.jpg";
import MoveInWidthwise from "../../pages/HomePage/MoveInWidthwise";

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

const TestList = styled.div`
  display: flex;
`;

const TestItem = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  flex: 0 0 10%;
  background: rgb(221, 214, 201);
`;

const Image1 = styled.div`
  width: 70vw;
  height: 70vh;
  background: #ccacac;
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
  background: #774b4b;

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
  background: #633333;

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

// const Image4 = styled.div`
//   width: 70vw;
//   height: 100vh;
//   background: #357878;

//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   object-fit: cover;
//   position: absolute;
//   top: 50%;
//   left: 30%;
//   transform: translate(0, -50%);
// `;

// const Image5 = styled.div`
//   width: 800px;
//   height: 500px;
//   background: #647a7c;
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   object-fit: cover;
//   position: absolute;
//   top: 35%;
//   left: 25%;
//   /* transform: translate(-50%, -50%); */
// `;

// const Image6 = styled.div`
//   width: 650px;
//   height: 400px;
//   background: #867f33;

//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   object-fit: cover;
//   position: absolute;
//   top: 20%;
//   left: 60%;
//   /* transform: translate(-50%, -50%); */
// `;

// const Image = styled.img`
//     ${({ style }) => style};
//   `;

function PlayAlbumPage(props) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const currentUrl = window.location.href;
  const userID = currentUrl.match(/([^/]+)$/)[1];
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  // const [userID, setUserID] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(
    () => {
      const q = query(collection(db, "albums"));
      console.log(q);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let albumsArr = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id);
          if (doc.id == userID) {
            albumsArr.push({ ...doc.data(), id: doc.id });
          }
        });
        console.log(albumsArr);
        const UrlArrayLen = albumsArr[0].UrlArray;
        console.log(UrlArrayLen);
        console.log(albumsArr);
        setAlbums(albumsArr);
      });

      return () => unsubscribe();
    },
    // }
    [currentUser]
  );

  // const styles = [
  //   { width: "500px", height: "500px", borderRadius: "50%" },
  //   { width: "400px", height: "600px", transform: "rotate(45deg)" },
  //   { width: "600px", height: "400px", border: "5px solid red" },
  //   {
  //     width: "700px",
  //     height: "300px",
  //     boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.5)",
  //   },
  //   {
  //     width: "300px",
  //     height: "700px",
  //     background: "linear-gradient(to right, red, yellow)",
  //   },
  // ];
  // return styles[Math.floor(Math.random() * styles.length)];

  // const RandomImage = ({ url }) => {
  //   const style = getRandomStyle();
  //   return <Image src={url} style={style} />;
  // };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

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
              <>
                <TestComponent>
                  {albums.map((album) => (
                    <TestList key={album.id}>
                      {album.UrlArray.map((url) => (
                        // <RandomImage key={url} url={url} />
                        <TestItem>
                          <img
                            key={url}
                            src={url}
                            style={{ width: "50%", height: "50%" }}
                          />
                        </TestItem>
                      ))}
                    </TestList>
                  ))}
                </TestComponent>
              </>

              /* <TestItem>
                  <Image6>123</Image6>
                </TestItem>
                <TestItem>
                  <Image5>123</Image5>
                </TestItem>
                <TestItem>
                  <Image4>123</Image4>
                </TestItem>
                <TestItem>
                  <Image3>123</Image3>
                </TestItem>
                <TestItem>
                  <Image2>123</Image2>
                </TestItem> */
              // </TestComponent>

              // {albums.map((album) => (
              //   <TestComponent key={album.id}>
              //     {album.UrlArray.map((url) => (
              //       <TestItem key={url}>
              //       <Image3> <img src={url} style={{ width: 300, height: 300 }} /></Image3>

              //       </TestItem>
              //     ))}
              //   </TestComponent>
              // ))}

              // <TestComponent>
              //   <TestItem></TestItem>
              // </TestComponent>
            }
          />
          <PageContainer>
            <Heading>↑↑↑</Heading>
          </PageContainer>
        </AlbumContainer>
        <>
          {/* {albums.map((album) => (
            <TestComponent key={album.id}>
              {album.UrlArray.map((url) => (
                <TestItem key={url}>
                  <img src={url} style={{ width: 300, height: 300 }} />
                </TestItem>
              ))}
            </TestComponent>
          ))} */}
        </>
        <BackToPrevious onClick={() => navigate(-1)}>回上一頁</BackToPrevious>
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default PlayAlbumPage;
