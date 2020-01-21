import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  width: 100%;
  max-width: 640px;
  h1 {
    padding: 8px 0;
    color: #444;
  }
  input {
    color: #444;
    display: block;
    padding: 8px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 0;
    font-size: 1.5rem;
  }
  span {
    color: #f95e5a;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 8px;
    display: block;
  }
  button {
    padding: 8px 16px;
    border-radius: 4px;
    border: 0;
    background: #0dcb7d;
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
  }
  button:hover {
    background: #10b26c;
  }
  button[disabled] {
    cursor: not-allowed;
    background: #88edc4;
    color: #e7fbf3;  }
`;