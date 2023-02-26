import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLayout from "../components/Layout/NavbarLayout";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import FooterLayout from "../components/Layout/FooterLayout";
import styled from "styled-components";
// useHistory
const NotFoundTitle = styled.div`
  margin: 0 auto;
`;

const NotFound404 = styled.h1`
  color: rgb(219, 123, 55);
`;

const NotFoundLink = styled(Link)`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background-color: rgb(104, 142, 129);
  color: white;
  display: flex;
  margin: 15px auto;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  padding: auto 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const BackToPrevious = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  outline: 1.5px solid rgb(104, 142, 129);
  color: rgb(104, 142, 129);
  margin: 15px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  padding: auto 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <>
      <NavbarLayout />
      <BackgroundLayout>
        <NotFoundTitle>
          <NotFound404>404 Not Found</NotFound404>
          <NotFoundLink to="/">回到首頁</NotFoundLink>
          <BackToPrevious onClick={() => navigate(-1)}>回上一頁</BackToPrevious>
        </NotFoundTitle>
      </BackgroundLayout>
      <FooterLayout />
    </>
  );
}

export default NotFound;
