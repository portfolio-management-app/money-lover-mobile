import React from 'react';
import { useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { NavigationHeader } from 'navigation/header';
import { RootStackScreenProps } from 'navigation/types';
import {
  SellForm,
  ConfirmSheet,
  CustomToast,
  PlatformView,
  RealEstateInformationCard,
} from 'shared/components';
import { APP_CONTENT } from 'shared/constants';
import { useConfirmSheet } from 'shared/hooks';
import { styleProvider } from 'shared/styles';
import { RealEstateAssetStore } from 'shared/stores';
import { SellDataCallBack } from 'shared/types';

export const RealEstateSellToCash = observer(() => {
  const [apiData, setApiData] = React.useState<SellDataCallBack>({
    amount: 0,
    fee: 0,
    tax: 0,
  });
  const routeProps =
    useRoute<RootStackScreenProps<'RealEstateSellToCash'>['route']>();
  const { show, toggle } = useConfirmSheet();
  const { sellToCash, transactionResponse, information } = RealEstateAssetStore;

  const handleTransfer = () => {
    toggle();
    sellToCash({
      destinationAssetId: routeProps.params.cashDestination.id,
      destinationAssetType: 'cash',
      referentialAssetId: information.id,
      referentialAssetType: 'crypto',
      isTransferringAll: true,
      amountInDestinationAssetUnit: 0,
      amount: routeProps.params.source.inputMoneyAmount,
      currencyCode: information.inputCurrency,
      transactionType: 'withdrawToCash',

      fee: apiData.fee,
      tax: apiData.tax,
    });
  };

  const handleSubmit = (data: SellDataCallBack) => {
    setApiData(data);
    toggle();
  };
  return (
    <PlatformView style={styleProvider.body}>
      <NavigationHeader
        title={`${routeProps.params.source.name} ${APP_CONTENT.drawScreen.header} ${routeProps.params.cashDestination.name}`}
      />
      <RealEstateInformationCard asset={routeProps.params.source} />
      <SellForm
        buttonContent={APP_CONTENT.drawScreen.buttonContent}
        inputPlaceHolder={APP_CONTENT.drawScreen.inputPlaceHolder}
        haveAmountField={false}
        onSell={handleSubmit}
      />
      <ConfirmSheet
        show={show}
        onCancel={toggle}
        onClose={toggle}
        onConfirm={handleTransfer}
        title={APP_CONTENT.drawScreen.drawConfirm.title}
      />
      <CustomToast
        show={transactionResponse.isError}
        variant="error"
        message={transactionResponse.errorMessage}
        onDismiss={transactionResponse.deleteError}
      />
      <CustomToast
        show={transactionResponse.isSuccess}
        message={APP_CONTENT.transferToFund.success}
        onDismiss={transactionResponse.deleteSuccess}
      />
    </PlatformView>
  );
});