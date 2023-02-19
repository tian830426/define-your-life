import React from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import StepByStep from "../AlbumEditPage/StepByStep/StepByStep";
import StepMenu from "../AlbumEditPage/StepByStep/StepMenu";

// 上傳相簿後從這裡讀取 讀取 firebase 圖片 相簿資訊 note文字內容

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const Label = styled.
`;

const 
`;

label
`;

const `
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.
 
button
 

`;

const 
`;


 

 

 

 

`;

const AlbumEditPage = () => {
  const 
`;

const AlbumEditPage

`;

const AlbumEdit

`;


    title: 
    artist: 
    artist:

    genre: 
    genre:

    year: 
    year

    

  });

  const handleInputChange = e => {
    const { name, value } = e
  });

  const handleInputChange = e => {
    const { name

  });

  const handleInputChange = e => {
    const {

    setAlbumData(prevData => ({
      ..
    setAlbumData(prevData => ({
     

    }));
  };

  const handleSubmit = e => {
    e
    }));
  };

  const handleSubmit = e

    }));
  };

  const handleSubmit =

    console
  };

  return (
    <
 

      <
     

        Title
        <
        Title

          type="text"
          name="title"
          value={albumData
          type="text"
          name="title"
          value={albumData

          type="text"
          name="title"
         

          onChange={handleInputChange}
        />
      </
          onChange={handleInputChange}
        />
      </

          onChange={handleInputChange}
        />
     

      <
        Artist
        <
        Artist
       

        Artist

          type="text"
          name="artist"
          value={albumData
          type="text"
          name="artist"
         

          type="text"
          name="artist"

          onChange={handleInputChange}
        />
      </
         

      <
        Genre
        <
        Genre
       

        Genre

          type="text"
          name="genre"
          value={albumData
          type="text"
          name="genre"
         

          type="text"
          name="genre"

          onChange={handleInputChange}
        />
      </
         

      <
        Year
        <
        Year

        

          type="text"
          name="year"
          value={albumData
          type="text"
          name="year"
          value={albumData.

          type="text"
          name="year"
          value

          type="text"
          name="year

          type="text"
          name="

          onChange={handleInputChange}
        />
      </
          onChange={handleInputChange}
        />

          onChange={handleInputChange}
       

      <`
  padding: 10px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

function LibraryPage() {
  const [albumData, setAlbumData] = useState({
    title: "",
    artist: "",
    genre: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlbumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(albumData); // Replace with your submit logic
  };
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        <Form onSubmit={handleSubmit}>
          <Label>
            Title
            <Input
              type="text"
              name="title"
              value={albumData.title}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Artist
            <Input
              type="text"
              name="artist"
              value={albumData.artist}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Genre
            <Input
              type="text"
              name="genre"
              value={albumData.genre}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Year
            <Input
              type="text"
              name="year"
              value={albumData.year}
              onChange={handleInputChange}
            />
          </Label>
          <Button type="submit">Save Changes</Button>
        </Form>
        );
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default LibraryPage;
