import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { NavbarTitleH1 } from "../../components/NavbarTitleStyle";

import { AuthContext } from "../../pages/AuthPage/UserAuthProvider";
import { async } from "@firebase/util";

const Navbar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 999;
  background-color: rgb(248, 248, 232);
`;

const NavbarTitle = styled(Link)`
  width: 75%;
  /* max-width: 1200px;  */
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

const NavbarItems = styled.div`
  /* width: 25%; */
  margin: 0 10px;
  margin-left: 50px;
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
  font-size: 18px;
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
`;

const NavbarItemButton = styled.button`
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
  font-size: 18px;
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
  /* &:hover {
    outline: 0;

    li {
      display: block;
    }
  } */
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
  &:hover {
    outline: 0;
    display: block;
  }
`;

const NavbarUsername = styled.div`
  line-height: 70px;
  margin-left: 20px;
  h3 {
    color: gray;
  }
`;

const RemindSigninTag = styled.div`
  width: 180px;
  height: 65px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  position: absolute;
  top: 150%;
  left: 60%;
  p {
    text-align: center;
    line-height: 65px;
    font-size: 18px;
  }
  /* display: none; */
`;
const NavbarLayout = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);

  const handleSignup = async () => {
    navigate("/home/signup");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/home");
  };

  const handleTosignin = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  const handleAlbumEdit = () => {
    navigate("/home/edit");
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/home");
  //     } else {
  //       console.log("no user availble");
  //     }
  //   });
  // }, []);

  return (
    <Navbar>
      <NavbarUsername>
        <h3>
          {currentUser == undefined
            ? ""
            : " welcome , " + currentUser.displayName}
        </h3>
      </NavbarUsername>
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
        {currentUser == undefined ? (
          ""
        ) : (
          <NavbarItem to="/home/library">
            <NavbarIcon>Album Library</NavbarIcon>

            {/* <NavbarUl>
              <NavbarIcon></NavbarIcon>
              <NavbarLi>
                <Link to="/home/member/profile">Profile</Link>
              </NavbarLi>
              <NavbarLi>
                {" "}
                <Link to="/home/library">Album Library</Link>
              </NavbarLi>
            </NavbarUl> */}
          </NavbarItem>
        )}

        <NavbarItemButton>
          <NavbarIcon>
            {currentUser == undefined ? (
              <div onClick={() => handleSignup()}>Sign up</div>
            ) : (
              <div onClick={() => handleLogout()}>Sign out</div>
            )}
          </NavbarIcon>
        </NavbarItemButton>

        <NavbarItemButton>
          <NavbarIcon>
            {currentUser == undefined ? (
              <div onClick={() => handleTosignin()}>Album Edit</div>
            ) : (
              <div onClick={() => handleAlbumEdit()}>Album Edit</div>
            )}
          </NavbarIcon>
        </NavbarItemButton>
        <RemindSigninTag style={{ display: display ? "none" : "block" }}>
          <p>請先註冊或登入</p>{" "}
        </RemindSigninTag>
        {/* <NavbarItem to="/home/edit">
          <NavbarIcon>Album Edit</NavbarIcon>
        </NavbarItem> */}
      </NavbarItems>
    </Navbar>
  );
};

export default NavbarLayout;
