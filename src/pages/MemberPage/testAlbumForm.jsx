import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
`;

const AlbumForm = ({ onSubmit }) => {
  const [albumName, setAlbumName] = useState("");
  const [albumDate, setAlbumDate] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ albumName, albumDate, albumDescription });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Album Name:</Label>
      <Input
        type="text"
        value={albumName}
        onChange={(event) => setAlbumName(event.target.value)}
      />
      <Label>Album Date:</Label>
      <Input
        type="date"
        value={albumDate}
        onChange={(event) => setAlbumDate(event.target.value)}
      />
      <Label>Album Description:</Label>
      <TextArea
        value={albumDescription}
        onChange={(event) => setAlbumDescription(event.target.value)}
      />
      <button type="submit">Create Album</button>
    </Form>
  );
};

export default AlbumForm;
