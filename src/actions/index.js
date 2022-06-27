import getEconomyApi from '../services/econonyApiFetch';

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const addWallet = (wallet) => ({
  type: 'ADD_WALLET',
  payload: wallet,
});

export const addCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  payload: currencies,
});

export function getCurrencies() {
  return async (dispatch) => {
    getEconomyApi().then((resp) => {
      dispatch(addCurrencies(resp));
    });
  };
}
