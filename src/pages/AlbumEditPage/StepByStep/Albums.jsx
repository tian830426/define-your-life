import React from "react";
import styled from "styled-components";
// { useContext }
// import { AlbumName, AlbumDate, AlbumDescription } from "../components/StepByStep/StepMenu";

const AlbumBg = styled.li`
  width: 300px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  color: rgb(61, 86, 133);
  outline: 5px dashed rgb(119, 150, 202);
  border-radius: 20px;
  line-hight: 6px;
  padding: 20px;
  margin: 10px 0;

  P {
    padding: 5px;
    span {
      padding: 5px 10px;
    }
  }

  button {
    width: 120px;
    height: 30px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    outline: 1.5px solid rgb(42, 58, 88);
    color: rgb(42, 58, 88);
    margin: 15px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 30px;
    padding: auto 15px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      background: rgb(42, 58, 88);
      color: white;
    }
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

  return (
    <AlbumBg>
      <p>
        Editor:<span>{album.Editor}</span>
      </p>
      <p>
        Album name:<span>{album.Name}</span>
      </p>
      <p>
        Date:<span>{album.Date}</span>
      </p>
      <p>
        Description:<span>{album.Description}</span>
      </p>
      <button onClick={() => deleteAlbum(album.id)}>Delete Album</button>
    </AlbumBg>
  );
};

export default Albums;
