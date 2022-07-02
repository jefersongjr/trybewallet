import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const arrayExpense = expenses.map((x) => (
      x.value * x.exchangeRates[x.currency].ask));
    const sumExpense = (arrayExpense.length && arrayExpense.reduce((a, b) => a + b));
    return (
      <header className="Header">
        <p data-testid="email-field">
          { `Email: ${email} ` }
        </p>
        <p data-testid="total-field">
          { sumExpense.toFixed(2) }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
