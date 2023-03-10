import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  height: 50px;
  position: fixed;
  z-index: 1000;
  bottom:0;
  text-align: center;
  line-height: 50px;
  background: rgba(255, 255, 255, 0.1);
  /* background-color: #192d2e; */
  color: #617f7f;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0.8;
    /* font-weight: 800; */
    letter-spacing: 1px;
  }
`;

const FooterLayout = () => {
  return <Footer>Copyright © 2023 Helen Lin. All rights reserved.</Footer>;
};

export default FooterLayout;
