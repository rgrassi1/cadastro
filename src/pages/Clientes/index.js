import React, { useState, useEffect, useCallback } from "react";
import { MdEdit, MdRemoveCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from "./styles";
import api from "../../services/api";

export default function Consulta() {
  const [clientes, setClientes] = useState([]);

  const loadClientes = useCallback(async () => {
    const response = await api.get("/clientes");
    setClientes(response.data);
  }, []);

  useEffect(() => {
    loadClientes();
  }, [loadClientes]);

  return (
    <Container>
      <div>
        <div>
          <h1 style={{ alignSelf: 'center' }}>Consulta de Clientes</h1>
          <Link to='/new' style={{ alignSelf: 'flex-start', fontWeight: 500, fontSize: '1.60rem', padding: 8 }}>Novo cliente</Link>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>CEP</th>
                <th>CPF</th>
                <th>RG</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.codigo}</td>
                  <td style={{ minWidth: 120 }}>{cliente.nome}</td>
                  <td style={{ minWidth: 150 }}>{cliente.endereco}</td>
                  <td style={{ minWidth: 120 }}>{cliente.bairro}</td>
                  <td style={{ minWidth: 120 }}>{cliente.cidade}</td>
                  <td>{cliente.cep}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.rg}</td>
                  <td>
                    <Link to={`/${cliente.id}`}><MdEdit size={20}/></Link>
                  </td>
                  <td>
                    <Link to='/'><MdRemoveCircle size={20}/></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  
      </div>
    </Container>
  );
}
