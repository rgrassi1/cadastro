import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    padding: 8px 0;
    color: #444;
  } 

  form {
    max-width: 640px;
    width: 100%;
  }
  form > input {
    color: #444;
    display: block;
    padding: 8px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 0;
    font-size: 1.5rem;
  }
  form > span {
    color: #f95e5a;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 8px;
    display: block;
  }
  form > button {
    padding: 8px 16px;
    border-radius: 4px;
    border: 0;
    background: #0dcb7d;
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;   
  }
  form > button:hover {
    background: #10b26c;
  }
  form > button[disabled] {
    cursor: not-allowed;
    background: #88edc4;
    color: #e7fbf3;  
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