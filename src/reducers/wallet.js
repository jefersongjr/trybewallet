const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchanges: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return ({ ...state, currencies: action.payload });

  case 'ADD_EXPENSES':
    return ({ ...state,
      expenses: [...state.expenses, (
        { id: state.expenses.length,
          value: action.payload.inputValue,
          description: action.payload.description,
          currency: action.payload.moeda,
          method: action.payload.method,
          tag: action.payload.tag,
          exchangeRates: action.payload.exchangeRates,
        }
      )] });

  case 'ADD_EXCHANGE':
    return ({ ...state, exchanges: action.payload });

  default:
    return state;
  }
};

export default wallet;
