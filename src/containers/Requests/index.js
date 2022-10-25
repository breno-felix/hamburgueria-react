import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import Package from "../../assets/package.svg";
import Burger from "../../assets/trash.svg";

import Button from "../../components/Button";
import H1 from "../../components/Title";
import Container from "../../components/Container";

import { Image, ContainerItens, User } from "./styles";

function Requests() {
  const [requests, setRequests] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newRequest } = await axios.get(
        "http://localhost:3001/orders"
      );

      setRequests(newRequest);
    }

    fetchUsers();
  }, []);

  async function deleteUser(requestId) {
    await axios.delete(`http://localhost:3001/orders/${requestId}`);

    const newRequests = requests.filter((request) => request.id !== requestId);

    setRequests(newRequests);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Package} />

      <H1>Pedidos</H1>

      <ContainerItens>
        <ul>
          {requests.map((request) => (
            <User key={request.id}>
              <div>
                <p>{request.clienteOrder}</p>
                <p>{request.clienteName}</p>
              </div>
              <button onClick={() => deleteUser(request.id)}>
                <img alt="lata-de-lixo" src={Burger} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>

      <Button isBack={true} onClick={goBackPage}>
        Voltar
      </Button>
    </Container>
  );
}

export default Requests;
