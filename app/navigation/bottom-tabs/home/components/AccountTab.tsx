import { Icon, TextContainer } from 'shared/components';
import React from 'react';
import { colorScheme } from 'shared/styles';
import { View } from 'react-native-ui-lib';
import { BOTTOM_TAB_CONTENT } from '../index';

interface IProps {
  focused: boolean;
}
export const AccountTab = ({ focused }: IProps) => {
  return (
    <View center>
      <Icon.MaterialCommunity
        name="account"
        size={25}
        color={focused ? colorScheme.theme : colorScheme.black200}
      ></Icon.MaterialCommunity>

      <TextContainer
        style={{
          color: focused ? colorScheme.theme : colorScheme.black200,
        }}
        type="xxx-small"
      >
        {BOTTOM_TAB_CONTENT.account}
      </TextContainer>
    </View>
  );
};
