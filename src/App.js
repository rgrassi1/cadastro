import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import ClientesNew from './pages/Clientes/New';
import GlobalStyle from './styles/global';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={Clientes} />
        <Route path='/new' component={ClientesNew}/>
      </Router>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;