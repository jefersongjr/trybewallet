import { getEconomyApi, getEconomyApiExchanges } from '../services/econonyApiFetch';

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const addWallet = (wallet) => ({
  type: 'ADD_WALLET',
  payload: wallet,
});

const addCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  payload: currencies,
});

export const addExpenses = (expenses) => ({
  type: 'ADD_EXPENSES',
  payload: expenses,
});

export const deleteExpenses = (id) => ({
  type: 'DELETE_EXPENSES',
  id,
});

export const addExchange = (exchange) => ({
  type: 'ADD_EXCHANGE',
  payload: exchange,
});

export function getCurrencies() {
  return async (dispatch) => {
    await getEconomyApi().then((resp) => {
      dispatch(addCurrencies(resp));
    });
  };
}

export function getExchange() {
  return async (dispatch) => {
    await getEconomyApiExchanges().then((resp) => {
      dispatch(addExchange(resp));
    });
  };
}
