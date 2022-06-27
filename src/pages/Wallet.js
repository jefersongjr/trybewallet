import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions';
import Forms from '../components/Forms';
import Header from '../components/Header';
import Table from '../components/ExpensesTable';
import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrenciesProps } = this.props;
    getCurrenciesProps();
  }

  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesProps: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  getCurrenciesProps: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
