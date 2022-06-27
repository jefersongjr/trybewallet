const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const getEconomyApi = async () => {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  const jsonArray = Object.entries(json);
  const filter = jsonArray.splice(1, 1);
  return filter;
};

export default getEconomyApi;
