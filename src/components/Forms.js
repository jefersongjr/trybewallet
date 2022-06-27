import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as listActions from '../actions';

class Forms extends React.Component {
  state = {
    inputValue: '',
    moeda: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  buttonClickSave = () => {
    const { inputValue } = this.state;
    const { addExpenses } = this.props;

    addExpenses(inputValue);
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
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          category:
          <select
            data-testid="tag-input"
            name="tag"
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
            type="text"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          onClick={ this.buttonClick }
        >
          Salvar
        </button>

        <p>
          { `${inputValue}, ${moeda} ,${method} ,${tag}, ${description}` }
        </p>

      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expenses) => dispatch(listActions.addExpenses(expenses)),
});

Forms.propTypes = {
  currencies: PropTypes.string.isRequired,
  addExpenses: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Forms);
