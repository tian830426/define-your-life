import React from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

function ProfilePage(props) {
  //   const comment = props.comment;
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout></BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default ProfilePage;

{
  /* <div>
<div>{comment.creator}</div>
<div>{comment.comment}</div>
<div>{comment.likedCount}</div>
</div> */
}
