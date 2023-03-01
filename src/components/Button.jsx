import styled from "styled-components";

const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2px solid rgb(104, 142, 129);
  color: rgb(104, 142, 129);
  /* margin: 15px 15px; */
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 40px;
  padding: auto 15px;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    background: rgb(104, 142, 129);
    color: white;
  }
`;

export default Button;
