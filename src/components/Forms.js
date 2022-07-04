import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as listActions from '../actions';

const INITIAL_STATE = {
  inputValue: 0,
  moeda: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

class Forms extends React.Component {
  state = INITIAL_STATE

  componentDidMount() {
    const { getExchangeProps } = this.props;
    getExchangeProps();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  buttonClickSave = () => {
    const { addExpenses, exchanges } = this.props;
    const { id, inputValue, moeda, method, tag, description } = this.state;

    const exchangeRates = exchanges;
    delete exchangeRates.USDT;

    addExpenses({ id, inputValue, moeda, method, tag, description, exchangeRates });

    this.setState(INITIAL_STATE);
  }

  render() {
    const { currencies } = this.props;
    const { inputValue, moeda, method, tag, description } = this.state;
    return (
      <form>
        <label htmlFor="inputValue">
          Valor:
          <input
            data-testid="value-input"
            name="inputValue"
            id="inputValue"
            value={ inputValue }
            type="number"
            min="0"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select
            name="moeda"
            id="moeda"
            value={ moeda }
            onChange={ this.handleChange }
          >
            { currencies.map((currency) => (
              <option key={ `${currency}` }>
                { currency }
              </option>))}
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            name="description"
            id="description"
            value={ description }
            type="text"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          onClick={ this.buttonClickSave }
        >
          Adicionar despesa
        </button>
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  exchanges: state.wallet.exchanges,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expenses) => dispatch(listActions.addExpenses(expenses)),
  getExchangeProps: () => dispatch(listActions.getExchange()),

});

Forms.propTypes = {
  currencies: PropTypes.string.isRequired,
  addExpenses: PropTypes.func.isRequired,
  getExchangeProps: PropTypes.func.isRequired,
  exchanges: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Forms);
