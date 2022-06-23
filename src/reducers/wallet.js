const INITIAL_STATE = {
  wallet: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_WALLET':
    return [...state, action.payload];

  default:
    return state;
  }
};

export default wallet;
