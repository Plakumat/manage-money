import { currencyRequest } from '../../utils/request';

const CurrencyAPI = {
  getCurrencies: () => currencyRequest.get(`/allCurrency`),
  getGoldPrices: () => currencyRequest.get('/goldPrice'),
};

export default CurrencyAPI;
