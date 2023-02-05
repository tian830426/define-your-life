import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { StepContext } from "./StepByStep";

const AlbumList = styled.div`
  max-width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  margin: -50px auto 0 auto;
  justify-content: center;
  align-items: center;
`;
const AlbumTitle = styled.div`
  margin: 50px auto;
  color: gray;
  h2 {
    font-size: 1.9rem;
    color: transparent;
    -webkit-text-stroke: 1.5px gray;
    letter-spacing: 2px;
  }
`;

const AlbumItem = styled.span`
  display: flex;
  flex-direction: flex;
  justify-content: start;
  align-items: center;
  margin: 10px auto;
  color: gray;
  font-size: 18px;
  padding: 0 15px;
`;

const AlbumButtonBorder = styled.div`
  display: flex;
  margin: 20px auto;
`;

const AlbumButton = styled(Button)`
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

const Albums = ({ album, deleteAlbum }) => {
  //取得相簿名稱,日期,描述
  // const name = useContext(AlbumName);
  // const date = useContext(AlbumDate);
  // const description = useContext(AlbumDescription);

  // console.log(name);
  // console.log(date);

  // console.log(album);
  // console.log(album.Name);
  // console.log(album.name);

  const { next } = useContext(StepContext);

  return (
    <AlbumList>
      <AlbumTitle>
        <h2>If there are no issues, let's proceed to the next step.</h2>
      </AlbumTitle>
      <AlbumItem>Editor : {album.Editor}</AlbumItem>
      <AlbumItem>Album name : {album.Name}</AlbumItem>
      <AlbumItem>Date : {album.Date}</AlbumItem>
      <AlbumItem>Description : {album.Description}</AlbumItem>
      <AlbumButtonBorder>
        <AlbumButton onClick={() => deleteAlbum(album.id)}>Prev</AlbumButton>
        <AlbumButton onClick={() => next()}>Next</AlbumButton>
      </AlbumButtonBorder>
    </AlbumList>
  );
};

export default Albums;
