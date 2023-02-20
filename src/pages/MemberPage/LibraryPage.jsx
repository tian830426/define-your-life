import React, { useState } from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import StepByStep from "../AlbumEditPage/StepByStep/StepByStep";
import StepMenu from "../AlbumEditPage/StepByStep/StepMenu";

import mountImg from "../../assets/mount.jpeg";
import AlbumForm from "./testAlbumForm";
import AlbumItem from "./testAlbumItem";

// 上傳相簿後從這裡讀取 讀取 firebase 圖片 相簿資訊 note文字內容
// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   grid-gap: 20px;
//   margin: 20px;
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Artist = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666;
`;

const albums = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    image:
    mountImg,
  },
  {
    id: 2,
    title: "Thriller",
    artist: "Michael Jackson",
    image:
    mountImg,
  },
  {
    id: 3,
    title: "Abbey Road",
    artist: "The Beatles",
    image:
    mountImg,
  },
  {
    id: 4,
    title: "Abbey Road",
    artist: "The Beatles",
    image:
    mountImg,
  },
];

function LibraryPage() {
  // const [albums, setAlbums] = useState([]);

  // const handleCreateAlbum = (album) => {
  //   setAlbums([...albums, album]);
  // };
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        {/* <AlbumForm onSubmit={handleCreateAlbum} /> */}
        {/* <Container>
          {albums.map((album) => (
            <AlbumItem key={album.albumName} {...album} />
          ))}
        </Container> */}
        <Grid>
          {albums.map((album) => (
            <Card key={album.id}>
              <Image src={album.image} alt={album.title} />
              <Info>
                <Title>{album.title}</Title>
                <Artist>{album.artist}</Artist>
              </Info>
            </Card>
          ))}
        </Grid>
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default LibraryPage;
