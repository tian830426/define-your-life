import React from "react";
import styled from "styled-components";
import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "../components/firebase";
import NavbarLayout from "../components/NavbarLayout";
import FooterLayout from "../components/FooterLayout";
// import BackGroundSetup from "../components/BackGroundSetup";
// image
import loginImg from "../assets/cryPeople.JPG";
import changeImg from "../assets/musicPeople.JPG";

const SignupDialogCenter = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  //   background-image: linear-gradient(-225deg,#95a7b5 0%, #2580B3 100%);;
  // background-color: #95a7b5;
  background: rgb(222, 208, 173);
  position: relative;
  //   padding: 200px 0;
  //   background-color: rgb(220, 220, 166);
`;
const SignupDialogBoxes = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(248, 248, 232);
  padding: 70px 10px;
  width: 70%;
  // height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  // margin: auto;
  border-radius: 20px;
  position: relative;
  box-shadow: rgb(109, 109, 168) 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, rgb(63, 112, 62) 10px -10px,
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(212, 194, 105) 20px -20px,
    rgb(255, 255, 255) 30px -30px 0px -3px, rgb(207, 147, 105) 30px -30px,
    rgb(255, 255, 255) 40px -40px 0px -3px, rgb(191, 109, 109) 40px -40px;
  // box-shadow: 0 0 30px rgb(119, 119, 119);
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  // box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(232, 231, 231, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const SignupDialogBgimg = styled.div`
  width: 45%;
  padding: 20px;
  position: relative;
        img {
        width: 85%;
        border-radius: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transition: opacity 2s ease-in-out;
        -moz-transition: opacity 2s ease-in-out;
        -o-transition: opacity 2s ease-in-out;
        transition: opacity 2s ease-in-out;
      }
      img:nth-of-type(2):hover {
        opacity: 0;
      }
    }
`;

const SignupDialogLogin = styled.div`
  width: 45%;
  // padding: 20px;
`;

const SignupDialogTitle = styled.div`
  font-size: 24px;
  line-height: 35px;
  // font-weight: 600;
  // padding: 90px 0 0 0px;
  letter-spacing: 1.5px;
`;

const Fields = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: 50px auto;
  input {
    width: 100%;
    font-size: 20px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    letter-spacing: 1.5px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SignupBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  button {
    padding: 10px;
    text-align: center;
    margin-right: 10px;
    border-radius: 10px;
    letter-spacing: 1.5px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
    await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
    // alert("Error!");
    // }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div>
      <NavbarLayout />
      <SignupDialogCenter>
        <SignupDialogBoxes>
          <SignupDialogBgimg>
            <img className="loginImg" src={loginImg} alt="loginImg" />
            <img className="changeImg" src={changeImg} alt="changeImg" />
          </SignupDialogBgimg>
          <SignupDialogLogin>
            <SignupDialogTitle>
              welcome to Album Editor
              <br />
              Currently logged in as: {currentUser?.email}{" "}
            </SignupDialogTitle>
            <Fields>
              <input ref={emailRef} placeholder="Email" />
              <input ref={passwordRef} type="password" placeholder="Password" />
            </Fields>
            <SignupBtn>
              <button disabled={loading || currentUser} onClick={handleSignup}>
                Sign Up
              </button>
              <button disabled={loading || currentUser} onClick={handleLogin}>
                Log In
              </button>
              <button disabled={loading || !currentUser} onClick={handleLogout}>
                Log Out
              </button>
            </SignupBtn>
          </SignupDialogLogin>
        </SignupDialogBoxes>
      </SignupDialogCenter>
      <FooterLayout />
    </div>
  );
}

export default SignUpPage;

//   <Link to="/signinPage">Signin</Link>
