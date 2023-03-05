import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { NavbarTitleH1 } from "../../components/NavbarTitleStyle";
import { TiDeleteOutline } from "react-icons/ti";
import { AuthContext } from "../../pages/AuthPage/UserAuthProvider";

const Navbar = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  z-index: 999;
  background: rgb(239, 236, 230);
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;

  @media (max-width: 1550px) {
    width: 95%;
    /* padding: 0; */
    justify-content: space-evenly;
  }
`;

const NavbarUsername = styled.div`
  width: calc(100% / 3);
  line-height: 100px;
  display: flex;
  justify-content: start;

  h2 {
    text-align: center;
    font-size: 28px;
    color: gray;
    text-shadow: gray 0.05em 0.05em 0.05em;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    opacity: 0.8;
    &:hover {
      font-size: 30px;
      opacity: 1;
      cursor: pointer;
      color: gray;
    }
  }
`;


const NavbarTitle = styled(Link)`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 100px;
  /* padding: 8px 0px 8px 310px; */
  flex-direction: column;
  text-align: center;
  letter-spacing: 3px;
  color: burlywood;

  &:hover {
    cursor: pointer;
    letter-spacing: 5px;
    color: rgb(255, 212, 112);
    font-size: 105%;
    font-weight: 700;
    padding: 4px 0;
    padding: 5px 0px 5px 320px;
  }
`;

const NavbarItems = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
`;

const NavbarItem = styled(Link)`
  position: relative;
  height: 42px;
  justify-content: center;
  margin: 10px 10px;
  padding: 0 5px;
  color: #e1c9a0;
  font-size: 16px;
  line-height: 42px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: #c6612b;
  border: 2px solid #a23419;
  border-radius: 8px;
  cursor: pointer;
  &:after {
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
  position: relative;
  height: 42px;
  justify-content: center;
  margin: 10px 10px;
  padding: 0 5px;
  color: #e1c9a0;
  font-size: 16px;
  line-height: 42px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: #c6612b;
  border: 2px solid #a23419;
  border-radius: 8px;
  cursor: pointer;
  &:after {
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 2.5px;
  font-weight: 600;
  position: relative;

  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }
`;

const RemindSigninTag = styled.div`
  /* height: 50px; */
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  /* position: absolute;
  top: 140%;
  left: 85%; */
  /* animation 參數設定 */
  animation-name: MoveToRight; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 4s; /*動畫持續時間，單位為秒*/
  animation-delay: 2s; /*動畫延遲開始時間*/
  animation-iteration-count: infinite; /*動畫次數，infinite 為無限次*/

  @keyframes MoveToRight {
    0% {
      left: 80%;
    }
    25% {
      left: 60%;
    }
    50% {
      left: 40%;
    }
    75% {
      left: 20%;
    }
    100% {
      left: 0;
    }
  }
  p {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: gray;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  color: gray;
  font-size: 18px;
  top: -8%;
  left: -8%;
  svg:hover {
    color: white;
    background-color: #a84d4d;
    border-radius: 50%;
  }
`;

const NavbarLayout = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);

  const handleUsername = async () => {
    navigate("/home/albumlibrary");
  };

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

  return (
    <Navbar>
      <NavContainer>
        <NavbarUsername>
          <h2
            onClick={() => {
              handleUsername();
            }}
          >
            {currentUser == undefined
              ? ""
              : " Hello , " + currentUser.displayName + " . "}
          </h2>
        </NavbarUsername>
        <NavbarTitle to="/home">
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
            <NavbarItem to="/home/albumlibrary">
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
                <div onClick={() => handleTosignin()}>Album Edit</div>
              ) : (
                <div onClick={() => handleAlbumEdit()}>Album Edit</div>
              )}
            </NavbarIcon>
          </NavbarItemButton>

          <NavbarItemButton>
            <NavbarIcon>
              {currentUser == undefined ? (
                <div onClick={() => handleSignup()}>Sign up</div>
              ) : (
                <div onClick={() => handleLogout()}>Sign out</div>
              )}
            </NavbarIcon>
          </NavbarItemButton>
          <RemindSigninTag style={{ display: display ? "none" : "block" }}>
            <p>Please register or login.</p>{" "}
            <DeleteIcon>
              <TiDeleteOutline />
            </DeleteIcon>
          </RemindSigninTag>
          {/* <NavbarItem to="/home/edit">
          <NavbarIcon>Album Edit</NavbarIcon>
        </NavbarItem> */}
        </NavbarItems>
      </NavContainer>
    </Navbar>
  );
};

export default NavbarLayout;
