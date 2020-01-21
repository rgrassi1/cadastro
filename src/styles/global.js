import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    height: 100%;
    background: #ebeaed;
  }

  body, input, button, h1, h2, h3, h4, h5, p, label {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  #root {
    height: 100%;
  }
`;