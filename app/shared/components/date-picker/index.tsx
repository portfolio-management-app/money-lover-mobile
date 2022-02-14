import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colorScheme, fontProvider, iconProvider } from 'shared/styles';
import { parseToString } from 'utils/date';
import { Icon } from 'react-native-elements';
import { TextContainer } from 'shared/components';

interface IProps {
  label: string;
  onChange?: (date: Date) => void;
  maxDate?: Date;
  minDate?: Date;
}

export const DatePicker = ({ label, onChange, minDate, maxDate }: IProps) => {
  const [date, setDate] = React.useState(new Date());
  const [dateString, setDateString] = React.useState(
    parseToString(new Date(), false)
  );
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const toggle = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onDateChange = React.useCallback(
    (event: Event, selectedDate: Date | undefined) => {
      const currentDate = selectedDate || date;
      if (onChange) {
        onChange(currentDate);
      }
      setDate(currentDate);
      setDateString(parseToString(currentDate, false));
    },
    [onChange]
  );
  return (
    <View>
      <TouchableOpacity onPress={toggle} style={styles.datePickerButton}>
        <TextContainer style={{ marginBottom: 10 }} type="small">
          {label}
        </TextContainer>
        <View style={styles.datePicker}>
          <TextContainer type="small">{dateString}</TextContainer>
          <Icon
            name="calendar"
            type={iconProvider.evilicon}
            tvParallaxProperties={{}}
          />
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(event: Event, date: Date | undefined) => {
            toggle();
            onDateChange(event, date);
          }}
          onTouchCancel={toggle}
          maximumDate={maxDate ? maxDate : new Date()}
          minimumDate={minDate ? minDate : new Date(2000, 1, 1)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerButton: {
    borderBottomWidth: 0.5,
    borderColor: colorScheme.gray400,
    paddingBottom: 4,
    marginBottom: 20,
    fontFamily: fontProvider.openSans,
    marginHorizontal: 10,
  },
});