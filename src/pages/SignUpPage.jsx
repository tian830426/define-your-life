import React from "react";
import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "../components/firebase";
import NavbarLayout from "../components/NavbarLayout";

//image
import loginImg from "../assets/cryPeople.JPG";
import changeImg from "../assets/musicPeople.JPG";

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
      <div id="signupDialogCenter">
        <div className="signupDialogBoxes">
          <div className="signupDialogBgimg">
            <img className="loginImg" src={loginImg} alt="loginImg" />
            <img className="changeImg" src={changeImg} alt="changeImg" />
          </div>
          <div className="signupDialogLogin">
            <div className="signupDialogTitle">
              welcome to Album Editor
              <br />
              Currently logged in as: {currentUser?.email}{" "}
            </div>
            <div id="fields">
              <input ref={emailRef} placeholder="Email" />
              <input ref={passwordRef} type="password" placeholder="Password" />
            </div>
            <div className="btn">
              <button disabled={loading || currentUser} onClick={handleSignup}>
                Sign Up
              </button>
              <button disabled={loading || currentUser} onClick={handleLogin}>
                Log In
              </button>
              <button disabled={loading || !currentUser} onClick={handleLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

//   <Link to="/signinPage">Signin</Link>
