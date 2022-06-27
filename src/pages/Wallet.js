import React from 'react';
import Forms from '../components/Forms';
import Header from '../components/Header';
import './Wallet.css';
import getEconomyApi from '../services/econonyApiFetch';

class Wallet extends React.Component {
  componentDidMount() {
    getEconomyApi();
  }

  render() {
    return (
      <div>
        <Header />
        <Forms />
      </div>
    );
  }
}

export default Wallet;
