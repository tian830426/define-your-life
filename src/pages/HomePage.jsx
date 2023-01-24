import React from "react";
import { Link } from "react-router-dom";
import NavbarLayout from "../components/NavbarLayout";
import FooterLayout from "../components/FooterLayout";

const HomePage = () => {
  return (
    <div>
      <NavbarLayout />
      <div className="homeCenter"
      ></div>
      <FooterLayout />
    </div>
  );
};

export default HomePage;
