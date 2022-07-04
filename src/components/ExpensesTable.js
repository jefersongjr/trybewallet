import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses } from '../actions';

class Table extends React.Component {
  render() {
    const numero = 1;
    const { expenses, deleteExpensesProps } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses && expenses.map((x) => (
            <tr key={ x.id }>
              <td key={ x.description }>
                {x.description}
              </td>
              <td key={ x.tag }>{x.tag}</td>
              <td key={ x.method }>{x.method}</td>
              <td key={ x.value }>{ parseFloat((x.value)).toFixed(2)}</td>
              <td key={ x.description }>
                {(x.exchangeRates[x.currency].name).split('/', numero)}
                {' '}
              </td>
              <td key={ x.method }>
                { parseFloat((x.exchangeRates[x.currency].ask)).toFixed(2) }
              </td>
              <td key={ x.value * x.exchangeRates[x.currency].ask }>
                { (x.value * x.exchangeRates[x.currency].ask).toFixed(2) }

              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={ () => deleteExpensesProps(x.id) }
                  data-testid="delete-btn"
                >
                  Excluir Despesa
                </button>
              </td>
            </tr>))}
        </tbody>

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpensesProps: (id) => dispatch(deleteExpenses(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  deleteExpensesProps: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
