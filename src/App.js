import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Consulta from './pages/consulta';
import Cadastro from './pages/cadastro';
import GlobalStyle from './styles/global';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={Consulta} />
        <Route path='/new' component={Cadastro}/>
      </Router>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;