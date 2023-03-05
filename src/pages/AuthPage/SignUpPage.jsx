import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signup, login, logout } from "../../components/firebase";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

// import BackGroundSetup from "../components/BackGroundSetup";
// import loginImg from "../../assets/cryPeople.JPG";
// import changeImg from "../../assets/musicPeople.JPG";
import signupImg from "../../assets/signupImg.svg";

import { AuthErrorCodes } from "firebase/auth";
import { AuthContext } from "./UserAuthProvider";
import Button from "../../components/Button";

const SignupDialogCenter = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 600px;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 70px;
  background: white;
  /* background: rgb(245, 239, 230); */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 30px 60px rgba(0, 0, 10, 0.3);
`;

const SignupDialogBoxes = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SignupDialogBgimg = styled.div`
  width: 45%;
  padding: 20px;
  position: relative;
  img {
    width: 90%;
    /* border-radius: 15px; */
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
`;

const SignupDialogLogin = styled.div`
  width: 45%;
`;

const SignupDialogTitle = styled.div`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 1.5px;
`;

const Fields = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 50px auto; */
  input {
    border-bottom: 2px solid gray;
    width: 100%;
    font-size: 20px;
    padding: 10px;
    margin: 10px 0;
    color:gray;
    caret-color: auto; /* 預設 */
    caret-color: transparent; /* 透明 */
    caret-color: gray; /* 指定色 */
    outline: none; /* 外框效果 */
    /* border-radius: 10px; */
    letter-spacing: 1.5px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SignupDialogForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    color: gray;
    margin: 20px;
  }
  p {
    margin: 15px;
    letter-spacing: 1.5px;
  }
  input {
    /* width: 100px; */
  }
  /* button {
    width: 120px;
    height: 40px;
    margin: 20px;
    border-radius: 8px;  
  } */
`;

const SignupButton = styled(Button)`
  width: 100px;
  height: 40px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2px solid gray;
  color: gray;
  margin: 15px 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 40px;
  padding: auto 15px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    background: gray;
    color: white;
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

const SignUpLink = styled(Link)`
  line-height: 5px;
  color: gray;
`;

const ErrorRemind = styled.p`
  color: #de6666;
`;

// const Circle = styled.div`
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   background: rgb(239, 236, 230);
//   opacity:0.2;
//   position:absolute;
//   top:50%;
//   left:70%;
//   z-index:999;
//   overflow: hidden;

// `;

// const Circle2 = styled.div`
//   width: 500px;
//   height: 500px;
//   border-radius: 50%;
//   background: rgb(239, 236, 230);
//   opacity:0.4;
//   position:absolute;
//   top:26%;
//   left:11%;
//   z-index:999;

// `;

function SignUpPage() {
  const { SignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  // console.log(user.email);

  // 有bug
  // useEffect(() => {
  //   console.log("i am in");
  //   if (error) {
  //     setinterval(() => {
  //       setBackError("");
  //     }, 5000);
  //     setBackError(error);
  //   }
  // }, [error, currentuser]);

  const UserHandler = (e) => {
    const { name, value } = e.target;
    console.log(name + "::::" + value);
    setUser((perState) => ({ ...perState, [name]: value }));
  };

  // confirmpassword,
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password, username } = user;
    if (password == "" || email == "" || username == "") {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("please fill all the field");
    } else if (password.length < 6) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("password must be greater then 6 length");
    } else {
      try {
        await SignUp(email, password, username);
        // alert("WelCome New User Create successfully");
        navigate("/home/login");
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("email already in use try another email");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Password Must be 6 charecter");
        } else {
          setError(err.message);
        }
      }
    }
  };

  return (
    <div>
      <NavbarLayout />
      <BackgroundLayout>
        {/* <Circle></Circle>
        <Circle2></Circle2>
        <Circle></Circle> */}
        <SignupDialogCenter>
          <SignupDialogBoxes>
            <SignupDialogBgimg>
              <img src={signupImg} alt="" />
            </SignupDialogBgimg>
            <SignupDialogLogin>
              <Fields>
                <SignupDialogForm onSubmit={SubmitHandler} className="form">
                  <h2>Register</h2>
                  <div className="inputfield">
                    <input
                      type="text"
                      placeholder="UserName"
                      value={user.username}
                      name="username"
                      onChange={UserHandler}
                    />
                  </div>
                  <div className="inputfield">
                    <input
                      type="text"
                      placeholder="Email"
                      value={user.email}
                      name="email"
                      onChange={UserHandler}
                    />
                  </div>

                  <div className="inputfield">
                    <input
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      name="password"
                      onChange={UserHandler}
                    />
                  </div>
                  {/* <div className="inputfield">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    value={user.confirmpassword}
                    name="confirmPassword"
                    onChange={UserHandler}
                  />
                  </div> */}
                  <div className="inputfield">
                    <SignupButton type="submit">Sign up</SignupButton>
                  </div>
                  <p className="forget">
                    Already Have an account?{" "}
                    <SignUpLink to={"/home/login"} className="link">
                      {"Sign in"}
                    </SignUpLink>
                  </p>
                  {err && <ErrorRemind>{err}</ErrorRemind>}
                </SignupDialogForm>
              </Fields>
            </SignupDialogLogin>
          </SignupDialogBoxes>
        </SignupDialogCenter>
      </BackgroundLayout>
      <FooterLayout />
    </div>
  );
}

export default SignUpPage;
