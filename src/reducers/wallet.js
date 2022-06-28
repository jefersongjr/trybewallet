const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return ({ ...state, currencies: action.payload });

  case 'ADD_EXPENSES':
    return ({ ...state,
      expenses: [...state.expenses, (
        { id: state.expenses.length,
          value: action.payload,
          description: action.payload,
          currency: action.payload,
          method: action.payload,
          tag: action.payload,
        })] });

  default:
    return state;
  }
};

export default wallet;
