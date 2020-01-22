import React, { useState } from "react";
import { Form, Input } from '@rocketseat/unform';
import { Container } from "../styles";
import api from "../../../services/api";
import InputCEP from "../../../components/InputCEP";
import InputCPF from "../../../components/InputCPF";
import InputRG from "../../../components/InputRG";
import { schema } from '../validation';

export default function Cadastro() {
  const [fetching, setFetching] = useState(false);
  
  async function handleSubmit(data) {
    console.log("data: ", data);
    /*setFetching(true);
    setTimeout(async () => {
      await api.post("/clientes", data);    
      setFetching(false);
    }, 1000);*/
  }

  return (
    <Container>
      <div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <h1>Cadastro de cliente</h1>
          <Input
            type="text"
            name="codigo"
            placeholder="Código"
          />
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
          />
          <Input
            type="text"
            name="endereco"
            placeholder="Endereço"
          />
          <Input
            type="text"
            name="bairro"
            placeholder="Bairro"
          />
          <Input
            type="text"
            name="cidade"
            placeholder="Cidade"
          />
          <InputCEP
            type="text"
            name="cep"
            placeholder="CEP"
          />
          <InputCPF
            type="text"
            name="cpf"
            placeholder="CPF"
          />
          <InputRG
            type="text"
            name="rg"
            placeholder="RG"
          />
          <button type="submit" disabled={fetching}>Submit</button>
        </Form>
      </div>
    </Container>
  );
}