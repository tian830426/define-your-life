import React from "react";
import styled from "styled-components";

const Boxes = styled.div`

color: ${(props) => {
    switch (props.severity) {
      case "general":
        return "red";
      case "important":
        return "orange";
      case "urgory":
        return "black";
      default:
        return "black";
    }
  }};

`

const Title = styled.h2``;

const Message = styled.p``;

function Notification(props) {

  return (
    <Boxes severity={props.severity}>
      <Title>{props.title}</Title>
      <Message>{props.message}</Message>
    </Boxes>
  );
}

export default Notification;
