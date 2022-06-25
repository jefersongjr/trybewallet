import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense-value">
          Valor:
          <input
            data-testid="value-input"
            name="expense-value"
            type="number"
            min="0"
          />
        </label>

        <label htmlFor="method">
          Método de Pagamento:
          <select
            data-testid="method-input"
            name="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento:
          <select
            data-testid="tag-input"
            name="category"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="expense-description">
          Descrição:
          <input
            data-testid="description-input"
            name="expense-description"
            type="text"
          />
        </label>

      </form>

    );
  }
}

export default Forms;
