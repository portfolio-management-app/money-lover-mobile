import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IBankAsset, IRealEstateAsset } from 'shared/models';
import {
  BuyScreenRouteProps,
  CreateAssetRouteProps,
  MetalDetailScreenProps,
} from 'shared/types';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Start: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
  PortfolioDetail: { id: number; name: string };
  BankAssetDetail: { info: IBankAsset };
  RealEstateAssetDetail: { info: IRealEstateAsset };
  CoinAssetDetail: undefined;
  StockAssetDetail: undefined;
  CurrencyAssetDetail: undefined;
  AssetTypePicker: undefined;
  CreateAsset: { props: CreateAssetRouteProps };
  StockDetail: { symbol: string };
  CoinDetail: { id: string; name: string; currency: string };
  CurrencyDetail: undefined;
  MetalDetail: { type: MetalDetailScreenProps };
  PortfolioPicker: {
    type: BuyScreenRouteProps;
    metalType?: 'gold' | 'silver';
  };
  BuyCrypto: undefined;
  BuyStock: undefined;
  BuyCurrency: undefined;
  BuyGold: undefined;
  BuySilver: undefined;
};

export type BottomStackParamStack = {
  MarketCap: undefined;
  PortfolioList: undefined;
  Setting: undefined;
  Dashboard: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;