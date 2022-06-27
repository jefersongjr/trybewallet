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

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    dispatch(addCurrencies(json));
  };
}
