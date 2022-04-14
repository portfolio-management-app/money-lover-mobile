export type CreateOtherAssetBody = {
  name: string;
  inputDay: string;
  inputMoneyAmount: number;
  inputCurrency: string;
  description: string;
  interestRate: number;
  termRange: number;
};

export type AuthenResponse = {
  email: string;
  token: string;
};

export type CryptoAssetBody = {
  name: string;
  inputDay: string;
  currentAmountHolding: number;
  description: string;
  purchasePrice: number;
  currencyCode: string;
  cryptoCoinCode: string;
};

export type CreateStockAssetBody = {
  name: string;
  inputDay: string;
  description: string;
  currentAmountHolding: number;
  stockCode: string;
  marketCode: string;
  purchasePrice: number;
  currencyCode: string;
};
