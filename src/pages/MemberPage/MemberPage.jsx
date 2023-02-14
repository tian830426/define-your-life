import React from "react";
import styled from "styled-components";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import ProfilePage from "./ProfilePage";
import Notification from "../../../basic prectice/Notification";
import Popup from "../../../basic prectice/Popup";
function goToNextPage() {
  window.location.href = "/member/profile";
}

function MemberPage() {
  // const commentHTML = [(<li>123</li>), (<li>456</li>)];
  // const comments = ["520", "250", "000", "555"];
  // const commentHTML = comments.map((comment) => {
  //   return <li>{comment}</li>;
  // });

  // const commentsData = [
  //   { creator: "helen", comment: "good", likedCount: 10 },
  //   { creator: "Tony", comment: "good", likedCount: 10 },
  //   { creator: "Jason", comment: "good", likedCount: 10 },
  // ];
  // const popupContent = "hello world"

  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        {/* <Popup onClose={goToNextPage}>
          {" "}
          <Notification
            title="Notice"
            message="this is the notice message"
            severity="general"
          />
          <Notification
            title="Notice"
            message="this is the notice message"
            severity="important"
          />
          <Notification
            title="Notice"
            message="this is the notice message"
            severity="urgory"
          />
          hello word
        </Popup> */}
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default MemberPage;
{
  /* <NavbarLayout />
      <BackgroundLayout>
        <ul>{commentHTML}</ul>
      </BackgroundLayout>
      <FooterLayout /> */
}

{
  /* {" "}
      <div>
        {commentsData.map((comment) => {
          return <ProfilePage comment={comment} />;
        })}
      </div> */
}
