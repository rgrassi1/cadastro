import React, { useState } from "react";
import { Form, Input } from '@rocketseat/unform';
import { Container } from "../styles";
import api from "../../../services/api";
import history from '../../../services/history';
import InputMask from "../components/InputMask";
import { schema } from '../validation';

export default function ClientesNew() {
  const [submiting, setSubmiting] = useState(false);
  
  async function handleSubmit(data) {
    setSubmiting(true);
    setTimeout(async () => {
      await api.post("/clientes", data);    
      setSubmiting(false);
      history.push('/');
    }, 1000);
  }

  function handleBack() {
    history.push('/');
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
          <InputMask
            mask={[/\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            type="text"
            name="cep"
            placeholder="CEP"
          />
          <InputMask
            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            type="text"
            name="cpf"
            placeholder="CPF"
          />
          <InputMask
            mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]}
            type="text"
            name="rg"
            placeholder="RG"
          />
          <button type="submit" disabled={submiting}>Submit</button>
          <button type="button" disabled={submiting} onClick={handleBack}>Back</button>
        </Form>
      </div>
    </Container>
  );
}