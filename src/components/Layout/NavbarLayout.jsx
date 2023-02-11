import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { BiPhotoAlbum } from "react-icons/bi";
// import { BsFillPeopleFill } from "react-icons/bs";
import { NavbarTitleH1 } from "../../components/NavbarTitleStyle";

const Navbar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 999;
  background-color: rgb(248, 248, 232);
`;

const NavbarTitle = styled(Link)`
  /* width: 75%; */
  /* max-width: 1200px; */
  display: flex;
  align-items: center;
  /* padding: 8px 0px 8px 310px; */
  flex-direction: column;
  text-align: center;
  letter-spacing: 4px;
  // color: #FCD997;
  // color: linear-gradient(-225deg,#EE592E 0%, #DE7E44 100%);
  color: burlywood;

  &:hover {
    cursor: pointer;
    letter-spacing: 5px;
    color: rgb(255, 212, 112);
    // color: #FAA45B;
    opacity: 0.8;
    font-size: 105%;
    font-weight: 700;
    padding: 4px 0;
    padding: 5px 0px 5px 320px;
  }
`;

const NavbarItems = styled.div`
  /* width: 25%; */
  margin: 0 10px;
  display: flex;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translate(-50%, -50%);
  line-height: 70px;
  letter-spacing: 2px;
`;
const NavbarItem = styled(Link)`
  /* width: 185px; */
  margin: auto 12px;
  // background-color: #fee6e3;
  // background-color: rgb(163, 145, 123);
  background-color: #c6612b;
  border: 2px solid #a23419;
  // border: 2px solid rgb(133, 121, 121);
  border-radius: 8px;
  // color: #111;
  // color: burlywood;
  color: #e1c9a0;
  // color:#D9CFC5;
  cursor: pointer;
  display: flex;
  // font-family: Inter,sans-serif;
  // font-size: 16px;
  height: 42px;
  justify-content: center;
  line-height: 24px;
  /* max-width: 100%; */
  padding: 0 5px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  line-height: 42px;
  &:after {
    // background-color: #A23419;
    background-color: rgb(133, 121, 121);
    border-radius: 8px;
    content: "";
    display: block;
    height: 42px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
    li {
      display: block;
    }
  }
  &:hover:after {
    transform: translate(0, 0);
    // opacity: 0.8;
    li {
      display: block;
    }
  }
  &:active {
    background-color: #8b7759;
    color: rgb(193, 193, 186);
    outline: 0;
    li {
      display: block;
    }
  }
  &:hover {
    outline: 0;
    li {
      display: block;
    }
  }
`;
const NavbarIcon = styled.div`
  // width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding-right:5px;
  // font-size: 18px;
  letter-spacing: 2.5px;
  font-weight: 600;
  position: relative;

  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }
`;

const NavbarUl = styled.ul`
  // display:none;
  height: 30px;
  display: flex;
  // flex-direction: column;
  position: absolute;
  top: 150%;
  left: -25%;
  // background-color: white;
`;

const NavbarLi = styled.li`
  display: none;
  width: 185px;
  color: white;
  line-height: 30px;
  padding: 0 15px;
  margin: 0 auto;
  margin-right: 10px;
  background-color: rgb(198, 161, 80);
  border-radius: 8px;
`;

const NavbarLayout = () => {
  return (
    <Navbar>
      <NavbarTitle to="/">
        <NavbarTitleH1>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span> </span>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          <span>R</span>
          <span> </span>
          <span>L</span>
          <span>I</span>
          <span>F</span>
          <span>E</span>
        </NavbarTitleH1>
      </NavbarTitle>
      <NavbarItems>
        <NavbarItem to="/home/member">
          <NavbarIcon>
            {/* <BsFillPeopleFill /> */}
            Member{" "}
            <NavbarUl>
              <NavbarLi>
                <Link to="/home/member/profile">Profile</Link>
              </NavbarLi>
              <NavbarLi>
                {" "}
                <Link to="/home/library">Album Library</Link>
              </NavbarLi>
            </NavbarUl>
          </NavbarIcon>
        </NavbarItem>
        <NavbarItem to="/home/signup">
          <NavbarIcon>
            {/* <BsFillPeopleFill /> */}
            Sign out{" "}
          </NavbarIcon>
        </NavbarItem>
        <NavbarItem to="/home/edit">
          <NavbarIcon>
            {/* <BiPhotoAlbum /> {" "} */}
            Album Edit
          </NavbarIcon>
        </NavbarItem>
      </NavbarItems>
    </Navbar>
  );
};

export default NavbarLayout;
