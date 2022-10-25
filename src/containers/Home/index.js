import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import Burger from "../../assets/burger.svg";

import { Image, ContainerItens, Input, InputLabel } from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button";
import Container from "../../components/Container";

function App() {
  const [requests, setRequests] = useState([]);
  const inputRequest = useRef();
  const inputName = useRef();
  const history = useHistory();

  async function addNewRequest() {
    const { data: newRequest } = await axios.post(
      "http://localhost:3001/orders",
      {
        clienteName: inputName.current.value,
        clienteOrder: inputRequest.current.value,
      }
    );

    setRequests([...requests, newRequest]);

    history.push("/pedidos");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Burger} />

      <H1>Faça seu pedido!</H1>

      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente" />

        <Button onClick={addNewRequest}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
