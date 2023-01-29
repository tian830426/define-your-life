import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import NavbarLayout from "../components/NavbarLayout";
import FooterLayout from "../components/FooterLayout";

import card1 from "../assets/cryPeople.JPG";
import card2 from "../assets/toy.jpg";
import card3 from "../assets/musicPeople.JPG";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomeCenter = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  // background-color: #95a7b5;
  background: rgb(222, 208, 173);
`;

const Container = styled.div`
  width: 30%;
  height: 20vh;
  background-color: yellow;
  padding-top: 50px;
  display: flex;
`;
const Boxes =styled.div`
width: 150px;
height: 150px;
background-color: white;
`
const Title = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  const [products, setProducts] = useState([
    {
      name: "card1",
      url: card1,
    },
    {
      name: "card2",
      url: card2,
    },
    {
      name: "card3",
      url: card3,
    },
  ]);
  const allProducts = products.map((product, i) => (
    <Container>
      <Boxes>
        <Title>
          <img src={product.url} alt={product.name} className="product1" />
        </Title>
        <Body>
          <h4>{product.name}</h4>
          <button>add to cart</button>
        </Body>
      </Boxes>
    </Container>
  ));

  return (
    <>
      <NavbarLayout />
      <HomeCenter>{allProducts}</HomeCenter>
      <FooterLayout />
    </>
  );
};

export default HomePage;
