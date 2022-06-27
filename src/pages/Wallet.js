import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from '../components/Forms';
import Header from '../components/Header';
import './Wallet.css';
import getEconomyApi from '../services/econonyApiFetch';
import { addCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    getEconomyApi().then((resp) => {
      const { dispatch } = this.props;
      dispatch(addCurrencies(resp));
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <p>
          { `${currencies}` }
        </p>
        <Forms />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
