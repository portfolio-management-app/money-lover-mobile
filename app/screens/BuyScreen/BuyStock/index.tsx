import { Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { NavigationHeader } from 'navigation/header';
import React from 'react';
import { View } from 'react-native';
import {
  BaseButton,
  CustomTextField,
  CustomToast,
  DatePicker,
  PlatformView,
  TextContainer,
  TransparentLoading,
} from 'shared/components';
import { APP_CONTENT } from 'shared/constants';
import { PortfolioDetailStore, StockDetailStore } from 'shared/stores';
import { styleProvider, colorScheme } from 'shared/styles';
import { CreateStockAssetSchema } from 'shared/validator';
import { formatCurrency } from 'utils/number';
const CONTENT = APP_CONTENT.buyScreen;

export const BuyStock = observer(() => {
  const [success, setSuccess] = React.useState(false);
  const { stockInformation, symbol } = StockDetailStore;
  const { createStockAsset, loadingCreateStockAsset } = PortfolioDetailStore;

  const handleCreate = React.useCallback(
    async (values: any) => {
      const isSuccess = await createStockAsset(values);
      if (isSuccess) {
        setSuccess(true);
      }
    },
    [createStockAsset]
  );

  return (
    <PlatformView style={styleProvider.body}>
      <NavigationHeader title={symbol} />
      <TransparentLoading show={loadingCreateStockAsset} />
      <CustomToast
        variant="success"
        message={CONTENT.createSuccess}
        show={success}
        onDismiss={() => setSuccess(false)}
      />
      <Formik
        validationSchema={CreateStockAssetSchema}
        onSubmit={(values) => handleCreate(values)}
        initialValues={{
          name: '',
          inputDay: new Date().toISOString(),
          description: '',
          currentAmountHolding: 0,
          stockCode: symbol,
          marketCode: '',
          purchasePrice: 0,
          currencyCode: 'USD',
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          touched,
          errors,
        }) => {
          console.log(errors);
          return (
            <View style={styleProvider.formBody}>
              <View style={styleProvider.centerHorizontal}>
                <TextContainer mb={20} bold>
                  {CONTENT.currencyPrice}:{' '}
                </TextContainer>
                <TextContainer mb={20}>
                  {formatCurrency(stockInformation.c, values.currencyCode)}
                </TextContainer>
              </View>
              <CustomTextField
                onBlur={handleBlur('name')}
                value={values.name}
                onChangeText={handleChange('name')}
                placeholder={CONTENT.name}
                errorMessage={touched.name ? errors.name : ''}
              />
              <CustomTextField
                onBlur={handleBlur('description')}
                value={values.description}
                onChangeText={handleChange('description')}
                placeholder={CONTENT.description}
              />

              <CustomTextField
                onBlur={handleBlur('currentAmountHolding')}
                value={values.currentAmountHolding.toString()}
                onChangeText={handleChange('currentAmountHolding')}
                placeholder={CONTENT.amount}
                errorMessage={
                  touched.currentAmountHolding
                    ? errors.currentAmountHolding
                    : ''
                }
              />
              <CustomTextField
                onBlur={handleBlur('purchasePrice')}
                value={values.purchasePrice.toString()}
                onChangeText={handleChange('purchasePrice')}
                placeholder={CONTENT.purchasePrice}
                errorMessage={touched.purchasePrice ? errors.purchasePrice : ''}
              />
              <DatePicker
                onISOStringChange={handleChange('inputDay')}
                label={CONTENT.startDate}
              />

              <BaseButton
                onPress={handleSubmit}
                label={CONTENT.buy}
                backgroundColor={colorScheme.theme}
              />
            </View>
          );
        }}
      </Formik>
    </PlatformView>
  );
});
