import React from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import StepByStep from "../AlbumEditPage/StepByStep/StepByStep";
import StepMenu from "../AlbumEditPage/StepByStep/StepMenu";

function LibraryPage() {
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout></BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default LibraryPage;
