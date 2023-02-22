import React from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import ProfilePage from "./PlayAlbumPage";
import Notification from "../../../basic prectice/Notification";
import Popup from "../../../basic prectice/Popup";
function goToNextPage() {
  window.location.href = "/member/profile";
}

function MemberPage() {
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout></BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default MemberPage;
