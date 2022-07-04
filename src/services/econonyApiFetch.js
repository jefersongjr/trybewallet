export const getEconomyApi = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  const jsonArray = Object.keys(json);
  const jsonFilter = jsonArray.filter((x) => x !== 'USDT');
  return jsonFilter;
};

export const getEconomyApiExchanges = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return json;
};
