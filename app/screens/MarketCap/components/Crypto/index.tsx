import { observer } from 'mobx-react-lite';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { SCREEN_CONTENT } from 'screens/MarketCap/constant';
import { NoData, TransparentLoading } from 'shared/components';
import { CoinDetailStore } from 'shared/stores';
import { CoinItem, Filter } from './components';
import { CryptoStore } from './store';

const Component = () => {
  React.useEffect(() => {
    CryptoStore.getData();
  }, []);

  return (
    <>
      <Filter />
      {CryptoStore.data.length ? (
        <FlatList
          refreshing={CryptoStore.isLoading}
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                CryptoStore.resetPage();
                CryptoStore.getData();
              }}
              refreshing={CryptoStore.isLoading}
            />
          }
          data={CryptoStore.data}
          renderItem={(item) => <CoinItem coin={item} />}
          keyExtractor={(item) => item.id}
          onEndReached={() => CryptoStore.getData()}
        />
      ) : (
        <>
          {!CryptoStore.isLoading && <NoData message={SCREEN_CONTENT.noData} />}
        </>
      )}
      <TransparentLoading
        show={CryptoStore.dataVersion === 0 || CoinDetailStore.loading}
      />
    </>
  );
};
export const CryptoMarket = observer(Component);