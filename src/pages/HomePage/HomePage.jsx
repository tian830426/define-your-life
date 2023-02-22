import React, { useState } from "react";
import NavbarLayout from "../../components/Layout/NavbarLayout";
import BackgroundLayout from "../../components/Layout/BackgroundLayout";
import FooterLayout from "../../components/Layout/FooterLayout";

function HomePage() {
  return (
    <>
      <NavbarLayout />
      <BackgroundLayout></BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default HomePage;
