import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import currencies from './currencies';

const rootReducer = combineReducers({
  user,
  wallet,
  currencies,
});

export default rootReducer;
