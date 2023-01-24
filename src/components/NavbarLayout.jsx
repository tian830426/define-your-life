import React from "react";
import { Link } from "react-router-dom";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
// import SignUpPage from "../pages/SignUpPage";

const NavbarLayout = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbarTitle">
        <h1>Define Your Life</h1>
        <p>Album Editor</p>
      </Link>
      <div className="navbarItems">
        <Link to="signup" className="signup navbarIcon">
          <BsFillPeopleFill /> Signup{" "}
        </Link>
        <Link to="edit" className="edit navbarIcon">
          <BiPhotoAlbum /> Album{" "}
        </Link>
      </div>
    </div>
  );
};

export default NavbarLayout;
