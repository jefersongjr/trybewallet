import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </main>
    );
  }
}

export default App;
