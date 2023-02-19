import React, { useEffect, useState, useRef,useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import { signup, login, logout } from "../../components/firebase";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
// import BackGroundSetup from "../components/BackGroundSetup";
import loginImg from "../../assets/cryPeople.JPG";
import changeImg from "../../assets/musicPeople.JPG";

import { AuthErrorCodes } from "firebase/auth";
import { AuthContext } from "./UserAuthProvider";

const SignupDialogCenter = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  //  background-image: linear-gradient(-225deg,#95a7b5 0%, #2580B3 100%);;
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
`;

const SignupDialogLogin = styled.div`
  width: 45%;
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
  // , error, currentuser
  // const { SignUp } = AuthContext();
  const {SignUp} = useContext(AuthContext)
  const navigate = useNavigate();
  const [err, setError] = useState("");
  // const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(user.email);

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
      // } else if (password !== confirmpassword) {
      //   setInterval(() => {
      //     setError("");
      //   }, 5000);
      //   return setError("password does not match");
      // } else if (password.length >= 6 || !confirmpassword.length >= 6) {
      //   setInterval(() => {
      //     setError("");
      //   }, 5000);
      //   return setError("password must be greater then 6 length");
    } else {
      try {
        await SignUp(email, password, username);
        alert("WelCome New User Create successfully");
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

      // {
      //   currentuser &&
      //     setUser({
      //       username: "",
      //       email: "",
      //       password: "",
      //     });
      // }
    }
  };

  // const [loading, setLoading] = useState(false);
  // const currentUser = UseAuth();

  // const emailRef = useRef();
  // const passwordRef = useRef();

  // async function handleSignup() {
  //   setLoading(true);
  //   // try {
  //   await signup(emailRef.current.value, passwordRef.current.value);
  //   // } catch {
  //   // alert("Error!");
  //   // }
  //   setLoading(false);
  // }

  // async function handleLogin() {
  //   setLoading(true);
  //   try {
  //     await login(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }

  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }

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
              Welcome to Album Editor
              <br />
              {/* Currently logged in as: {currentUser?.email}{" "} */}
            </SignupDialogTitle>
            <Fields>
              {err && <p className="error">{err}</p>}
              {/* {err
                ? err && <p className="error">{err}</p>
                : backError && <p className="error">{backError}</p>} */}
              <form onSubmit={SubmitHandler} className="form">
                <h2>Registration Form</h2>
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
                <div className="inputfield">
                  {/* <input
                    type="password"
                    placeholder="Confirm Password"
                    value={user.confirmpassword}
                    name="confirmPassword"
                    onChange={UserHandler}
                  /> */}
                </div>
                <div className="inputfield">
                  <input type="submit" />
                </div>
                <p className="forget">
                  Already Have an account?{" "}
                  <Link to={"/home/login"} className="link">
                    {"login"}
                  </Link>
                </p>
              </form>
            </Fields>
            {/* <SignupBtn>
              <button disabled={loading || currentUser} onClick={handleSignup}>
                Sign Up
              </button>
              <button disabled={loading || currentUser} onClick={handleLogin}>
                Log In
              </button>
              <button disabled={loading || !currentUser} onClick={handleLogout}>
                Log Out
              </button>
            </SignupBtn> */}
          </SignupDialogLogin>
        </SignupDialogBoxes>
      </SignupDialogCenter>
      {/* <div className="box">
        {err
          ? err && <p className="error">{err}</p>
          : backError && <p className="error">{backError}</p>}

        <form onSubmit={SubmitHandler} className="form">
          <h2>Registration Form</h2>
          <div className="inputfield">
            <input
              type="text"
              placeholder="UserName"
              value={user.FullName}
              name="FullName"
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
          <div className="inputfield">
            <input
              type="password"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={UserHandler}
            />
          </div>
          <div className="inputfield">
            <input type="submit" />
          </div>
          <p className="forget">
            Don't have an account? <a href="">Sign up </a>
          </p>
        </form>
      </div> */}
      {/* <SignupDialogCenter>
        <SignupDialogBoxes>
          <SignupDialogBgimg>
            <img className="loginImg" src={loginImg} alt="loginImg" />
            <img className="changeImg" src={changeImg} alt="changeImg" />
          </SignupDialogBgimg>
          <SignupDialogLogin>
            <SignupDialogTitle>
              Welcome to Album Editor
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
      </SignupDialogCenter> */}
      <FooterLayout />
    </div>
  );
}

export default SignUpPage;

//   <Link to="/signinPage">Signin</Link>
