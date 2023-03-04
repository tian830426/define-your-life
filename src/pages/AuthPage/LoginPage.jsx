import { AuthContext } from "./UserAuthProvider";
import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";
import loginImg from "../../assets/cryPeople.JPG";
import changeImg from "../../assets/musicPeople.JPG";
import Button from "../../components/Button";

import signupImg from "../../assets/signinImg.svg";

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

const LoginPage = () => {
  // const { UserLogin } = AuthContext();
  const { UserLogin } = useContext(AuthContext);
  const [err, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      console.log(await UserLogin(email, password));
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
      <BackgroundLayout>
        <SignupDialogCenter>
          <SignupDialogBoxes>
            <SignupDialogBgimg>
              <img src={signupImg} alt="" />
              {/* <img className="loginImg" src={loginImg} alt="loginImg" />
              <img className="changeImg" src={changeImg} alt="changeImg" /> */}
            </SignupDialogBgimg>
            <SignupDialogLogin>
              {/* <SignupDialogTitle>
                Welcome to Album Editor
                <br />
              </SignupDialogTitle> */}
              <Fields>
                <div className="box">
                  <SignupDialogForm onSubmit={SubmitHandler} className="form">
                    <h2>Login</h2>
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
                      <SignupButton type="submit">Sign in</SignupButton>
                    </div>
                    <p className="forget">
                      Don't have an account?{" "}
                      <SignUpLink to={"/home/signup"} className="link">
                        {"signup"}
                      </SignUpLink>
                    </p>
                    {err && <ErrorRemind>{err}</ErrorRemind>}
                    {/* <p className="forget">
                    Forget Password?{" "}
                    <Link className="link" to={"forget"}>
                      Forget Password{" "}
                    </Link>
                  </p> */}
                  </SignupDialogForm>
                </div>
              </Fields>
            </SignupDialogLogin>
          </SignupDialogBoxes>
        </SignupDialogCenter>
      </BackgroundLayout>
      <FooterLayout />
    </div>
  );
};

export default LoginPage;
