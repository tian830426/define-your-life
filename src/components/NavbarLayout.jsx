import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

const Navbar = styled.div`
  position: fixed;
  width: 100vw;
  height: 70px;
  z-index: 999;
  //   background-color:#EFD9A7 ;
  background-color: rgb(248, 248, 232);
  display: flex;
`;
const NavbarTitle = styled(Link)`
  width: 100%;
  // max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 310px;
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
const NavbarTitleH1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-family: "Signika", sans-serif;
  // font: bold 2vw/1.6 ;
  user-select: none;
  letter-spacing: 10px;
  span {
           display: inline-block;
        }

    span:nth-child(4n) {
    color: hsl(50, 75%, 55%);
    text-shadow: 1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%),
      3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%);
  }
  span:nth-child(4n-1) {
    color: hsl(135, 35%, 55%);
    text-shadow: 1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%),
      3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%);
  }
  span:nth-child(4n-2) {
    color: hsl(155, 35%, 60%);
    text-shadow: 1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%),
      3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%);
  }
  span:nth-child(4n-3) {
    color: hsl(30, 65%, 60%);
    text-shadow: 1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%),
      3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%);
  }
}
`;
const NavbarItems = styled.div`
  width: 20%;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  line-height: 70px;
  letter-spacing: 2px;
`;
const NavbarItem = styled(Link)`
  width: 160px;
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
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
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
  }
  &:hover:after {
    transform: translate(0, 0);
    // opacity: 0.8;
  }
  &:active {
    background-color: #8b7759;
    color: rgb(193, 193, 186);
    outline: 0;
  }
  &:hover {
    outline: 0;
  }
`;
const NavbarIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding-right:5px;
  // font-size: 18px;
  letter-spacing: 2.5px;
  font-weight: 600;
  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }
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
        <NavbarItem to="/home/signup">
          <NavbarIcon>
            <BsFillPeopleFill />
            Sign Up{" "}
          </NavbarIcon>
        </NavbarItem>
        <NavbarItem to="/home/edit">
          <NavbarIcon>
            {" "}
            <BiPhotoAlbum /> Album{" "}
          </NavbarIcon>
        </NavbarItem>
      </NavbarItems>
    </Navbar>
  );
};

export default NavbarLayout;
