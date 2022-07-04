import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  state = {
    targetId: '',
  }

   buttonHandleClick = ({ target }) => {
     this.setState({
       targetId: target.id,
     });
     const { targetId } = this.state;
     console.log(targetId);
   };

   render() {
     const numero = 1;
     const { expenses } = this.props;
     const { targetId } = this.state;
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
         { expenses && expenses.filter((y) => y.id !== parseFloat(targetId)).map((x) => (
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
             <td>
               <button
                 type="button"
                 onClick={ this.buttonHandleClick }
                 id={ x.id }
                 data-testid="delete-btn"
               >
                 Excluir Despesa
               </button>
             </td>
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
