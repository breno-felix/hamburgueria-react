import styled from "styled-components";

export const Image = styled.img`
  padding-top: 20px;
`;

export const ContainerItens = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 18px;

    margin-top: 20px;
    margin-bottom: 25px;
  }
`;

export const User = styled.li`
  width: 342px;
  height: 101px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    margin: 39px 15px 0 0;
    cursor: pointer;
    height: 28px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 27px;
  }

  p:first-child {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;

    width: 219px;
  }

  p:last-child {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;

    width: 219px;
  }
`;
