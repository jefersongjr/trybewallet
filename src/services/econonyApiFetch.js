const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const getEconomyApi = async () => {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return json;
};

export default getEconomyApi;
