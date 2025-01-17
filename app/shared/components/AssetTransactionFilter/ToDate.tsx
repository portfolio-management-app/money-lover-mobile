import React from 'react';
import { Dialog, View } from 'react-native-ui-lib';
import { APP_CONTENT } from 'shared/constants';
import { colorScheme, styleProvider } from 'shared/styles';
import { BaseButton } from '../Button';
import { DatePicker } from '../DatePicker';

interface IProps {
  show: boolean;
  onClose: () => void;
  onChange: (date: string | null) => void;
}

const Component = ({ show, onClose, onChange }: IProps) => {
  const [toDate, setToDate] = React.useState<null | string>(null);
  return (
    <Dialog visible={show} onDismiss={onClose} bottom>
      <View style={styleProvider.bottomDialog}>
        <DatePicker
          onISOStringChange={setToDate}
          label={APP_CONTENT.transactionFilter.datePickerLabel}
        />
        <BaseButton
          onPress={() => onChange(toDate)}
          backgroundColor={colorScheme.theme}
          style={{ marginTop: 10 }}
          label={APP_CONTENT.transactionFilter.apply}
        />
      </View>
    </Dialog>
  );
};

export const ToDatePicker = React.memo(Component);
