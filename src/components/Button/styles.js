import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.isBack ? "rgba(255, 255, 255, 0.14)" : "#d93856"};
  width: 342px;
  height: 68px;

  color: #ffffff;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  margin-top: 35px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  ${(props) => props.isBack && "margin-bottom: 50px"}
`;
