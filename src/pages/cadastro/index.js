import React, { useState } from "react";
import { Container, Form } from "./styles";
import api from "../../services/api";
import InputCEP from "../../components/InputCEP";
import InputCPF from "../../components/InputCPF";
import InputRG from "../../components/InputRG";
import * as Yup from 'yup';
import validation from '../../helpers/validation';

const schema = Yup.object().shape({
  codigo: Yup.string()
    .required('O código é obrigatório'),
  nome: Yup.string()
    .required('O nome é obrigatório'),
  endereco: Yup.string()
    .required('O endereço é obrigatório'),  
  bairro: Yup.string()
    .required('O bairro é obrigatório'),
  cidade: Yup.string()
    .required('A cidade é obrigatório'),  
  cep: Yup.string()
    .matches('[0-9]{2}.[0-9]{3}-[0-9]{3}', {
      message: 'CEP inválido', excludeEmptyString: true 
    })
    .required('O CEP é obrigatório'),
  cpf: Yup.string()
    .matches('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}', {
      message: 'CPF inválido', excludeEmptyString: true
    })
    .required('O CPF é obrigatório'),
  rg: Yup.string()
    .matches('[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}', {
      message: 'RG inválido', excludeEmptyString: true
    })
    .required('O RG é obrigatório') 
})

export default function Cadastro() {
  const [data, setData] = useState({
    codigo: "",
    nome: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    cpf: "",
    rg: "",
  });
  const [errors, setErrors] = useState({});
  const [fetching, setFetching] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  async function handleSubmit(e) {
    e.preventDefault();

    const { error, errors } = await validation(schema, data);
    if (error) {
      setErrors(errors)
    }

    setFetching(true);
    setTimeout(async () => {
      await api.post("/clientes", data);    
      setFetching(false);
    }, 1000);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastro de cliente</h1>
        <input
          id="codigo"
          name="codigo"
          type="text"
          placeholder="Código"
          onChange={handleChange}
          value={data.codigo}
        />
        <span>{errors.codigo && `* ${errors.codigo.message}`}</span>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
          value={data.name}
        />
        <span>{errors.nome && `* ${errors.nome.message}`}</span>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          onChange={handleChange}
          value={data.endereco}
        />
        <span>{errors.endereco && `* ${errors.endereco.message}`}</span>
        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          onChange={handleChange}
          value={data.bairro}
        />
        <span>{errors.bairro && `* ${errors.bairro.message}`}</span>
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          onChange={handleChange}
          value={data.cidade}
        />
        <span>{errors.cidade && `* ${errors.cidade.message}`}</span>        
        <InputCEP
          type="text"
          name="cep"
          placeholder="CEP"
          onChange={handleChange}
          value={data.cep}
        />
        <span>{errors.cep && `* ${errors.cep.message}`}</span>        
        <InputCPF
          type="text"
          name="cpf"
          placeholder="CPF"
          onChange={handleChange}
          value={data.cpf}
        />
        <span>{errors.cpf && `* ${errors.cpf.message}`}</span>        
        <InputRG
          type="text"
          name="rg"
          placeholder="RG"
          onChange={handleChange}
          value={data.rg}
        />
        <span>{errors.rg && `* ${errors.rg.message}`}</span>        
        <button type="submit" disabled={fetching}>Submit</button>
      </Form>
    </Container>
  );
}