import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  border: 1px solid gray;
  padding: 10px;
`;

const AlbumItem = ({ albumName, albumDate, albumDescription }) => {
  return (
    <Item>
      <h2>{albumName}</h2>
      <p>{albumDate}</p>
      <p>{albumDescription}</p>
    </Item>
  );
};

export default AlbumItem;