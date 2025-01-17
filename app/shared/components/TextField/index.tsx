import React from 'react';
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native';
import { Incubator } from 'react-native-ui-lib';
import { TextContainer } from 'shared/components';
import { colorScheme, fontProvider } from 'shared/styles';

interface IProps {
  errorMessage?: string;
  secureText?: boolean;
  focusable?: boolean;
  placeholder: string;
  maxLength?: number;
  keyBoardType?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void | void;
  onBlur?: (e: any) => void | void;
  onFocus?: (e: any) => void | void;
  floatingPlaceHolder?: boolean;
  floatOnFocus?: boolean;
  value?: string;
}

export const CustomTextField = ({
  errorMessage,
  secureText,
  onChangeText,
  placeholder,
  maxLength,
  onBlur,
  onFocus,
  keyBoardType,
  floatingPlaceHolder = true,
  floatOnFocus = true,
  value,
  focusable,
}: IProps) => {
  return (
    <View>
      <Incubator.TextField
        focusable={focusable}
        onFocus={onFocus}
        value={value}
        onBlur={onBlur}
        keyboardType={keyBoardType}
        selectionColor={colorScheme.theme}
        text70BL
        fieldStyle={styles.field}
        secureTextEntry={secureText}
        placeholder={placeholder}
        floatingPlaceholder={floatingPlaceHolder}
        onChangeText={onChangeText}
        showCharCounter
        floatOnFocus={floatOnFocus}
        floatingPlaceholderStyle={styles.placeHolder}
        maxLength={maxLength}
      />

      <TextContainer
        type="extra-small"
        style={{ marginVertical: 5 }}
        color={colorScheme.red500}
      >
        {errorMessage}
      </TextContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  placeHolder: {
    fontSize: 16,
    fontFamily: fontProvider.openSans,
  },
});
