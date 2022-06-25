import React from 'react';
import Forms from '../components/Forms';
import Header from '../components/Header';
import './Wallet.css';

class Wallet extends React.Component {
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
