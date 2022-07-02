import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const numero = 1;
    const { expenses } = this.props;
    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
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
            <td key="Real">Real</td>
          </tr>))}

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Table);
