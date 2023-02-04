import React from "react";
import styled from "styled-components";

const EditWord = () => {
 
    const [image, setImage] = useState(null);

    const handleChange = e => {
      const reader = new FileReader();
      reader.onload = e => setImage(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    };
  
    const handleDrop = e => {
      e.preventDefault();
      setImage(e.dataTransfer.getData('url'));
    };
  
    return (
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        style={{ height: 300, width: 300, border: '1px solid black' }}
      >
        <input type="file" onChange={handleChange} />
        {image && <img src={image} alt="" style={{ height: '100%' }} />}
      </div>
    );
};

export default EditWord;
