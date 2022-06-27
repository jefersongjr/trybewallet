const getEconomyApi = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  const jsonArray = Object.entries(json);
  const jsonFilter = jsonArray.filter((x) => x[0] !== 'USDT');
  const jsonCode = jsonFilter.map((x) => x[0]);
  console.log(jsonCode);
  return jsonCode;
};

export default getEconomyApi;
