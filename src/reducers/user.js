const INITIAL_STATE = {
  user: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return action.payload;

  default:
    return state;
  }
};

export default user;
