const production = {
  GoogleClientID:
    '440213221151-sq1vmgkg40rlmi1ib8cd51m9n55li747.apps.googleusercontent.com',
  FacebookAppID: '283259500459094',
  BASE_URL: 'https://portfolio-management-3.herokuapp.com',
  COIN_API_URL: 'https://api.coingecko.com/api/v3',
  STOCK_API_URL: 'https://finnhub.io/api/v1',
  STOCK_API_KEY: 'c91frk2ad3if9n5lf930',
  CURRENCY_API_KEY: 'pWbCofcpQ0yfczEn0m1Sbp',
  CURRENCY_API_URL: 'https://fcsapi.com/api-v3/forex',
};

const dev = {
  GoogleClientID:
    '440213221151-sq1vmgkg40rlmi1ib8cd51m9n55li747.apps.googleusercontent.com',
  FacebookAppID: '283259500459094',
  BASE_URL: 'https://5bdd-113-163-252-191.ngrok.io',
  COIN_API_URL: 'https://api.coingecko.com/api/v3',
  STOCK_API_URL: 'https://finnhub.io/api/v1',
  STOCK_API_KEY: 'c8h21oiad3i9rgv9d1f0',
  CURRENCY_API_KEY: '6UHQaENkGtQ2OZKTBIz8TAYT',
  CURRENCY_API_URL: 'https://fcsapi.com/api-v3/forex',
};

let temp = production;

if (__DEV__) {
  temp = dev;
}

export const Config = temp;
