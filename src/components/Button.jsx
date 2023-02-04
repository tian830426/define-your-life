import styled from "styled-components";

const Button = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  outline: 2px solid rgb(104, 142, 129);
  color: rgb(104, 142, 129);
  margin: 15px 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  padding: auto 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    background: rgb(104, 142, 129);
    color: white;
  }
`;

export default Button ;
