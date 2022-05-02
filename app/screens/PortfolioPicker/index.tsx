import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { NavigationHeader } from 'navigation/header';
import {
  MainStackNavigationProp,
  RootStackScreenProps,
} from 'navigation/types';
import React from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';
import { PlatformView, TextContainer } from 'shared/components';
import { APP_CONTENT } from 'shared/constants';
import { IPortfolio } from 'shared/models';
import { PortfolioDetailStore, PortfolioListStore } from 'shared/stores';
import { styleProvider } from 'shared/styles';

const CONTENT = APP_CONTENT.portfolioPicker;

export const PortfolioPicker = observer(() => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const routeProps =
    useRoute<RootStackScreenProps<'PortfolioPicker'>['route']>();
  const { portfolioList } = PortfolioListStore;
  const handlePortfolioPress = (portfolio: IPortfolio) => {
    PortfolioDetailStore.assignInfo(portfolio);
    const { actionType } = routeProps.params;
    switch (routeProps.params.type) {
      case 'CRYPTO':
        if (actionType === 'BUY') navigation.navigate('BuyCrypto');
        else navigation.navigate('SellCrypto');
        break;
      case 'STOCK':
        if (actionType === 'BUY') navigation.navigate('BuyStock');
        else navigation.navigate('SellStock');
        break;
      case 'CURRENCY':
        if (actionType === 'BUY') navigation.navigate('BuyCurrency');
        else navigation.navigate('SellCurrency');
        break;
      case 'METAL':
        if (routeProps.params.metalType === 'gold') {
          navigation.navigate('BuyGold');
        } else {
          navigation.navigate('BuySilver');
        }
    }
  };
  return (
    <PlatformView style={styleProvider.body}>
      <NavigationHeader title={CONTENT.header} />
      <ScrollView>
        {portfolioList.map((portfolio) => (
          <TouchableOpacity
            onPress={() => handlePortfolioPress(portfolio)}
            key={portfolio.id}
            style={styleProvider.card}
          >
            <TextContainer>{portfolio.name}</TextContainer>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </PlatformView>
  );
});
