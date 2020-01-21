import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    max-width: 1024px;
    overflow-x: auto;
  }
  
  h1 {
    padding: 8px 0;
    color: #444;
  }

  table {
    font-size: 1.6rem;
    color: #444;
  }

  thead > tr {
    height: 36px;
    background: #999;
  }

  thead > tr > th {
    padding: 0 8px;
    border-radius: 4px;
    color: #fff;
  }

  tbody > tr > td {
    background: #fff;
    padding: 4px 8px;
    border-radius: 4px;
  }

  tbody > tr:hover > td {
    background: #ddd;
    transition: all 0.3s;
  }

  tbody > tr > td > a {
    text-decoration: none;
    font-weight: 500;
  }

  tbody > tr > td:last-of-type > a {
    color: red;
  }

`;