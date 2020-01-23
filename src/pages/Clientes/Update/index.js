import React, { useState, useEffect, useCallback }  from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from "../styles";
import api from "../../../services/api";
import history from '../../../services/history';
import InputMask from "../components/InputMask";
import { schema } from '../validation';

export default function ClientesUpdate(props) {  
  const { id } = props.match.params;

  const [cliente, setCliente] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  const [error, setError] = useState(false);

  const fetchCliente = useCallback(async () => {
    setError(false);
    try {
      const response = await api.get(`/clientes/${id}`);
      setCliente(response.data);      
    } catch (error) {
      setError(true);
    }
  }, [id]);  

  useEffect(() => {
    fetchCliente();
  }, [fetchCliente]);

  async function handleSubmit(data) {
    setSubmiting(true);
    setTimeout(async () => {
      await api.put(`/clientes/${id}`, data);    
      setSubmiting(false);
      history.push('/');
    }, 1000);
  }

  function handleBack() {
    history.push('/');
  }

  if (!cliente && !error) {
    return (
      <Container>
        <div>
          <h2>Loading...</h2>          
        </div>
      </Container>
    ) 
  }

  if (error) {
    return (
      <Container>
        <div>
          <h2>{`O recurso de id "/${id}" não pode ser localizado!`}</h2>   
          <button type="button" onClick={handleBack}>Back</button>
        </div>
      </Container>
    ) 
  }

  return (
    <Container>
      <div>
        <Form initialData={cliente} schema={schema} onSubmit={handleSubmit}>
          <h1>Cadastro do cliente</h1>
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
  )
}