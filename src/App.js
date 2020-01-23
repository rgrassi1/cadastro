import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './services/history';
import Clientes from './pages/Clientes';
import ClientesNew from './pages/Clientes/New';
import ClientesUpdate from './pages/Clientes/Update';
import GlobalStyle from './styles/global';

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Route exact path='/' component={Clientes} />
        <Route path='/new' component={ClientesNew}/>
        <Route path='/:id' component={ClientesUpdate}/>
      </Router>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;