const INITIAL_STATE = {
  currencies: [],
};

const currencies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return ({ ...state, currencies: action.payload });

  default:
    return state;
  }
};

export default currencies;
