const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return ({ ...state, currencies: action.payload });

  case 'ADD_EXPENSES':
    return ({ ...state, expenses: [action.payload] });

  default:
    return state;
  }
};

export default wallet;
