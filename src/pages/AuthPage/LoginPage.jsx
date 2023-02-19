import { AuthContext } from "./UserAuthProvider";
import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import NavbarLayout from "../../components/Layout/NavbarLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import loginImg from "../../assets/cryPeople.JPG";
import changeImg from "../../assets/musicPeople.JPG";

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

const LoginPage = () => {
  // const { UserLogin } = AuthContext();
  const { UserLogin } = useContext(AuthContext);
  const [err, setError] = useState("");
  const [user, setUser] = useState({
    email: "cat123@gmail.com",
    password: "cat123",
  });
  const navigate = useNavigate();

  const UserHandler = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email == "" || password == "") {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Fill All the Field");
    }
    try {
      await UserLogin(email, password);
      console.log(await UserLogin(email, password))
      // await setUser(user);
      navigate("/home");
    } catch (error) {
      if (error.code == "auth/user-not-found") {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("User Not Found");
      } else if (error.code == "auth/wrong-password") {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("Wrong Password");
      } else {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError(`${error.message}`);
      }
    }
  };
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
              <div className="box">
                {err && <p className="error">{err}</p>}

                <form onSubmit={SubmitHandler} className="form">
                  <h2>Login Form</h2>

                  <div className="inputfield">
                    <input
                      type="email"
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
                    <input type="submit" value="login" />
                  </div>
                  <p className="forget">
                    Don't have an account?{" "}
                    <Link to={"/home/signup"} className="link">
                      {"signup"}
                    </Link>
                  </p>
                  {/* <p className="forget">
                    Forget Password?{" "}
                    <Link className="link" to={"forget"}>
                      Forget Password{" "}
                    </Link>
                  </p> */}
                </form>
              </div>
            </Fields>
          </SignupDialogLogin>
        </SignupDialogBoxes>
      </SignupDialogCenter>
      <FooterLayout />
    </div>
  );
};

export default LoginPage;