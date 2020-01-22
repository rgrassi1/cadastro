import React, { useState, useEffect, useCallback } from "react";
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
        <h1>Consulta de Clientes</h1>
        <div>
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
                  <td><a href="#">Editar</a></td>
                  <td><a href="#">Excluir</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  
      </div>
    </Container>
  );
}
