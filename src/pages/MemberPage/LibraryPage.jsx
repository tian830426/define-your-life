import React from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import StepByStep from "../AlbumEditPage/StepByStep/StepByStep";
import StepMenu from "../AlbumEditPage/StepByStep/StepMenu";

// 上傳相簿後從這裡讀取 讀取 firebase 圖片 相簿資訊 note文字內容

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
