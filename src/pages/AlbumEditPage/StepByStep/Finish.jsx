import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "./StepByStep";

const EditWord = () => {
  const { prev, next, selectedImages, setSelectedImages } =
    useContext(StepContext);

  return <div></div>;
};

export default EditWord;
