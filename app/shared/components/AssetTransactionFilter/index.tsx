import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Badge, TouchableOpacity, View } from 'react-native-ui-lib';
import { APP_CONTENT } from 'shared/constants';
import { ITransactionFilterType } from 'shared/models';
import { colorScheme } from 'shared/styles';
import { Icon } from '../Icon';
import { TextContainer } from '../TextContainer';
import { FromDatePicker } from './FromDate';
import { ToDatePicker } from './ToDate';
import { TransactionTypePicker } from './TransactionType';
const CONTENT = APP_CONTENT.transactionFilter;
const ICON_SIZE = 20;

interface IProps {
  onFromDateChange?: (date: string) => void;
  onToDateChange?: (date: string) => void;
  onTransactionTypeChange?: (type: ITransactionFilterType) => void;
  onReset?: () => void;
}
export const AssetTransactionFilter = ({
  onFromDateChange,
  onToDateChange,
  onTransactionTypeChange,
  onReset,
}: IProps) => {
  const [showTransactionType, setShowTransactionType] = React.useState(false);
  const [showFromDate, setShowFromDate] = React.useState(false);
  const [showToDate, setShowToDate] = React.useState(false);
  const [transactionType, setTransactionType] =
    React.useState<ITransactionFilterType>('all');

  const [fromDate, setFromDate] = React.useState<null | string>(null);
  const [toDate, setToDate] = React.useState<null | string>(null);

  const onApply = (type: ITransactionFilterType) => {
    setTransactionType(type);
    setShowTransactionType(false);
    if (onTransactionTypeChange) {
      onTransactionTypeChange(type);
    }
  };

  const reset = () => {
    setTransactionType('all');
    setFromDate(null);
    setToDate(null);
    if (onReset) onReset();
  };

  const handleFromDateChange = (date: string | null) => {
    setFromDate(date);
    setShowFromDate(false);
    if (onFromDateChange && date !== null) onFromDateChange(date);
  };

  const handleToDateChange = (date: string | null) => {
    setToDate(date);
    setShowToDate(false);
    if (onToDateChange && date !== null) onToDateChange(date);
  };
  return (
    <>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => setShowFromDate(true)}
              style={styles.button}
            >
              <TextContainer type="small"> {CONTENT.from}</TextContainer>
              <Icon.Material size={ICON_SIZE} name="keyboard-arrow-down" />
              {fromDate !== null && (
                <Badge
                  backgroundColor={colorScheme.red500}
                  label={'1'}
                  size={16}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowToDate(true)}
              style={styles.button}
            >
              <TextContainer type="small"> {CONTENT.to}</TextContainer>
              <Icon.Material size={ICON_SIZE} name="keyboard-arrow-down" />
              {toDate !== null && (
                <Badge
                  backgroundColor={colorScheme.red500}
                  label={'1'}
                  size={16}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowTransactionType(true)}
              style={styles.button}
            >
              <TextContainer type="small">
                {CONTENT.transactionType}
              </TextContainer>
              <Icon.Material size={ICON_SIZE} name="keyboard-arrow-down" />
              {transactionType !== 'all' && (
                <Badge
                  backgroundColor={colorScheme.red500}
                  label={'1'}
                  size={16}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={{ marginLeft: 10 }}>
              <TextContainer type="small" color={colorScheme.theme}>
                {CONTENT.reset}
              </TextContainer>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <TransactionTypePicker
        type={transactionType}
        onApply={onApply}
        onClose={() => setShowTransactionType(false)}
        show={showTransactionType}
      />
      <FromDatePicker
        onChange={handleFromDateChange}
        show={showFromDate}
        onClose={() => setShowFromDate(false)}
      />
      <ToDatePicker
        onChange={handleToDateChange}
        show={showToDate}
        onClose={() => setShowToDate(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colorScheme.gray600,
    borderWidth: 0.5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
